import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Projects from "@/sections/Projects"
import Contact from "@/sections/Contact"

function App() {
  return (
    <main className="min-h-[100dvh] overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t-2 border-ink bg-base px-4 py-6 text-center sm:px-6 sm:py-8">
        <p className="text-xs font-medium text-ink/60 sm:text-sm">
          Sugoto Basu &mdash; {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  )
}

export default App
