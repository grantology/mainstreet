import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">About Us</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Learn about Talladega Main Street's mission, history, and impact on our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-muted-foreground md:text-lg">
                Talladega Main Street is dedicated to the revitalization and preservation of our historic downtown. We
                work to enhance economic development, promote our unique cultural heritage, and create a vibrant
                community space for residents and visitors alike.
              </p>
              <p className="text-muted-foreground md:text-lg">
                As a designated Alabama Main Street community, we follow the proven Four-Point Approach® developed by
                the National Main Street Center to create a comprehensive strategy for downtown revitalization.
              </p>
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

        {/* History Section */}
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="/placeholder.svg?height=400&width=600"
              width={600}
              height={400}
              alt="Historic Talladega"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our History</h2>
              <p className="text-muted-foreground md:text-lg">
                Talladega has a rich history dating back to its founding in the early 19th century. Our downtown
                district features beautiful historic buildings that tell the story of our community's growth and
                development over the years.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Talladega Main Street was established in [year] when we joined the Alabama Main Street program. Since
                then, we have worked tirelessly to preserve our architectural heritage while fostering economic growth
                and community pride.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the dedicated individuals who lead Talladega Main Street's efforts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Executive Director"
                  className="aspect-square rounded-full object-cover object-center"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Jane Smith</h3>
                  <p className="text-sm text-muted-foreground">Executive Director</p>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Board President"
                  className="aspect-square rounded-full object-cover object-center"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">John Davis</h3>
                  <p className="text-sm text-muted-foreground">Board President</p>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="flex flex-col items-center space-y-4">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Program Coordinator"
                  className="aspect-square rounded-full object-cover object-center"
                />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">Program Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Celebrating our impact on downtown Talladega.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <h3 className="text-3xl font-bold">$2.5M</h3>
                <p className="text-sm text-muted-foreground">Investment in downtown revitalization</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <h3 className="text-3xl font-bold">15</h3>
                <p className="text-sm text-muted-foreground">Historic buildings restored</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <h3 className="text-3xl font-bold">12</h3>
                <p className="text-sm text-muted-foreground">New businesses opened</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <h3 className="text-3xl font-bold">25+</h3>
                <p className="text-sm text-muted-foreground">Annual community events</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <h3 className="text-3xl font-bold">5,000+</h3>
                <p className="text-sm text-muted-foreground">Volunteer hours annually</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 text-center">
                <h3 className="text-3xl font-bold">30%</h3>
                <p className="text-sm text-muted-foreground">Increase in downtown foot traffic</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Efforts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be a part of Talladega Main Street's mission to revitalize and preserve our historic downtown.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/get-involved">
                    Get Involved <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
