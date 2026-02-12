import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
}

function Projects() {
  return (
    <section className="bg-sky/30 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-ink sm:mb-10 sm:text-4xl md:mb-12 md:text-5xl">
          Projects
        </h2>
        <motion.div
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className={`${project.color} h-[320px] sm:h-[340px]`}>
                <CardHeader>
                  <CardTitle className="text-lg text-ink sm:text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-ink/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
