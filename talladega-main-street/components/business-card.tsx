import { MapPin, Phone, Tag } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface BusinessCardProps {
  name: string
  category: string
  address: string
  phone: string
  description: string
  imageUrl: string
}

export function BusinessCard({ name, category, address, phone, description, imageUrl }: BusinessCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img src={imageUrl || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{name}</h3>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{category}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{address}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{phone}</span>
        </div>
        <p className="pt-2 text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/businesses/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
