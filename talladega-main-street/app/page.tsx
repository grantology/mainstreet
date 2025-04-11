import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Store, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { EventCard } from "@/components/event-card"
import { BusinessCard } from "@/components/business-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center py-24 md:py-32">
          <div className="container flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">
              Designated Alabama Main Street
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-white drop-shadow-md sm:text-5xl md:text-6xl">
              Talladega Main Street
            </h1>
            <p className="max-w-[700px] text-lg text-white drop-shadow-md md:text-xl">
              Preserving our heritage, promoting our businesses, and building our future together.
            </p>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" asChild>
                <Link href="/events">Upcoming Events</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/90 hover:bg-white" asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Talladega Main Street
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Talladega Main Street is dedicated to the revitalization and preservation of our historic downtown. As a
                designated Alabama Main Street community, we work to enhance economic development while celebrating our
                rich heritage.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Downtown Talladega"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Do</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our four-point approach focuses on economic vitality, design, promotion, and organization.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <Store className="h-10 w-10 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Economic Vitality</h3>
                    <p className="text-muted-foreground">
                      Supporting existing businesses and attracting new ones to create a thriving downtown economy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-10 w-10 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Design</h3>
                    <p className="text-muted-foreground">
                      Enhancing the physical appearance of downtown through historic preservation and thoughtful design.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <Calendar className="h-10 w-10 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Promotion</h3>
                    <p className="text-muted-foreground">
                      Creating and promoting events that highlight our downtown and attract visitors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="h-10 w-10 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Organization</h3>
                    <p className="text-muted-foreground">
                      Building partnerships and collaborating with stakeholders to achieve our shared vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Events</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us for these exciting community events in downtown Talladega.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
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
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/events">
                  View All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Business Directory Preview */}
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Businesses</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the unique shops and services that make downtown Talladega special.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <BusinessCard
                name="Heritage Cafe"
                category="Restaurant"
                address="123 Main Street"
                phone="(256) 555-1234"
                description="Farm-to-table cuisine in a historic building."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <BusinessCard
                name="Talladega Bookstore"
                category="Retail"
                address="456 Oak Avenue"
                phone="(256) 555-5678"
                description="New and used books with a cozy reading area."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <BusinessCard
                name="Main Street Gallery"
                category="Arts"
                address="789 Elm Street"
                phone="(256) 555-9012"
                description="Local art and handcrafted gifts."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="/businesses">
                  View All Businesses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Involved</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join us in our mission to revitalize downtown Talladega. Whether you're a business owner, resident, or
                visitor, there are many ways to contribute to our vibrant community.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/volunteer">Volunteer</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/donate">Donate</Link>
                </Button>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Volunteers at community event"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-first"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
