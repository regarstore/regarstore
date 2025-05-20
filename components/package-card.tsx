"use client"
import { useState } from "react"
import { AlertTriangle, Clock, Shield, Wifi, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AreaBadge } from "@/components/area-badge"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface PackageAreaInfo {
  area: number
  quota: string
}

interface PackageProps {
  package: {
    id: string
    name: string
    price: number
    areas: PackageAreaInfo[]
    hasBonus: boolean
    featured?: boolean
    isPromo?: boolean
    noWarranty?: boolean
  }
}

export function PackageCard({ package: pkg }: PackageProps) {
  const [showDetails, setShowDetails] = useState(false)

  const getPackageBackground = (packageId: string) => {
    // Different gradient backgrounds based on package type
    if (packageId.includes("akrab-super-big")) {
      return "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.1) 100%)"
    } else if (packageId.includes("akrab-jumbo")) {
      return "linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(79, 70, 229, 0.1) 100%)"
    } else if (packageId.includes("akrab-mega")) {
      return "linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(245, 158, 11, 0.1) 100%)"
    } else if (packageId.includes("bebas-puas")) {
      return "linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(220, 38, 38, 0.1) 100%)"
    } else if (packageId.includes("akrab-mini")) {
      return "linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(37, 99, 235, 0.1) 100%)"
    } else if (packageId.includes("akrab-big")) {
      return "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(139, 92, 246, 0.1) 100%)"
    } else {
      return "linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.1) 100%)"
    }
  }

  return (
    <Card
      className={`overflow-hidden relative ${pkg.featured ? "border-primary shadow-lg" : ""}`}
      style={{
        background: getPackageBackground(pkg.id),
      }}
    >
      <CardHeader className="pb-3">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.2' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{pkg.name}</CardTitle>
          <div className="flex gap-2">
            {pkg.isPromo && <Badge variant="destructive">PROMO</Badge>}
            {pkg.noWarranty && (
              <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                NO GARANSI
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3 relative z-10">
        <div className="mb-4">
          <p className="text-3xl font-bold">Rp {pkg.price.toLocaleString("id-ID")}</p>
        </div>
        <div className="space-y-2">
          {pkg.areas.map((areaInfo) => (
            <div key={areaInfo.area} className="flex items-center gap-2">
              <AreaBadge area={areaInfo.area} />
              <span>
                Area {areaInfo.area} = {areaInfo.quota}
              </span>
            </div>
          ))}
          {pkg.hasBonus && <p className="text-sm text-muted-foreground mt-2">✓ Dapat bonus tambahan</p>}
          {pkg.noWarranty && (
            <p className="text-sm text-yellow-500 flex items-center gap-1 mt-2">
              <AlertTriangle className="h-3 w-3" /> Tidak bergaransi
            </p>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="w-full mt-2 text-xs"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Sembunyikan Detail" : "Lihat Detail"}
          </Button>

          {showDetails && (
            <div className="mt-2 space-y-2 bg-muted/50 p-3 rounded-md text-sm">
              <div className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{pkg.noWarranty ? "Tidak bergaransi" : "Bergaransi"}</span>
              </div>
              <div className="flex items-start gap-2">
                <Wifi className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Bisa untuk semua area</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Bisa untuk XL/AXIS/LIVE ON</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Waktu Proses otomatis 1-5 menit</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 relative z-10">
        <AddToCartButton packageId={pkg.id} packageName={pkg.name} className="w-full" />
      </CardFooter>
    </Card>
  )
}
