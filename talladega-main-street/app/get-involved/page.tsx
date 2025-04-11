import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Heart, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function GetInvolvedPage() {
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
                  Get Involved
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join us in our mission to revitalize and preserve downtown Talladega.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Get Involved */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ways to Get Involved</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  There are many ways to support Talladega Main Street's mission.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary" />
                  <CardTitle>Volunteer</CardTitle>
                  <CardDescription>Donate your time and talents to support our events and initiatives.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Volunteers are the backbone of our organization. Whether you can help for a few hours at an event or
                    serve on a committee, your time makes a difference.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="#volunteer-form">
                      Volunteer Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary" />
                  <CardTitle>Donate</CardTitle>
                  <CardDescription>Support our work through financial contributions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Your donations help fund our programs, events, and revitalization efforts. Every contribution, no
                    matter the size, makes an impact on our downtown.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="#donation-form">
                      Donate Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary" />
                  <CardTitle>Attend Events</CardTitle>
                  <CardDescription>Participate in our community events and activities.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Show your support by attending our events, shopping at local businesses, and being an ambassador for
                    downtown Talladega.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/events">
                      View Events <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer Form */}
        <section id="volunteer-form" className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Volunteer With Us</h2>
              <p className="text-muted-foreground md:text-lg">
                Fill out the form to express your interest in volunteering with Talladega Main Street. We'll contact you
                with opportunities that match your interests and availability.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Volunteer Opportunities:</h3>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Event Support</li>
                  <li>Committee Membership</li>
                  <li>Office Assistance</li>
                  <li>Downtown Clean-Up</li>
                  <li>Marketing and Social Media</li>
                  <li>Historic Preservation Projects</li>
                </ul>
              </div>
            </div>
            <form className="space-y-4 rounded-lg border bg-background p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    First Name
                  </label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="johndoe@example.com" required />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="(256) 555-1234" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="interests"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Areas of Interest
                </label>
                <select
                  id="interests"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select an area of interest</option>
                  <option value="events">Event Support</option>
                  <option value="committee">Committee Membership</option>
                  <option value="office">Office Assistance</option>
                  <option value="cleanup">Downtown Clean-Up</option>
                  <option value="marketing">Marketing and Social Media</option>
                  <option value="preservation">Historic Preservation Projects</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us about your interests and availability"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
        </section>

        {/* Donation Section */}
        <section id="donation-form" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <form className="space-y-4 rounded-lg border bg-background p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Make a Donation</h3>
                <p className="text-sm text-muted-foreground">
                  Your contribution helps support our downtown revitalization efforts.
                </p>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="amount"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Donation Amount
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <Button variant="outline" className="w-full">
                    $25
                  </Button>
                  <Button variant="outline" className="w-full">
                    $50
                  </Button>
                  <Button variant="outline" className="w-full">
                    $100
                  </Button>
                  <Button variant="outline" className="w-full">
                    Other
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="first-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    First Name
                  </label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="last-name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input id="email" type="email" placeholder="johndoe@example.com" required />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Phone
                </label>
                <Input id="phone" type="tel" placeholder="(256) 555-1234" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="address"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Address
                </label>
                <Input id="address" placeholder="123 Main St" />
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    City
                  </label>
                  <Input id="city" placeholder="Talladega" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="state"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    State
                  </label>
                  <Input id="state" placeholder="AL" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="zip"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    ZIP
                  </label>
                  <Input id="zip" placeholder="35160" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="w-full">
                    Credit Card
                  </Button>
                  <Button variant="outline" className="w-full">
                    PayPal
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Donate Now
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Talladega Main Street is a 501(c)(3) nonprofit organization. Your donation may be tax-deductible.
              </p>
            </form>
            <div className="space-y-4 lg:order-first">
              <h2 className="text-3xl font-bold tracking-tighter">Support Our Mission</h2>
              <p className="text-muted-foreground md:text-lg">
                Your financial support helps us continue our work to revitalize downtown Talladega. Donations fund:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Facade improvement grants for historic buildings</li>
                <li>Community events and festivals</li>
                <li>Marketing and promotion of downtown businesses</li>
                <li>Beautification projects</li>
                <li>Educational workshops and resources</li>
              </ul>
              <div className="rounded-lg bg-muted p-4">
                <h3 className="font-bold">Did you know?</h3>
                <p className="text-sm text-muted-foreground">
                  For every $1 invested in your local Main Street program, the community sees an average return of
                  $26.43 in new investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Volunteer Testimonials</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from those who have gotten involved with Talladega Main Street.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Event Committee Volunteer</p>
                  </div>
                  <p className="text-muted-foreground">
                    "Volunteering with Talladega Main Street has been incredibly rewarding. I've met wonderful people
                    and feel like I'm making a real difference in our community."
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="font-bold">Michael Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Business Owner</p>
                  </div>
                  <p className="text-muted-foreground">
                    "As a downtown business owner, I've seen firsthand how Main Street's efforts have increased foot
                    traffic and created a more vibrant downtown atmosphere."
                  </p>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="font-bold">Emily Thompson</h3>
                    <p className="text-sm text-muted-foreground">Monthly Donor</p>
                  </div>
                  <p className="text-muted-foreground">
                    "I donate monthly because I believe in the mission of preserving our downtown's unique character
                    while helping it thrive economically."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
