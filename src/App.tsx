import { Routes, Route } from "react-router"
import Home from "@/pages/Home"
import Blog from "@/pages/Blog"

function App() {
  return (
    <div className="min-h-[100dvh] overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <footer className="border-t-2 border-ink bg-base px-4 py-6 text-center sm:px-6 sm:py-8">
        <p className="text-xs font-medium text-ink/60 sm:text-sm">
          Sugoto Basu &mdash; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  )
}

export default App
