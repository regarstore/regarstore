import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Wifi, CheckCircle, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Tentang Kami</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                REGAR STORE adalah penyedia paket data terpercaya dengan harga terbaik dan layanan pelanggan 24 jam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">Siapa Kami</h2>
                <p className="text-muted-foreground mb-4">
                  REGAR STORE didirikan dengan tujuan untuk menyediakan paket data internet dengan harga terjangkau dan
                  kuota melimpah untuk semua orang. Kami berkomitmen untuk memberikan layanan terbaik dan produk
                  berkualitas tinggi.
                </p>
                <p className="text-muted-foreground">
                  Dengan pengalaman bertahun-tahun di industri telekomunikasi, kami memahami kebutuhan pelanggan dan
                  terus berinovasi untuk memberikan solusi terbaik.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <Wifi className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Paket Data Berkualitas</h3>
                      <p className="text-sm text-muted-foreground">Menyediakan paket data XL, AXIS, dan LIVEON</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Aman dan Terpercaya</h3>
                      <p className="text-sm text-muted-foreground">Transaksi aman dengan jaminan garansi</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Harga Terbaik</h3>
                      <p className="text-sm text-muted-foreground">Harga kompetitif dengan kuota melimpah</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Layanan 24 Jam</h3>
                      <p className="text-sm text-muted-foreground">Dukungan pelanggan tersedia 24 jam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 shadow-sm mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Keunggulan Kami</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Wifi className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Kuota Melimpah</h3>
                  <p className="text-sm text-muted-foreground">
                    Dapatkan kuota lebih banyak dengan harga yang lebih terjangkau dibandingkan paket resmi.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Bergaransi</h3>
                  <p className="text-sm text-muted-foreground">
                    Semua produk kami bergaransi. Jika ada masalah, kami siap membantu menyelesaikannya.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Proses Cepat</h3>
                  <p className="text-sm text-muted-foreground">
                    Proses pengisian cepat dan mudah. Paket data akan segera aktif setelah pembayaran.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi kami. Tim kami
                siap membantu Anda.
              </p>
              <div className="space-y-2 max-w-md mx-auto">
                <p className="flex items-center justify-center gap-2">
                  <span className="font-medium">WhatsApp:</span> 082274942599
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="font-medium">Email:</span> info@regarstore.com
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="font-medium">Jam Operasional:</span> 24 Jam
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
