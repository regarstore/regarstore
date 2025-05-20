"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface AccountProfileProps {
  user: {
    name: string
    email: string
  }
}

export function AccountProfile({ user }: AccountProfileProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Profil diperbarui",
      description: "Informasi profil Anda telah berhasil diperbarui.",
    })

    setIsLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Informasi Profil</CardTitle>
        <CardDescription>Perbarui informasi profil dan pengaturan akun Anda</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input id="name" defaultValue={user.name} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={user.email} disabled />
            <p className="text-xs text-muted-foreground">Email tidak dapat diubah</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Nomor Telepon</Label>
            <Input id="phone" type="tel" placeholder="Masukkan nomor telepon" />
          </div>

          <div className="pt-4 border-t">
            <h3 className="font-medium mb-4">Ubah Password</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Password Saat Ini</Label>
                <Input id="currentPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">Password Baru</Label>
                <Input id="newPassword" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Konfirmasi Password Baru</Label>
                <Input id="confirmPassword" type="password" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
