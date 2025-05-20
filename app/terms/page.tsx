import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Syarat dan Ketentuan</h1>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Ketentuan Umum</h2>
                  <div className="space-y-2">
                    <p>
                      Dengan menggunakan layanan REGAR STORE, Anda menyetujui semua syarat dan ketentuan yang berlaku.
                      Kami berhak untuk mengubah syarat dan ketentuan ini sewaktu-waktu tanpa pemberitahuan terlebih
                      dahulu.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Ketentuan Paket Data</h2>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Masa aktif dihitung sejak paket berhasil diaktifkan (30 hari)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Kuota dapat digunakan untuk tethering</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Kecepatan internet dapat berubah tergantung jaringan dan perangkat</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Paket data hanya dapat digunakan pada jaringan XL, AXIS, atau LIVE ON</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Kuota yang didapatkan tergantung pada area tempat Anda berada</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Paket yang sudah dibeli tidak dapat dikembalikan atau dibatalkan</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Pembayaran</h2>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Pembayaran harus dilakukan sesuai dengan jumlah yang tertera</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Pembayaran yang sudah dilakukan tidak dapat dikembalikan</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Kami tidak bertanggung jawab atas kesalahan pembayaran yang dilakukan oleh pelanggan</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Garansi</h2>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Paket data yang bergaransi dapat diklaim jika terjadi masalah dalam 24 jam setelah aktivasi</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Paket dengan label "NO GARANSI" tidak dapat diklaim jika terjadi masalah</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>Klaim garansi harus disertai dengan bukti pembelian dan ID transaksi</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Lainnya</h2>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>
                        REGAR STORE berhak untuk menolak pesanan jika terdapat indikasi penipuan atau penyalahgunaan
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-medium">•</span>
                      <p>
                        REGAR STORE tidak bertanggung jawab atas kerugian yang disebabkan oleh penggunaan layanan yang
                        tidak sesuai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
