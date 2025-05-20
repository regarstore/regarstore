"use client"

import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { removeFromCart } from "@/lib/cart-actions"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface RemoveFromCartButtonProps {
  itemId: string
  itemName: string
}

export function RemoveFromCartButton({ itemId, itemName }: RemoveFromCartButtonProps) {
  const { toast } = useToast()
  const router = useRouter()

  const handleRemove = async () => {
    try {
      await removeFromCart(itemId)
      // Dispatch an event to notify that the cart has been updated
      window.dispatchEvent(new CustomEvent("cartUpdated"))
      toast({
        title: "Item dihapus",
        description: `${itemName} telah dihapus dari keranjang Anda.`,
        variant: "destructive",
      })
      router.refresh()
    } catch (error) {
      console.error("Error removing item from cart:", error)
    }
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleRemove}>
      <Trash2 className="h-4 w-4" />
      <span className="sr-only">Hapus</span>
    </Button>
  )
}
