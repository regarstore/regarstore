import type { ReactNode } from "react"
import Link from "next/link"
import { LayoutDashboard, ShoppingBag, Package, Users, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logout } from "@/lib/auth-utils"

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
          <div className="flex h-16 items-center border-b px-6">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="h-8 w-8 relative">
                <img src="/images/regarstore.png" alt="REGAR STORE Logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">ADMIN</span>
            </Link>
          </div>
          <div className="py-4">
            <nav className="space-y-1 px-3">
              <Link href="/admin" className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium bg-muted">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/admin/orders"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                <ShoppingBag className="h-5 w-5" />
                Pesanan
              </Link>
              <Link
                href="/admin/products"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                <Package className="h-5 w-5" />
                Produk
              </Link>
              <Link
                href="/admin/customers"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                <Users className="h-5 w-5" />
                Pelanggan
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
              >
                <Settings className="h-5 w-5" />
                Pengaturan
              </Link>
            </nav>
          </div>
          <div className="absolute bottom-0 left-0 right-0 border-t p-3">
            <form action={logout}>
              <Button variant="ghost" className="w-full justify-start text-muted-foreground" type="submit">
                <LogOut className="mr-2 h-5 w-5" />
                Logout
              </Button>
            </form>
          </div>
        </aside>

        {/* Main content */}
        <main className="ml-64 flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
