import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/auth/login-form"
import { getSession } from "@/lib/auth-utils"

export const metadata: Metadata = {
  title: "Login - REGAR STORE",
  description: "Login ke akun REGAR STORE Anda",
}

export default async function LoginPage() {
  // Check if user is already logged in
  const session = await getSession()
  if (session) {
    redirect(session.role === "admin" ? "/admin" : "/account")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground mt-2">Masuk ke akun Anda untuk melihat pesanan dan riwayat transaksi</p>
          </div>

          <div className="bg-card border rounded-lg shadow-sm p-6">
            <LoginForm />

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Belum punya akun?{" "}
                <Link href="/register" className="text-primary hover:underline font-medium">
                  Daftar sekarang
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
