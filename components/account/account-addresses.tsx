"use client"

import { useState } from "react"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export function AccountAddresses() {
  const [addresses, setAddresses] = useState([
    {
      id: "addr-1",
      name: "Rumah",
      recipient: "Ahmad Rizki",
      phone: "081234567890",
      address: "Jl. Contoh No. 123, Kecamatan Contoh, Kota Contoh",
      isDefault: true,
    },
  ])

  const { toast } = useToast()

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter((addr) => addr.id !== id))
    toast({
      title: "Alamat dihapus",
      description: "Alamat telah berhasil dihapus.",
    })
  }

  const handleSetDefault = (id: string) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      })),
    )
    toast({
      title: "Alamat utama diubah",
      description: "Alamat utama telah berhasil diubah.",
    })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Alamat Pengiriman</CardTitle>
          <CardDescription>Kelola alamat pengiriman Anda</CardDescription>
        </div>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Tambah Alamat
        </Button>
      </CardHeader>
      <CardContent>
        {addresses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Anda belum menambahkan alamat</p>
          </div>
        ) : (
          <div className="space-y-4">
            {addresses.map((address) => (
              <div key={address.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{address.name}</p>
                      {address.isDefault && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Utama</span>
                      )}
                    </div>
                    <p className="mt-1">{address.recipient}</p>
                    <p className="text-sm text-muted-foreground">{address.phone}</p>
                    <p className="text-sm text-muted-foreground mt-1">{address.address}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(address.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      Hapus
                    </Button>
                    {!address.isDefault && (
                      <Button variant="outline" size="sm" onClick={() => handleSetDefault(address.id)}>
                        Jadikan Utama
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
