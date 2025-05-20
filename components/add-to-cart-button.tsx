"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { addToCart } from "@/lib/cart-actions"

interface AddToCartButtonProps {
  packageId: string
  packageName: string
  className?: string
}

export function AddToCartButton({ packageId, packageName, className }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = async () => {
    setIsAdding(true)
    try {
      await addToCart(packageId)

      // Dispatch a custom event to notify that the cart has been updated
      window.dispatchEvent(new CustomEvent("cartUpdated"))

      toast({
        title: "Ditambahkan ke keranjang",
        description: `${packageName} telah ditambahkan ke keranjang Anda.`,
      })
    } catch (error) {
      console.error("Error adding to cart:", error)
      toast({
        title: "Gagal menambahkan ke keranjang",
        description: "Terjadi kesalahan saat menambahkan item ke keranjang",
        variant: "destructive",
      })
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <Button className={className} onClick={handleAddToCart} disabled={isAdding}>
      <ShoppingCart className="mr-2 h-4 w-4" />
      {isAdding ? "Menambahkan..." : "Beli Sekarang"}
    </Button>
  )
}
