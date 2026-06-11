import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: '🚓 Dispatch System (Tuguegarao City)',
    description:
      'A comprehensive public safety application with admin dashboards, mobile officer apps, and incident reporting system',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'React Native', 'Expo'],
    repositories: [
      {
        name: 'Dashboard Frontend',
        url: 'https://github.com/kiyoko-org/dashboard-frontend',
      },
      { name: 'Core App', url: 'https://github.com/kiyoko-org/dispatch' },
      {
        name: 'Officer App',
        url: 'https://github.com/kiyoko-org/dispatch-officer',
      },
    ],
  },
  {
    title: '🏛️ DICT-R02 OJT Projects',
    description:
      'Internal government workflow tools developed during OJT including monitoring systems and travel order management',
    technologies: ['TypeScript', 'React', 'Supabase', 'GitHub Pages'],
    repositories: [
      {
        name: 'DTC Monitoring Website',
        url: 'https://github.com/dict-ojt/dtc',
      },
      {
        name: 'Travel Order System',
        url: 'https://github.com/dict-ojt/dict-travel-order-system',
      },
    ],
  },
  {
    title: '🤖 Hybrid Emotion Detection System',
    description:
      'Real-time multimodal AI application combining facial recognition, text analysis, voice interaction, and hand gesture detection',
    technologies: [
      'Python',
      'TensorFlow',
      'OpenCV',
      'Google Gemini',
      'TTS/STT',
    ],
    repositories: [
      { name: 'GitHub Repo', url: 'https://github.com/mrndstvndv/cnnuy' },
    ],
  },
  {
    title: '🎮 GameSearch',
    description: 'A TypeScript-based web application for searching and browsing games with modern UI',
    technologies: ['TypeScript', 'React', 'Vite'],
    repositories: [
      { name: 'View Project', url: 'https://github.com/johndoniego/gamesearch' },
    ],
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            Real-world applications and systems I've built
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.repositories.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="w-4 h-4" />
                        {repo.name}
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </a>
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
