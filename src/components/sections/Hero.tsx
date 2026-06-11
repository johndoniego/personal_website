import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            John Ullyses Doniego
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full-Stack Software Engineer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            I build real-world web systems, dashboards, and AI-powered applications. 
            Currently focused on TypeScript, React, Next.js, and applied AI.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <Button size="lg" className="gap-2">
            View My Work <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg">
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/johndoniego"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/john-ullyses-doniego-7b0060334"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:doniegojohnullyses@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
