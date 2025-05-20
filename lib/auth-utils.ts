"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// In a real app, you would use a database to store users
// This is a simplified version using cookies for demonstration

export interface User {
  id: string
  name: string
  email: string
  role: "member" | "admin"
  createdAt: string
}

// Mock users database
const USERS_DB: User[] = [
  {
    id: "admin-1",
    name: "Admin",
    email: "admin@regarstore.com",
    role: "admin",
    createdAt: new Date().toISOString(),
  },
]

// Validation schemas
export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
})

export const registerSchema = z
  .object({
    name: z.string().min(2, "Nama minimal 2 karakter"),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    confirmPassword: z.string().min(6, "Konfirmasi password minimal 6 karakter"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan konfirmasi password tidak cocok",
    path: ["confirmPassword"],
  })

export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  try {
    // Validate input
    loginSchema.parse({ email, password })

    // In a real app, you would verify credentials against a database
    // For demo purposes, we'll accept any email with password "password123"
    // except for the admin account which has a specific email

    let user: User | undefined

    if (email === "admin@regarstore.com" && password === "admin123") {
      user = USERS_DB.find((u) => u.email === email)
    } else if (password === "password123") {
      // Find user or create a new member account
      user = USERS_DB.find((u) => u.email === email)

      if (!user) {
        // Create a new user (in a real app, this would be a separate registration flow)
        user = {
          id: `user-${Date.now()}`,
          name: email.split("@")[0], // Use part of email as name
          email,
          role: "member",
          createdAt: new Date().toISOString(),
        }
        USERS_DB.push(user)
      }
    }

    if (!user) {
      return { success: false, error: "Email atau password salah" }
    }

    // Set auth cookie (in a real app, this would be a JWT or session token)
    cookies().set(
      "auth",
      JSON.stringify({
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      },
    )

    revalidatePath("/")
    return { success: true, redirectTo: user.role === "admin" ? "/admin" : "/account" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
    return { success: false, error: "Terjadi kesalahan saat login" }
  }
}

export async function register(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string

  try {
    // Validate input
    registerSchema.parse({ name, email, password, confirmPassword })

    // Check if user already exists
    const existingUser = USERS_DB.find((u) => u.email === email)
    if (existingUser) {
      return { success: false, error: "Email sudah terdaftar" }
    }

    // Create new user
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role: "member",
      createdAt: new Date().toISOString(),
    }

    USERS_DB.push(newUser)

    // Set auth cookie
    cookies().set(
      "auth",
      JSON.stringify({
        userId: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      },
    )

    revalidatePath("/")
    return { success: true, redirectTo: "/account" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0].message }
    }
    return { success: false, error: "Terjadi kesalahan saat mendaftar" }
  }
}

export async function logout() {
  cookies().delete("auth")
  revalidatePath("/")
  redirect("/login")
}

export async function getSession() {
  const authCookie = cookies().get("auth")?.value

  if (!authCookie) {
    return null
  }

  try {
    return JSON.parse(authCookie)
  } catch (error) {
    return null
  }
}

export async function requireAuth(role?: "member" | "admin") {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  if (role && session.role !== role) {
    if (role === "admin") {
      // Redirect non-admin users to their account page
      redirect("/account")
    } else {
      // This case shouldn't happen in normal flow
      redirect("/")
    }
  }

  return session
}
