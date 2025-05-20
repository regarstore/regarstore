import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  name: string
  date: string
  rating: number
  comment: string
  gender: "male" | "female"
  avatarUrl?: string
}

export function TestimonialCard({ name, date, rating, comment, gender, avatarUrl }: TestimonialCardProps) {
  // Determine avatar image based on gender
  const defaultAvatarUrl = gender === "female" ? "/images/avatar-female.png" : "/images/avatar-male.png"

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar>
            <AvatarImage src={avatarUrl || defaultAvatarUrl} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </div>
        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{comment}</p>
      </CardContent>
    </Card>
  )
}
