import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

function Hero() {
  return (
    <section className="border-b-2 border-ink">
      <div className="flex min-h-[50dvh] flex-col justify-center border-b-2 border-ink bg-mint p-8 sm:p-12 md:p-16 lg:min-h-[55dvh] lg:p-20 xl:p-24">
        <div className="mb-6 flex gap-3 sm:mb-8">
          <a
            href="mailto:sugotobasu1@gmail.com"
            className="flex size-10 items-center justify-center border-2 border-ink bg-base text-ink shadow-brutal-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal sm:size-12"
          >
            <Mail className="size-5 sm:size-6" />
          </a>
          <a
            href="https://linkedin.com/in/sugotobasu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-10 items-center justify-center border-2 border-ink bg-base text-ink shadow-brutal-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal sm:size-12"
          >
            <Linkedin className="size-5 sm:size-6" />
          </a>
          <a
            href="https://github.com/sugotobasu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-10 items-center justify-center border-2 border-ink bg-base text-ink shadow-brutal-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal sm:size-12"
          >
            <Github className="size-5 sm:size-6" />
          </a>
        </div>
        <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          Sugoto Basu
        </h1>
        <p className="mt-4 text-lg font-medium text-ink/80 sm:mt-6 sm:text-xl md:text-2xl lg:text-3xl">
          Full Stack AI Native Engineer
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4 md:mt-10">
          <Button
            size="lg"
            className="w-full bg-lavender text-ink px-8 py-5 text-base sm:w-auto sm:py-6 sm:text-lg"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full bg-peach text-ink px-8 py-5 text-base !shadow-brutal hover:!shadow-brutal-hover sm:w-auto sm:py-6 sm:text-lg"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
        <div className="flex min-h-36 items-end border-b-2 border-r-2 border-ink bg-butter p-5 sm:min-h-44 sm:p-6 md:min-h-52 md:border-b-0 lg:min-h-60 lg:p-8">
          <span className="text-xl font-bold text-ink sm:text-2xl md:text-3xl">
            AI / ML
          </span>
        </div>
        <div className="flex min-h-36 items-end border-b-2 border-ink bg-lavender p-5 sm:min-h-44 sm:p-6 md:min-h-52 md:border-b-0 md:border-r-2 lg:min-h-60 lg:p-8">
          <span className="text-xl font-bold text-ink sm:text-2xl md:text-3xl">
            LLMs
          </span>
        </div>
        <div className="flex min-h-36 items-end border-r-2 border-ink bg-sky p-5 sm:min-h-44 sm:p-6 md:min-h-52 lg:min-h-60 lg:p-8">
          <span className="text-xl font-bold text-ink sm:text-2xl md:text-3xl">
            React &middot; TS
          </span>
        </div>
        <div className="flex min-h-36 items-end bg-peach p-5 sm:min-h-44 sm:p-6 md:min-h-52 lg:min-h-60 lg:p-8">
          <span className="text-xl font-bold text-ink sm:text-2xl md:text-3xl">
            Python
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
