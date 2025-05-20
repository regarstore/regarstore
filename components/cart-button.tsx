"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCart } from "@/lib/cart-actions"

export function CartButton() {
  const [itemCount, setItemCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCartItems = async () => {
      setIsLoading(true)
      try {
        const cart = await getCart()
        // Calculate the total number of items (considering quantities)
        const count = cart.reduce((total, item) => total + item.quantity, 0)
        setItemCount(count)
      } catch (error) {
        console.error("Error fetching cart items:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCartItems()

    // Listen for storage events to update cart count when changed in another tab
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cart") {
        fetchCartItems()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    // Listen for custom event when cart is updated
    const handleCartUpdate = () => {
      fetchCartItems()
    }

    window.addEventListener("cartUpdated", handleCartUpdate)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("cartUpdated", handleCartUpdate)
    }
  }, [])

  return (
    <Link href="/cart">
      <Button variant="outline" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {!isLoading && itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        )}
        <span className="sr-only">Keranjang ({itemCount} item)</span>
      </Button>
    </Link>
  )
}
