import { Link } from "react-router"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const articles = [
  {
    title: "Why I Went All-In on AI Native Engineering",
    excerpt:
      "The shift from using AI as a tool to building with AI as a first-class citizen changed everything about how I approach software.",
    date: "Feb 2026",
    color: "bg-mint",
    layout: "md:col-start-1 md:row-start-1 md:col-span-2",
    titleSize: "text-lg sm:text-xl md:text-2xl",
  },
  {
    title: "The Case for Bun in Production",
    excerpt:
      "Speed isn't the only reason to switch your runtime. Here's what I learned after six months.",
    date: "Jan 2026",
    color: "bg-butter",
    layout: "md:col-start-3 md:row-start-1 md:row-span-2",
    titleSize: "text-lg sm:text-xl",
  },
  {
    title: "React Compiler: Worth the Hype?",
    excerpt: "A deep dive into automatic memoization and what it means for your codebase.",
    date: "Jan 2026",
    color: "bg-lavender",
    layout: "md:col-start-1 md:row-start-2",
    titleSize: "text-lg sm:text-xl",
  },
  {
    title: "Building Design Systems That Don't Suck",
    excerpt:
      "Most design systems fail because they optimize for consistency over velocity. Here's a better way.",
    date: "Dec 2025",
    color: "bg-sky",
    layout: "md:col-start-2 md:row-start-2",
    titleSize: "text-lg sm:text-xl",
  },
  {
    title: "LLMs Are the New APIs",
    excerpt:
      "How large language models are becoming the interface layer between humans and systems.",
    date: "Dec 2025",
    color: "bg-peach",
    layout: "md:col-start-1 md:row-start-3 md:col-span-2",
    titleSize: "text-lg sm:text-xl",
  },
  {
    title: "Tailwind v4 Changed My Mind",
    excerpt: "CSS-first configuration and zero-config setup. It's not just an upgrade, it's a rethink.",
    date: "Nov 2025",
    color: "bg-mint",
    layout: "md:col-start-3 md:row-start-3",
    titleSize: "text-lg sm:text-xl",
  },
  {
    title: "On Shipping Fast",
    excerpt: "Velocity isn't about cutting corners. It's about knowing which corners don't exist.",
    date: "Nov 2025",
    color: "bg-butter",
    layout: "md:col-start-1 md:row-start-4",
    titleSize: "text-lg sm:text-xl",
  },
  {
    title: "The Full Stack Is Dead, Long Live the Full Stack",
    excerpt:
      "What 'full stack' really means in the age of serverless, edge computing, and AI-assisted development.",
    date: "Oct 2025",
    color: "bg-lavender",
    layout: "md:col-start-2 md:row-start-4 md:col-span-2",
    titleSize: "text-lg sm:text-xl",
  },
]

function Blog() {
  return (
    <main>
      <section className="border-b-2 border-ink bg-butter px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Button
            variant="outline"
            size="sm"
            className="mb-8 bg-base text-ink"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="size-4" />
              Back Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            What's on my mind
          </h1>
          <p className="mt-4 text-base text-ink/90 sm:text-lg md:text-xl">
            Thoughts, experiments, and opinions on building software.
          </p>
        </div>
      </section>

      <section className="bg-base px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:auto-rows-[minmax(180px,auto)]">
          {articles.map((article) => (
            <Card
              key={article.title}
              className={`${article.color} ${article.layout} cursor-pointer justify-between`}
            >
              <CardHeader>
                <CardDescription className="text-xs font-bold uppercase tracking-wider text-ink/60">
                  {article.date}
                </CardDescription>
                <CardTitle className={`font-bold leading-tight text-ink ${article.titleSize}`}>
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-ink/70 sm:text-[1rem]">
                  {article.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Blog
