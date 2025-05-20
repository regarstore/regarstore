"use client"

import { useRouter } from "next/navigation"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface CartItemQuantityProps {
  itemId: string
  quantity: number
  updateQuantity: (id: string, quantity: number) => Promise<void>
}

export function CartItemQuantity({ itemId, quantity, updateQuantity }: CartItemQuantityProps) {
  const router = useRouter()
  const { toast } = useToast()

  const increment = async () => {
    await updateQuantity(itemId, quantity + 1)
    // Dispatch an event to notify that the cart has been updated
    window.dispatchEvent(new CustomEvent("cartUpdated"))
    toast({
      title: "Jumlah ditambah",
      description: "Jumlah item telah ditambah.",
    })
    router.refresh()
  }

  const decrement = async () => {
    if (quantity > 1) {
      await updateQuantity(itemId, quantity - 1)
      // Dispatch an event to notify that the cart has been updated
      window.dispatchEvent(new CustomEvent("cartUpdated"))
      toast({
        title: "Jumlah dikurangi",
        description: "Jumlah item telah dikurangi.",
      })
      router.refresh()
    }
  }

  return (
    <div className="flex items-center border rounded-md">
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none" onClick={decrement} disabled={quantity <= 1}>
        <Minus className="h-3 w-3" />
        <span className="sr-only">Kurangi</span>
      </Button>
      <div className="w-10 text-center text-sm">{quantity}</div>
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none" onClick={increment}>
        <Plus className="h-3 w-3" />
        <span className="sr-only">Tambah</span>
      </Button>
    </div>
  )
}
