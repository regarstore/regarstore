import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function AccountOrders() {
  // Mock orders data
  const orders = [
    {
      id: "ORD-001",
      date: "15 Mei 2023",
      status: "completed",
      total: 65000,
      items: [{ name: "AKRAB SUPER BIG", quantity: 1 }],
    },
    {
      id: "ORD-002",
      date: "28 Juni 2023",
      status: "processing",
      total: 85000,
      items: [{ name: "AKRAB JUMBO", quantity: 1 }],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Riwayat Pesanan</CardTitle>
        <CardDescription>Lihat status dan detail pesanan Anda</CardDescription>
      </CardHeader>
      <CardContent>
        {orders.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Anda belum memiliki pesanan</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div>
                    <p className="font-medium">Order #{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <Badge variant={order.status === "completed" ? "default" : "outline"}>
                      {order.status === "completed" ? "Selesai" : "Diproses"}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <p className="text-sm">
                        {item.quantity}x {item.name}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <p className="font-medium">Total: Rp {order.total.toLocaleString("id-ID")}</p>
                  <Button variant="outline" size="sm">
                    Detail
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
