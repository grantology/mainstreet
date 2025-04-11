import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  description: string
  imageUrl: string
}

export function EventCard({ title, date, time, location, description, imageUrl }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>
        <p className="pt-2 text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/events/${encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"))}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
