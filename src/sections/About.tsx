import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const trajectory = [
  {
    period: "2025 - Present",
    company: "Current Role",
    role: "Full Stack AI Native Engineer",
    summary:
      "Building AI-native products with modern web stacks, automation-first workflows, and strong UX.",
    color: "bg-butter",
  },
  {
    period: "2023 - 2025",
    company: "Company Gamma",
    role: "Lead Engineer",
    summary:
      "Drove architecture decisions and built scalable, high-velocity engineering workflows.",
    color: "bg-lavender",
  },
  {
    period: "2021 - 2023",
    company: "Company Beta",
    role: "Senior Full Stack Engineer",
    summary:
      "Led critical platform initiatives, improved system reliability, and mentored engineers.",
    color: "bg-sky",
  },
  {
    period: "2019 - 2021",
    company: "Company Alpha",
    role: "Software Engineer",
    summary:
      "Shipped full-stack product features, API integrations, and internal tooling across web apps.",
    color: "bg-peach",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
    },
  },
}

function About() {
  return (
    <section className="bg-base px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
          About Me
        </h2>
        <p className="max-w-2xl text-base text-ink/80 sm:text-lg">
          A quick look at my career trajectory and how my role evolved over time.
        </p>

        <div className="relative mt-10 sm:mt-12">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-ink md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {trajectory.map((item, index) => {
              const alignLeft = index % 2 === 0
              return (
                <motion.div
                  key={`${item.period}-${item.company}`}
                  className="relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
                  variants={itemVariants}
                >
                  <div
                    className={cn(
                      "md:max-w-xl",
                      alignLeft
                        ? "md:col-start-1 md:justify-self-end md:pr-8"
                        : "md:col-start-2 md:justify-self-start md:pl-8"
                    )}
                  >
                    <Card className={cn(item.color, "w-full")}>
                      <CardHeader
                        className={cn(
                          alignLeft ? "md:items-end md:text-right" : "md:items-start"
                        )}
                      >
                        <div
                          className={cn(
                            "flex flex-wrap gap-2",
                            alignLeft ? "md:justify-end" : "md:justify-start"
                          )}
                        >
                          <Badge variant="outline" className="bg-base text-black">
                            {item.period}
                          </Badge>
                          <Badge variant="outline" className="bg-base text-black">
                            {item.company}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-black sm:text-2xl">
                          {item.role}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p
                          className={cn(
                            "text-base leading-relaxed text-black/90",
                            alignLeft ? "md:text-right" : "md:text-left"
                          )}
                        >
                          {item.summary}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <span className="absolute left-4 top-8 size-4 -translate-x-1/2 rounded-full border-2 border-ink bg-mint md:left-1/2" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
