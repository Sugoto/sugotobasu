import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application built with modern tooling and a focus on performance.",
    tags: ["React", "TypeScript", "Node.js"],
    color: "bg-sky",
  },
  {
    title: "Project Beta",
    description:
      "A design system and component library crafted for consistency and reusability.",
    tags: ["Design Systems", "Tailwind", "Storybook"],
    color: "bg-lavender",
  },
  {
    title: "Project Gamma",
    description:
      "An open-source CLI tool that automates repetitive development workflows.",
    tags: ["Rust", "CLI", "Open Source"],
    color: "bg-butter",
  },
]

function Projects() {
  return (
    <section className="bg-sky/30 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-ink sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl">
          Projects
        </h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className={project.color}>
              <CardHeader>
                <CardTitle className="text-lg text-ink sm:text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-ink/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-base text-ink"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
