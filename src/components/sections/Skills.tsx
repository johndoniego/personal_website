import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Database,
  Code2,
  Brain,
  Layout,
  Terminal,
  Zap,
} from 'lucide-react'

const skillCategories = [
  {
    title: '🧱 Frontend Development',
    icon: Layout,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Vite'],
  },
  {
    title: '🔐 Backend & Database',
    icon: Database,
    skills: ['Supabase', 'PostgreSQL', 'Authentication', 'API Design', 'TypeScript'],
  },
  {
    title: '🤖 AI & Machine Learning',
    icon: Brain,
    skills: ['TensorFlow', 'OpenCV', 'Python', 'Computer Vision', 'LLM Integration'],
  },
  {
    title: '⚙️ Tools & Platforms',
    icon: Terminal,
    skills: ['Git', 'GitHub', 'Expo', 'React Native', 'VS Code', 'Docker'],
  },
  {
    title: '🔄 Workflow & Architecture',
    icon: Zap,
    skills: [
      'UI/UX Design',
      'Admin Dashboards',
      'Workflow Systems',
      'Form Management',
      'Real-time Updates',
    ],
  },
  {
    title: '💼 Soft Skills',
    icon: Code2,
    skills: ['Full-Stack Development', 'Problem Solving', 'Collaboration', 'System Design'],
  },
]

export function Skills() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">What I'm Good At</h2>
          <p className="text-xl text-muted-foreground">
            Skills and expertise built through real-world projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon className="w-5 h-5" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Current Focus</h3>
          <p className="text-muted-foreground">
            🎯 Full-stack web development + applied AI • 🧰 Primary stack: TypeScript, React / Next.js • 🧠 Also: Python (TensorFlow, OpenCV), Supabase • 💼 Open to: Full-stack / Frontend / Software Engineer roles
          </p>
        </div>
      </div>
    </section>
  )
}
