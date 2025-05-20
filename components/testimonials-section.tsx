import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TestimonialCard } from "@/components/testimonial-card"

export function TestimonialsSection() {
  // Featured testimonials for the homepage with gender information
  const featuredTestimonials = [
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
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Apa Kata Pelanggan Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lihat testimoni dari pelanggan yang telah menggunakan layanan REGAR STORE. Kepuasan pelanggan adalah
            prioritas utama kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredTestimonials.map((testimonial) => (
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
          <Button asChild>
            <Link href="/testimonials">
              Lihat Semua Testimoni
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
