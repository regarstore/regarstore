import type { Metadata } from "next"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { requireAuth } from "@/lib/auth-utils"
import { ShoppingBag, Users, Package, CreditCard } from "lucide-react"

export const metadata: Metadata = {
  title: "Admin Dashboard - REGAR STORE",
  description: "Dashboard admin REGAR STORE",
}

export default async function AdminDashboardPage() {
  // Ensure user is authenticated and is an admin
  const session = await requireAuth("admin")

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Selamat datang kembali, {session.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Pesanan</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">+12% dari bulan lalu</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pelanggan</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">+5 pelanggan baru</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Produk</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">2 produk baru</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pendapatan</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp 8.250.000</div>
            <p className="text-xs text-muted-foreground">+18% dari bulan lalu</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Pesanan Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Order #ORD-00{i}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(2023, 4, 15 + i).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">Rp {(65000 * i).toLocaleString("id-ID")}</p>
                    <p className="text-sm text-muted-foreground">{i % 2 === 0 ? "Selesai" : "Diproses"}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pelanggan Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Ahmad Rizki", "Siti Nurhaliza", "Budi Santoso", "Dewi Lestari", "Andi Pratama"].map((name, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-muted-foreground">{name.toLowerCase().replace(" ", "")}@gmail.com</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      Bergabung {new Date(2023, 4, 15 + i).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
