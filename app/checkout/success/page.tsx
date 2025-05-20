import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const paymentMethod = (searchParams.method as string) || "bank_transfer"

  const paymentMethodText =
    {
      bank_transfer: "Transfer Bank",
      dana: "DANA",
      e_wallet: "E-Wallet",
      qris: "QRIS",
    }[paymentMethod] || "Transfer Bank"

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-md mx-auto text-center">
              <div className="rounded-full bg-primary/10 p-3 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Pembayaran Berhasil!</h1>
              <p className="text-muted-foreground mb-2">
                Terima kasih atas pesanan Anda. Kami akan segera memproses pesanan Anda dan mengirimkan paket data ke
                nomor yang Anda berikan.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Metode pembayaran: <span className="font-medium">{paymentMethodText}</span>
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full">
                  <Link href="/">Kembali ke Beranda</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="https://wa.me/6282274942599">Hubungi Admin</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
