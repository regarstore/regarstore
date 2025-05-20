import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { logout, requireAuth } from "@/lib/auth-utils"
import { AccountProfile } from "@/components/account/account-profile"
import { AccountOrders } from "@/components/account/account-orders"
import { AccountAddresses } from "@/components/account/account-addresses"

export const metadata: Metadata = {
  title: "Akun Saya - REGAR STORE",
  description: "Kelola akun dan pesanan Anda di REGAR STORE",
}

export default async function AccountPage() {
  // Ensure user is authenticated
  const session = await requireAuth()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <Card>
                <CardHeader>
                  <CardTitle>Akun Saya</CardTitle>
                  <CardDescription>Kelola akun dan pesanan Anda</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{session.name}</p>
                    <p className="text-sm text-muted-foreground">{session.email}</p>
                    <form action={logout}>
                      <Button variant="outline" className="w-full mt-4" type="submit">
                        Logout
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex-1">
              <Tabs defaultValue="profile">
                <TabsList className="mb-6">
                  <TabsTrigger value="profile">Profil</TabsTrigger>
                  <TabsTrigger value="orders">Pesanan</TabsTrigger>
                  <TabsTrigger value="addresses">Alamat</TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <AccountProfile user={session} />
                </TabsContent>

                <TabsContent value="orders">
                  <AccountOrders />
                </TabsContent>

                <TabsContent value="addresses">
                  <AccountAddresses />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
