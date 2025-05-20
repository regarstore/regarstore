"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AreaBadge } from "@/components/area-badge"
import { areaData } from "@/lib/area-data"

export default function AreaCheckPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredData = areaData.filter(
    (item) =>
      item.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cities.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `area ${item.area}`.includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Cek Area</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cek area Anda untuk mengetahui kuota yang akan Anda dapatkan. Kuota yang Anda dapatkan tergantung pada
                area tempat Anda berada.
              </p>
            </div>

            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari nama provinsi atau kota/kabupaten..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="rounded-lg border shadow-sm overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Provinsi</TableHead>
                    <TableHead>Kota/Kabupaten</TableHead>
                    <TableHead className="w-[100px] text-center">Area</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.province}</TableCell>
                        <TableCell>{item.cities}</TableCell>
                        <TableCell className="text-center">
                          <AreaBadge area={item.area} className="mx-auto" />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                        Tidak ada hasil yang ditemukan
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
