import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

function Contact() {
  return (
    <section className="bg-lavender px-4 py-16 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-ink sm:mb-6 sm:text-4xl md:text-5xl">
          Let's Connect
        </h2>
        <p className="mx-auto mb-8 max-w-sm text-base text-ink/80 sm:mb-10 sm:max-w-xl sm:text-lg">
          Got a project idea, a question, or just want to say hi? I'd love to
          hear from you.
        </p>
        <div className="flex w-full flex-col items-center gap-3 px-4 sm:w-auto sm:flex-row sm:justify-center sm:gap-4 sm:px-0">
          <Button
            size="lg"
            className="w-full bg-ink text-base px-8 py-5 text-base sm:w-auto sm:py-6 sm:text-lg"
            asChild
          >
            <a href="mailto:sugotobasu1@gmail.com">
              <Mail className="size-5" />
              Email
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full bg-sky text-ink px-8 py-5 text-base sm:w-auto sm:py-6 sm:text-lg"
            asChild
          >
            <a
              href="https://linkedin.com/in/sugotobasu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full bg-butter text-ink px-8 py-5 text-base sm:w-auto sm:py-6 sm:text-lg"
            asChild
          >
            <a
              href="https://github.com/sugotobasu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Contact
