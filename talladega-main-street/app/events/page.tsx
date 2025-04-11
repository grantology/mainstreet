import { Calendar, Filter } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/event-card"

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Events</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover what's happening in downtown Talladega.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="search" placeholder="Search events..." />
                <Button type="submit" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Calendar className="mr-2 h-4 w-4" />
                  This Month
                </Button>
                <Button variant="outline" size="sm">
                  All Events
                </Button>
                <Button variant="outline" size="sm">
                  Upcoming
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <EventCard
                title="Farmers Market"
                date="Every Saturday"
                time="8:00 AM - 12:00 PM"
                location="Courthouse Square"
                description="Fresh local produce, handmade crafts, and more from local vendors."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Summer Concert Series"
                date="June 15, 2025"
                time="7:00 PM - 9:00 PM"
                location="Downtown Plaza"
                description="Live music featuring local bands and food trucks."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Heritage Festival"
                date="September 20, 2025"
                time="10:00 AM - 6:00 PM"
                location="Main Street"
                description="Annual celebration of Talladega's rich history and culture."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Art Walk"
                date="July 10, 2025"
                time="5:00 PM - 8:00 PM"
                location="Downtown Galleries"
                description="Explore local art galleries and meet the artists."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Food Truck Friday"
                date="First Friday of each month"
                time="5:00 PM - 9:00 PM"
                location="City Park"
                description="Enjoy a variety of food trucks and live entertainment."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Holiday Market"
                date="December 5, 2025"
                time="10:00 AM - 4:00 PM"
                location="Community Center"
                description="Shop local for the holidays with unique gifts and crafts."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Historic Home Tour"
                date="October 15, 2025"
                time="1:00 PM - 5:00 PM"
                location="Various Locations"
                description="Tour historic homes and buildings in downtown Talladega."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Business After Hours"
                date="Third Thursday of each month"
                time="5:30 PM - 7:00 PM"
                location="Rotating Businesses"
                description="Networking event for local business owners and professionals."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <EventCard
                title="Downtown Clean-Up Day"
                date="April 22, 2025"
                time="9:00 AM - 12:00 PM"
                location="Meet at Courthouse Square"
                description="Volunteer to help keep our downtown beautiful."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
            </div>
          </div>
        </section>

        {/* Submit Event CTA */}
        <section className="w-full bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Have an Event to Share?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Submit your downtown event for consideration on our calendar.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">Submit Event</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
