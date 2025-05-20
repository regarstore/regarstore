"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

// In a real app, you would use a database to store cart items
// This is a simplified version using cookies for demonstration

interface CartItem {
  id: string
  quantity: number
}

export async function getCart(): Promise<CartItem[]> {
  const cartCookie = cookies().get("cart")?.value

  if (!cartCookie) {
    return []
  }

  try {
    return JSON.parse(cartCookie)
  } catch (error) {
    return []
  }
}

export async function addToCart(packageId: string) {
  const cart = await getCart()

  const existingItem = cart.find((item) => item.id === packageId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ id: packageId, quantity: 1 })
  }

  cookies().set("cart", JSON.stringify(cart))
  revalidatePath("/cart")

  // This line doesn't trigger a real client-side event from the server,
  // but we'll add a custom event in the client component that adds to cart
}

export async function removeFromCart(packageId: string) {
  const cart = await getCart()

  const updatedCart = cart.filter((item) => item.id !== packageId)

  cookies().set("cart", JSON.stringify(updatedCart))
  revalidatePath("/cart")
}

export async function updateCartItemQuantity(packageId: string, quantity: number) {
  const cart = await getCart()

  const existingItem = cart.find((item) => item.id === packageId)

  if (existingItem) {
    existingItem.quantity = quantity
  }

  cookies().set("cart", JSON.stringify(cart))
  revalidatePath("/cart")
}

export async function clearCart() {
  cookies().set("cart", "[]")
  revalidatePath("/cart")
}

export async function checkout(formData: FormData) {
  // In a real app, you would process the payment here
  // For demonstration, we'll just clear the cart and redirect

  // Get payment method
  const paymentMethod = formData.get("payment_method") as string

  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Clear the cart
  await clearCart()

  // Redirect to success page with payment method
  redirect(`/checkout/success?method=${paymentMethod}`)
}
