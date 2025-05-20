import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"
import { getCart } from "@/lib/cart-actions"
import { packages } from "@/lib/packages-data"
import { redirect } from "next/navigation"

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const cartItems = await getCart()

  // Redirect to cart if cart is empty
  if (cartItems.length === 0) {
    redirect("/cart")
  }

  const cartWithDetails = cartItems.map((item) => {
    const packageDetails = packages.find((p) => p.id === item.id)
    return {
      ...item,
      details: packageDetails,
    }
  })

  const subtotal = cartWithDetails.reduce((total, item) => {
    return total + (item.details?.price || 0) * item.quantity
  }, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Checkout</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lengkapi informasi pembayaran untuk menyelesaikan pesanan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <CheckoutForm total={subtotal} />
              </div>
              <div>
                <div className="rounded-lg border shadow-sm p-6 space-y-6 sticky top-20">
                  <h3 className="font-medium text-lg">Ringkasan Pesanan</h3>

                  <div className="space-y-4 divide-y">
                    {cartWithDetails.map((item) => (
                      <div key={item.id} className="pt-4 first:pt-0">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-medium">{item.details?.name || "Paket tidak ditemukan"}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <p>Rp {((item.details?.price || 0) * item.quantity).toLocaleString("id-ID")}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Biaya Admin</span>
                      <span>Rp 0</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
