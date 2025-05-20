"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CreditCard, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { checkout } from "@/lib/cart-actions"
import { DanaPayment } from "@/components/dana-payment"
import { useToast } from "@/hooks/use-toast"

interface CheckoutFormProps {
  total: number
}

export function CheckoutForm({ total }: CheckoutFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDanaPayment, setShowDanaPayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("bank_transfer")
  const [formData, setFormData] = useState<FormData | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    const method = formData.get("payment_method") as string
    setPaymentMethod(method)
    setFormData(formData)

    if (method === "dana") {
      setShowDanaPayment(true)
      return
    }

    processPayment(formData)
  }

  async function processPayment(data: FormData) {
    setIsSubmitting(true)
    try {
      await checkout(data)
      router.push("/checkout/success")
    } catch (error) {
      console.error("Checkout failed:", error)
      setIsSubmitting(false)
      toast({
        title: "Pembayaran gagal",
        description: "Terjadi kesalahan saat memproses pembayaran Anda.",
        variant: "destructive",
      })
    }
  }

  function handleDanaSuccess() {
    if (formData) {
      processPayment(formData)
    }
  }

  function handleDanaCancel() {
    setShowDanaPayment(false)
    setIsSubmitting(false)
    toast({
      title: "Pembayaran dibatalkan",
      description: "Anda telah membatalkan proses pembayaran.",
    })
  }

  return (
    <>
      <form action={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informasi Kontak</CardTitle>
            <CardDescription>Masukkan informasi kontak Anda untuk pemrosesan pesanan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="number">Nomor yang akan diisi</Label>
              <Input id="number" name="number" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Catatan (Opsional)</Label>
              <Textarea id="notes" name="notes" />
            </div>

            <div className="space-y-3">
              <Label>Metode Pembayaran</Label>
              <RadioGroup defaultValue="bank_transfer" name="payment_method">
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                  <Label htmlFor="bank_transfer" className="flex-1 cursor-pointer">
                    Transfer Bank
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="dana" id="dana" />
                  <Label htmlFor="dana" className="flex-1 cursor-pointer">
                    DANA (082274942599)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="e_wallet" id="e_wallet" />
                  <Label htmlFor="e_wallet" className="flex-1 cursor-pointer">
                    E-Wallet Lainnya (OVO, GoPay)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="qris" id="qris" />
                  <Label htmlFor="qris" className="flex-1 cursor-pointer">
                    QRIS
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Memproses...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Bayar Sekarang
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>

      <DanaPayment
        amount={total}
        phoneNumber="082274942599"
        onSuccess={handleDanaSuccess}
        onCancel={handleDanaCancel}
        isOpen={showDanaPayment}
      />
    </>
  )
}
