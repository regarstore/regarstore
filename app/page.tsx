import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PackageCard } from "@/components/package-card"
import { AreaBadge } from "@/components/area-badge"
import { TestimonialsSection } from "@/components/testimonials-section"
import { packages } from "@/lib/packages-data"

export default function Home() {
  const featuredPackages = [
    packages.find((p) => p.id === "akrab-super-big-rw"),
    packages.find((p) => p.id === "akrab-jumbo"),
    packages.find((p) => p.id === "akrab-mega-big"),
  ].filter(Boolean)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-background z-0"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Paket Data <span className="text-primary">Terbaik</span> untuk Kebutuhan Internet Anda
                </h1>
                <p className="text-xl text-muted-foreground">
                  Menyediakan Paket Regular XL - AXIS - LIVEON dengan harga terbaik dan kuota melimpah.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/packages">
                      Lihat Paket Data
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/area-check">Cek Area Anda</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur"></div>
                  <div className="relative bg-card rounded-lg p-8 shadow-xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Wifi className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold">REGAR STORE</h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Paket Regular XL - AXIS - LIVEON</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Open Harga Reseller</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>Cepat - Aman - Bergaransi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>READY 24JAM</span>
                        </li>
                      </ul>
                      <Button className="w-full" asChild>
                        <Link href="https://wa.me/6282274942599">Hubungi WhatsApp</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Packages */}
        <section className="py-16 bg-muted/50 relative">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
            }}
          ></div>
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Paket Data Unggulan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih paket data terbaik sesuai dengan kebutuhan Anda. Dapatkan kuota lebih banyak dengan harga
                terjangkau.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/packages">
                  Lihat Semua Paket
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Area Information */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Informasi Area</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kuota yang Anda dapatkan tergantung pada area tempat Anda berada. Cek area Anda untuk mendapatkan
                informasi kuota yang tepat.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[1, 2, 3, 4].map((area) => (
                <div key={area} className="bg-card rounded-lg p-6 text-center shadow-sm">
                  <AreaBadge area={area} className="mx-auto mb-4 text-lg h-10 w-10 flex items-center justify-center" />
                  <h3 className="font-bold mb-2">Area {area}</h3>
                  <p className="text-sm text-muted-foreground">
                    {area === 1 && "Kuota standar"}
                    {area === 2 && "Kuota lebih besar"}
                    {area === 3 && "Kuota besar"}
                    {area === 4 && "Kuota terbesar"}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link href="/area-check">Cek Area Anda</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Mengapa Memilih Kami?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                REGAR STORE menyediakan layanan terbaik dengan berbagai keunggulan untuk memenuhi kebutuhan internet
                Anda.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Aman & Terpercaya</h3>
                <p className="text-muted-foreground">
                  Transaksi aman dan terpercaya dengan jaminan garansi untuk setiap pembelian paket data.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Kuota Melimpah</h3>
                <p className="text-muted-foreground">
                  Dapatkan kuota lebih banyak dengan harga yang lebih terjangkau dibandingkan paket resmi.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Layanan 24 Jam</h3>
                <p className="text-muted-foreground">
                  Layanan pelanggan tersedia 24 jam untuk membantu Anda dengan pertanyaan atau masalah.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
