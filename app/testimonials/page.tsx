import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function TestimonialsPage() {
  // Sample testimonials data with gender information
  const testimonials = [
    {
      id: 1,
      name: "Ahmad Rizki",
      date: "15 Mei 2023",
      rating: 5,
      gender: "male" as const,
      comment:
        "Paket data sangat cepat dan stabil. Kuota sesuai dengan yang dijanjikan. Proses aktivasi juga sangat cepat, hanya dalam hitungan menit. Terima kasih REGAR STORE!",
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      date: "23 April 2023",
      rating: 5,
      gender: "female" as const,
      comment:
        "Sudah langganan di REGAR STORE selama 6 bulan dan tidak pernah mengecewakan. Harga terjangkau dengan kuota melimpah. Customer service juga sangat responsif.",
    },
    {
      id: 3,
      name: "Budi Santoso",
      date: "10 Juni 2023",
      rating: 4,
      gender: "male" as const,
      comment:
        "Paket AKRAB JUMBO sangat worth it! Kuota besar dengan harga yang sangat terjangkau. Sangat cocok untuk kebutuhan WFH dan streaming.",
    },
    {
      id: 4,
      name: "Dewi Lestari",
      date: "5 Mei 2023",
      rating: 5,
      gender: "female" as const,
      comment:
        "Proses pembelian sangat mudah dan cepat. Kuota langsung aktif dalam waktu kurang dari 5 menit. Sangat recommended!",
    },
    {
      id: 5,
      name: "Andi Pratama",
      date: "18 Juni 2023",
      rating: 5,
      gender: "male" as const,
      comment:
        "Sudah coba berbagai provider, tapi REGAR STORE yang paling memuaskan. Kuota besar, harga murah, dan pelayanan cepat. Puas banget!",
    },
    {
      id: 6,
      name: "Rina Marlina",
      date: "2 Juli 2023",
      rating: 4,
      gender: "female" as const,
      comment:
        "Awalnya ragu, tapi setelah coba ternyata bagus banget. Kuota sesuai dengan yang dijanjikan dan koneksi stabil. Terima kasih REGAR STORE!",
    },
    {
      id: 7,
      name: "Doni Kusuma",
      date: "12 Mei 2023",
      rating: 5,
      gender: "male" as const,
      comment:
        "Paket AKRAB SUPER BIG RW mantap banget! Area 4 dapat kuota 83GB, worth it banget dengan harga segitu. Recommended!",
    },
    {
      id: 8,
      name: "Putri Wulandari",
      date: "28 Juni 2023",
      rating: 5,
      gender: "female" as const,
      comment:
        "Customer service ramah dan cepat tanggap. Paket langsung aktif setelah pembayaran. Kuota besar dan koneksi stabil. Puas!",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Testimoni Pelanggan</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Lihat apa kata pelanggan kami tentang layanan REGAR STORE. Kami berkomitmen untuk memberikan layanan
                terbaik dan kepuasan pelanggan adalah prioritas utama kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  name={testimonial.name}
                  date={testimonial.date}
                  rating={testimonial.rating}
                  comment={testimonial.comment}
                  gender={testimonial.gender}
                />
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Lihat lebih banyak testimoni dari pelanggan kami di channel Telegram kami.
              </p>
              <Button asChild>
                <a
                  href="https://t.me/regar_stores/75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  Lihat Testimoni di Telegram
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
