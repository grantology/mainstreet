import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container grid gap-8 px-4 py-10 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Talladega Main Street</h3>
          <p className="max-w-xs text-sm text-muted-foreground">
            A designated Alabama Main Street community dedicated to the revitalization and preservation of historic
            downtown Talladega.
          </p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <nav className="grid gap-2 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="/events" className="text-muted-foreground hover:text-primary">
              Events
            </Link>
            <Link href="/businesses" className="text-muted-foreground hover:text-primary">
              Business Directory
            </Link>
            <Link href="/get-involved" className="text-muted-foreground hover:text-primary">
              Get Involved
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Resources</h3>
          <nav className="grid gap-2 text-sm">
            <Link href="https://www.mainstreetalabama.org/" className="text-muted-foreground hover:text-primary">
              Main Street Alabama
            </Link>
            <Link href="https://www.mainstreet.org/" className="text-muted-foreground hover:text-primary">
              National Main Street Center
            </Link>
            <Link href="https://www.talladega.com/" className="text-muted-foreground hover:text-primary">
              City of Talladega
            </Link>
            <Link href="/newsletter" className="text-muted-foreground hover:text-primary">
              Newsletter
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">123 Main Street, Talladega, AL 35160</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">(256) 555-1234</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">info@talladegamainstreet.org</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Talladega Main Street. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
