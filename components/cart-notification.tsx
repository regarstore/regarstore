"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

export function CartNotification() {
  const searchParams = useSearchParams()
  const { toast } = useToast()

  useEffect(() => {
    const action = searchParams.get("action")
    const item = searchParams.get("item")

    if (action && item) {
      if (action === "added") {
        toast({
          title: "Ditambahkan ke keranjang",
          description: `${item} telah ditambahkan ke keranjang Anda.`,
        })
      } else if (action === "removed") {
        toast({
          title: "Dihapus dari keranjang",
          description: `${item} telah dihapus dari keranjang Anda.`,
          variant: "destructive",
        })
      } else if (action === "updated") {
        toast({
          title: "Keranjang diperbarui",
          description: `Jumlah ${item} telah diperbarui.`,
        })
      }
    }
  }, [searchParams, toast])

  return null
}
