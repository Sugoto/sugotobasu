import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router"

function Hero() {
  const ctaBaseClass =
    "w-full md:w-[220px] !text-black text-sm sm:text-base !shadow-brutal hover:!shadow-brutal-hover"

  return (
    <section className="border-b-2 border-ink">
      <div className="flex min-h-[50dvh] flex-col justify-center border-b-2 border-ink bg-mint p-8 sm:p-12 md:p-16 lg:min-h-[55dvh] lg:p-20 xl:p-24">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
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
        <h1 className="leading-[0.95] tracking-tight text-ink">
          <span className="block text-2xl font-semibold sm:text-3xl md:text-4xl">
            Hi, I am
          </span>
          <span className="relative mt-2 inline-block text-5xl font-bold sm:mt-3 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Sugoto Basu
            <motion.svg
              viewBox="0 0 420 56"
              className="absolute -bottom-4 -left-2 h-6 w-[calc(100%+1rem)] text-ink sm:-bottom-5 sm:h-7"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M6 36 C 84 58, 334 8, 414 34"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </motion.svg>
          </span>
        </h1>
        <div className="mt-8 flex w-full max-w-sm flex-col gap-3 md:mt-10 md:w-auto md:max-w-none md:flex-row md:gap-4">
          <Button
            variant="outline"
            size="lg"
            className={`${ctaBaseClass} bg-peach`}
          >
            Get in Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={`${ctaBaseClass} bg-butter`}
            asChild
          >
            <Link to="/blog">Read the Blog</Link>
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
