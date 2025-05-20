import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getCart, updateCartItemQuantity } from "@/lib/cart-actions"
import { CartItemQuantity } from "@/components/cart-item-quantity"
import { RemoveFromCartButton } from "@/components/remove-from-cart-button"
import { packages } from "@/lib/packages-data"
import { CartNotification } from "@/components/cart-notification"

export default async function CartPage() {
  const cartItems = await getCart()

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

  const isEmpty = cartItems.length === 0

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Keranjang Belanja</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Review paket data yang Anda pilih sebelum melanjutkan ke pembayaran.
              </p>
            </div>

            {isEmpty ? (
              <div className="text-center py-16">
                <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-muted flex items-center justify-center">
                  <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-medium mb-4">Keranjang Anda Kosong</h2>
                <p className="text-muted-foreground mb-8">Anda belum menambahkan paket data ke keranjang.</p>
                <Button asChild>
                  <Link href="/packages">Lihat Paket Data</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="rounded-lg border shadow-sm overflow-hidden">
                    <div className="divide-y">
                      {cartWithDetails.map((item) => (
                        <div key={item.id} className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="flex-1">
                            <h3 className="font-medium">{item.details?.name || "Paket tidak ditemukan"}</h3>
                            <p className="text-muted-foreground text-sm">
                              Rp {item.details?.price.toLocaleString("id-ID") || "0"}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <CartItemQuantity
                              itemId={item.id}
                              quantity={item.quantity}
                              updateQuantity={updateCartItemQuantity}
                            />
                            <RemoveFromCartButton itemId={item.id} itemName={item.details?.name || "Paket"} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rounded-lg border shadow-sm p-6 space-y-6 sticky top-20">
                    <h3 className="font-medium text-lg">Ringkasan Pesanan</h3>
                    <div className="space-y-2">
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
                    <Button asChild className="w-full">
                      <Link href={`/checkout?total=${subtotal}`}>Lanjutkan ke Pembayaran</Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Cart notification component */}
            <CartNotification />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
