import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Dispatch System — Tuguegarao City Digital Incident Report',
    description:
      'A comprehensive public safety application with admin dashboards, mobile officer apps, and incident reporting system. Built for real-world incident management and community safety.',
    technologies: ['TypeScript', 'Next.js', 'React Native', 'Supabase', 'Expo'],
    repositories: [
      {
        name: 'Dispatch Dashboard',
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
    title: 'DTC Monitoring Website',
    description:
      'A monitoring website for Digital Transformation Center (DTC) Training Center workflows. Deployed on GitHub Pages with real-time status tracking and reporting capabilities.',
    technologies: ['TypeScript', 'React', 'CSS', 'GitHub Pages'],
    repositories: [
      {
        name: 'View Live',
        url: 'https://dict-ojt.github.io/dtc/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/dict-ojt/dtc',
      },
    ],
  },
  {
    title: 'ICT Quiz Bee',
    description:
      'An interactive quiz application designed for Information and Communications Technology competitions. Features real-time scoring, category-based questions, and a polished UI for competitive testing environments.',
    technologies: ['TypeScript', 'React', 'CSS', 'GitHub Pages'],
    repositories: [
      {
        name: 'View Live',
        url: 'https://johndoniego.github.io/ict-quiz-bee/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/johndoniego/ict-quiz-bee',
      },
    ],
  },
  {
    title: 'DICT Travel Order System',
    description:
      'A workflow tool for DICT admin staff managing travel order approvals. Features role-based access, approval workflows, and document management for government travel administration.',
    technologies: ['TypeScript', 'React', 'Supabase', 'Firebase'],
    repositories: [
      {
        name: 'View Live',
        url: 'https://dict-ojt.github.io/dict-travel-order-system/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/dict-ojt/dict-travel-order-system',
      },
    ],
  },
  {
    title: 'Hybrid Emotion Detection System',
    description:
      'Real-time multimodal AI application combining facial recognition, text analysis, voice interaction, hand gesture detection, and AI vision with text-to-speech responses. Integrates TensorFlow, OpenCV, and Google Gemini API.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Gemini API', 'TTS/STT'],
    repositories: [
      { name: 'View Project', url: 'https://github.com/mrndstvndv/cnnuy' },
    ],
  },
]

export function Projects() {
  return (
    <section className="py-8 md:py-12 px-4 section-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Projects</h1>
          <p className="text-xl text-muted-foreground">
            Real-world applications and systems built for production use
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3">Technologies Used</p>
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
                      <button className="project-gooey-btn gap-2">
                        <span className="relative z-10 flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          {repo.name}
                          <ExternalLink className="w-3 h-3" />
                        </span>
                        <div className="blobs">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </button>
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
