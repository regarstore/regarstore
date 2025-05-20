import Link from "next/link"
import { Menu, ExternalLink, HelpCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "@/components/mobile-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { CartButton } from "@/components/cart-button"
import { UserMenu } from "@/components/user-menu"
import { getSession } from "@/lib/auth-utils"

export async function Header() {
  const session = await getSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 relative">
              <img src="/images/regarstore.png" alt="REGAR STORE Logo" className="h-full w-full object-contain" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">REGAR STORE</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
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
          <Link
            href="/faq"
            className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
          >
            FAQ
            <HelpCircle className="h-3 w-3" />
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            Tentang Kami
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CartButton />
          <UserMenu user={session} />
        </div>
      </div>
    </header>
  )
}
