import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function About() {
  return (
    <section className="bg-base px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-3xl font-bold text-ink sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl">
          About Me
        </h2>
        <Card className="bg-peach">
          <CardHeader>
            <CardTitle className="text-xl text-ink sm:text-2xl">
              A little bit about what I do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-ink/90 sm:text-lg">
              I'm a developer who loves building clean, functional, and
              delightful digital experiences. I work across the full stack,
              with a soft spot for beautiful frontends and robust systems.
              When I'm not coding, you'll find me exploring new technologies,
              reading about design, or tinkering with side projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About
