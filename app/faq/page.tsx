import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8 text-center">Pertanyaan Umum (FAQ)</h1>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Bagaimana cara mengecek sisa kuota?</AccordionTrigger>
                  <AccordionContent>
                    Anda dapat mengecek sisa kuota melalui aplikasi myXL atau dengan mengunjungi website{" "}
                    <a
                      href="https://sidompul.regarstore.biz.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://sidompul.regarstore.biz.id/
                    </a>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Apakah paket dapat diperpanjang?</AccordionTrigger>
                  <AccordionContent>
                    Ya, paket dapat diperpanjang dengan syarat harus mengunreg paket akrab lama.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Bagaimana cara mengunreg Paket Akrab?</AccordionTrigger>
                  <AccordionContent>
                    Caranya dengan menghapus atau keluar dari anggota akrab melalui aplikasi My XL.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Apa yang terjadi jika kuota habis?</AccordionTrigger>
                  <AccordionContent>
                    Jika kuota habis, Anda akan dikenakan tarif normal sesuai dengan paket Anda.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Berapa lama waktu aktivasi paket?</AccordionTrigger>
                  <AccordionContent>
                    Waktu aktivasi paket biasanya membutuhkan waktu 1-5 menit setelah pembayaran berhasil.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Apakah paket bisa digunakan untuk semua operator?</AccordionTrigger>
                  <AccordionContent>
                    Tidak, paket hanya bisa digunakan untuk operator XL, AXIS, dan LIVE ON.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Bagaimana jika paket tidak aktif setelah pembayaran?</AccordionTrigger>
                  <AccordionContent>
                    Jika paket tidak aktif setelah pembayaran, silakan hubungi customer service kami melalui WhatsApp di
                    082274942599.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Apakah kuota bisa digunakan untuk tethering?</AccordionTrigger>
                  <AccordionContent>
                    Ya, kuota dapat digunakan untuk tethering (berbagi koneksi internet).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>Berapa lama masa aktif paket?</AccordionTrigger>
                  <AccordionContent>
                    Masa aktif paket adalah 30 hari, dihitung sejak paket berhasil diaktifkan.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger>Apakah ada biaya tambahan untuk aktivasi paket?</AccordionTrigger>
                  <AccordionContent>
                    Tidak ada biaya tambahan untuk aktivasi paket. Harga yang tertera sudah termasuk semua biaya.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
