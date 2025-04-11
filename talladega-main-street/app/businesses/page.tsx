import Link from "next/link"
import { Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { BusinessCard } from "@/components/business-card"

export default function BusinessesPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Business Directory
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discover the unique shops, restaurants, and services in downtown Talladega.
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
                <Input type="search" placeholder="Search businesses..." />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  All
                </Button>
                <Button variant="outline" size="sm">
                  Retail
                </Button>
                <Button variant="outline" size="sm">
                  Dining
                </Button>
                <Button variant="outline" size="sm">
                  Services
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Business List */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <BusinessCard
                name="Downtown Diner"
                category="Restaurant"
                address="321 Maple Road"
                phone="(256) 555-3456"
                description="Classic American comfort food in a retro setting."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <BusinessCard
                name="Vintage Finds"
                category="Retail"
                address="654 Pine Street"
                phone="(256) 555-7890"
                description="Antiques and vintage treasures for your home."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <BusinessCard
                name="City Salon"
                category="Services"
                address="987 Cedar Lane"
                phone="(256) 555-2345"
                description="Full-service hair salon and spa."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <BusinessCard
                name="Corner Bakery"
                category="Restaurant"
                address="246 Walnut Avenue"
                phone="(256) 555-6789"
                description="Fresh baked goods and coffee daily."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <BusinessCard
                name="Tech Solutions"
                category="Services"
                address="135 Spruce Street"
                phone="(256) 555-0123"
                description="Computer repair and IT services for businesses and individuals."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
              <BusinessCard
                name="Downtown Fitness"
                category="Services"
                address="579 Birch Boulevard"
                phone="(256) 555-4567"
                description="Full-service gym with personal training and group classes."
                imageUrl="/placeholder.svg?height=200&width=300"
              />
            </div>
          </div>
        </section>

        {/* Add Business CTA */}
        <section className="w-full bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Own a Downtown Business?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join our directory and connect with the community.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">Add Your Business</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
