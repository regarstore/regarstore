import Link from "next/link"
import { MessageCircle, Users, Send, Wifi } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wifi className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">REGAR STORE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Menyediakan Paket Regular XL - AXIS - LIVEON dengan harga terbaik.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-sm text-muted-foreground hover:text-primary">
                  Paket Data
                </Link>
              </li>
              <li>
                <Link href="/area-check" className="text-sm text-muted-foreground hover:text-primary">
                  Cek Area
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-muted-foreground hover:text-primary">
                  Testimoni
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Informasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link
                  href="https://sidompul.regarstore.biz.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Cek Paket XL
                </Link>
              </li>
              <li className="text-sm text-muted-foreground">Jam Operasional: 24 Jam</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">WhatsApp: 082274942599</li>
              <li className="text-sm text-muted-foreground">Email: info@regarstore.com</li>
              <li className="flex space-x-4 mt-4">
                <Link
                  href="https://wa.me/6282274942599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-500"
                  title="Chat WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </Link>
                <Link
                  href="https://chat.whatsapp.com/CuZVZcsFdMvC9SRUoCdSO6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-green-500"
                  title="Grup WhatsApp"
                >
                  <Users className="h-5 w-5" />
                  <span className="sr-only">Grup WhatsApp</span>
                </Link>
                <Link
                  href="https://t.me/regar_store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-500"
                  title="Telegram"
                >
                  <Send className="h-5 w-5" />
                  <span className="sr-only">Telegram</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} REGAR STORE. Penyedia Layanan Internet.
          </p>
        </div>
      </div>
    </footer>
  )
}
