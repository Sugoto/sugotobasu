import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

function Hero() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center justify-center bg-mint px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
      <Badge className="mb-4 bg-butter text-ink sm:mb-6">
        Available for work
      </Badge>
      <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
        Sugoto Basu
      </h1>
      <p className="mt-4 max-w-md text-base font-medium text-ink/80 sm:mt-6 sm:max-w-lg sm:text-lg md:max-w-2xl md:text-xl lg:text-2xl">
        Developer. Designer. Builder of things on the internet.
      </p>
      <div className="mt-8 flex w-full flex-col items-center gap-3 px-4 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 sm:px-0">
        <Button
          size="lg"
          className="w-full bg-ink text-base px-8 py-5 text-base sm:w-auto sm:py-6 sm:text-lg"
        >
          View Projects
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full bg-peach text-ink px-8 py-5 text-base sm:w-auto sm:py-6 sm:text-lg"
        >
          Get in Touch
        </Button>
      </div>
    </section>
  )
}

export default Hero
