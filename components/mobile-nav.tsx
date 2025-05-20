import Link from "next/link"
import { ExternalLink, HelpCircle, MessageSquare, LogIn, UserPlus } from "lucide-react"
import { getSession } from "@/lib/auth-utils"

export async function MobileNav() {
  const session = await getSession()

  return (
    <div className="flex flex-col gap-4 p-4">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Beranda
      </Link>
      <Link href="/packages" className="text-sm font-medium transition-colors hover:text-primary">
        Paket Data
      </Link>
      <Link href="/area-check" className="text-sm font-medium transition-colors hover:text-primary">
        Cek Area
      </Link>
      <Link
        href="https://sidompul.regarstore.biz.id/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
      >
        Cek Paket XL
        <ExternalLink className="h-3 w-3" />
      </Link>
      <Link
        href="/testimonials"
        className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
      >
        Testimoni
        <MessageSquare className="h-3 w-3" />
      </Link>
      <Link href="/faq" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
        FAQ
        <HelpCircle className="h-3 w-3" />
      </Link>
      <Link href="/terms" className="text-sm font-medium transition-colors hover:text-primary">
        Syarat & Ketentuan
      </Link>
      <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
        Tentang Kami
      </Link>

      <div className="border-t my-2 pt-2">
        {session ? (
          <Link
            href={session.role === "admin" ? "/admin" : "/account"}
            className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
          >
            {session.role === "admin" ? "Dashboard Admin" : "Akun Saya"}
          </Link>
        ) : (
          <>
            <Link
              href="/login"
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 mb-2"
            >
              <LogIn className="h-3 w-3" />
              Login
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
            >
              <UserPlus className="h-3 w-3" />
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
