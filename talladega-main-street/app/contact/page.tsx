import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function ContactPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Get in touch with Talladega Main Street. We'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="text-muted-foreground md:text-lg">
                  Have questions, suggestions, or want to get involved? We'd love to hear from you. Fill out the form or
                  contact us directly using the information below.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-bold">Address</h3>
                    <p className="text-muted-foreground">123 Main Street, Talladega, AL 35160</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-muted-foreground">(256) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div className="space-y-1">
                    <h3 className="font-bold">Email</h3>
                    <p className="text-muted-foreground">info@talladegamainstreet.org</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold">Office Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <div>Monday - Friday</div>
                  <div>9:00 AM - 5:00 PM</div>
                  <div>Saturday</div>
                  <div>By appointment</div>
                  <div>Sunday</div>
                  <div>Closed</div>
                </div>
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
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" required />
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
                  className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26509.15023770304!2d-86.11386868359375!3d33.43605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888bc8b09f6b6a7d%3A0x3a4e0e5d5e7a0633!2sTalladega%2C%20AL!5e0!3m2!1sen!2sus!4v1649795012345!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Talladega Main Street Map"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
