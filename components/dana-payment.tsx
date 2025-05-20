"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Copy, CheckCircle } from "lucide-react"

interface DanaPaymentProps {
  amount: number
  phoneNumber: string
  onSuccess: () => void
  onCancel: () => void
  isOpen: boolean
}

export function DanaPayment({ amount, phoneNumber, onSuccess, onCancel, isOpen }: DanaPaymentProps) {
  const [step, setStep] = useState<"confirm" | "processing" | "complete">("confirm")
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNumber)
    toast({
      title: "Nomor DANA disalin",
      description: "Nomor DANA telah disalin ke clipboard",
    })
  }

  const handleConfirmPayment = () => {
    setStep("processing")
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setStep("complete")
    }, 2000)
  }

  const handleClose = () => {
    if (step === "complete") {
      onSuccess()
    } else {
      onCancel()
    }
    setStep("confirm")
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Pembayaran DANA</DialogTitle>
          <DialogDescription>Selesaikan pembayaran Anda menggunakan DANA</DialogDescription>
        </DialogHeader>

        {step === "confirm" && (
          <div className="space-y-4">
            <div className="flex items-center justify-center p-4">
              <div className="w-24 h-24 relative">
                <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="DANA Logo"
                  width={96}
                  height={96}
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Nomor DANA</Label>
              <div className="flex items-center gap-2">
                <Input value={phoneNumber} readOnly className="flex-1" />
                <Button variant="outline" size="icon" onClick={handleCopyNumber}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Salin nomor</span>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">Kirim pembayaran ke nomor DANA di atas</p>
            </div>

            <div className="space-y-2">
              <Label>Jumlah Pembayaran</Label>
              <Input value={`Rp ${amount.toLocaleString("id-ID")}`} readOnly />
            </div>

            <div className="space-y-2">
              <Label htmlFor="transferId">ID Transaksi DANA</Label>
              <Input id="transferId" placeholder="Masukkan ID transaksi dari DANA" />
              <p className="text-sm text-muted-foreground">
                Masukkan ID transaksi yang Anda dapatkan setelah melakukan pembayaran
              </p>
            </div>
          </div>
        )}

        {step === "processing" && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p>Memverifikasi pembayaran Anda...</p>
          </div>
        )}

        {step === "complete" && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Pembayaran Berhasil!</h3>
              <p className="text-sm text-muted-foreground">Pembayaran Anda telah berhasil diverifikasi</p>
            </div>
          </div>
        )}

        <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          {step === "confirm" && (
            <>
              <Button variant="outline" onClick={onCancel}>
                Batal
              </Button>
              <Button onClick={handleConfirmPayment}>Konfirmasi Pembayaran</Button>
            </>
          )}

          {step === "processing" && (
            <Button variant="outline" onClick={onCancel} disabled={isProcessing}>
              Batal
            </Button>
          )}

          {step === "complete" && <Button onClick={onSuccess}>Lanjutkan</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
