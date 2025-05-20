import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PackageCard } from "@/components/package-card"
import { packages } from "@/lib/packages-data"

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 relative">
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
              <h1 className="text-4xl font-bold mb-4 relative inline-block">
                Paket Data
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full opacity-75"></span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pilih paket data terbaik sesuai dengan kebutuhan Anda. Dapatkan kuota lebih banyak dengan harga
                terjangkau.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
