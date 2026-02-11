import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { ArrowRight } from "lucide-react"

function BlogCta() {
  return (
    <section className="border-y-2 border-ink bg-butter px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            What's on my mind
          </h2>
          <p className="mt-2 text-base text-ink/70 sm:text-lg">
            Thoughts on engineering, AI, and building things.
          </p>
        </div>
        <Button
          size="lg"
          className="w-full bg-ink text-base px-8 py-5 text-base sm:w-auto sm:py-6 sm:text-lg"
          asChild
        >
          <Link to="/blog">
            Read the Blog
            <ArrowRight className="size-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default BlogCta
