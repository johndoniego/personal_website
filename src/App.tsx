import { ThemeProvider } from '@/contexts/ThemeContext'
import { Navigation } from '@/components/Navigation'
import { Home } from '@/pages/Home'
import { Projects } from '@/pages/Projects'
import { Skills } from '@/pages/Skills'
import { Contact } from '@/pages/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Global SVG Gooey Filter for nice-walrus-6 buttons */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: 0, width: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/personal_website">
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  )
}
