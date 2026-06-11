import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'PHP', 'C#', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Node.js', 'Bootstrap', 'React Native'],
  },
  {
    title: 'Mobile Development',
    skills: ['React Native', 'Expo', 'Mobile-first Design'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'OpenCV', 'Gemini API', 'AI Prompting', 'Computer Vision'],
  },
  {
    title: 'Database & Backend',
    skills: ['Firebase', 'SQL', 'Supabase', 'API Design', 'Authentication'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git/GitHub', 'Microsoft Office', 'VS Code', 'Vite', 'Docker'],
  },
]

export function Skills() {
  return (
    <section className="py-8 md:py-12 px-4 section-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with professionally
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <Card className="bg-muted/50 hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>What I'm Good At</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Full-Stack Web Development</h3>
              <p className="text-muted-foreground">
                Building clean UI and admin dashboards with React/Next.js + TypeScript. Designing and implementing complete web applications from frontend to backend.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cloud & Database Integration</h3>
              <p className="text-muted-foreground">
                Integrating products with Firebase and Supabase (auth, DB, storage). Building scalable backend systems with real-time capabilities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Workflow & System Design</h3>
              <p className="text-muted-foreground">
                Designing workflow systems with roles, forms, approvals, and monitoring. Creating admin interfaces for government and enterprise systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Applied AI & Computer Vision</h3>
              <p className="text-muted-foreground">
                Prototyping applied AI features including computer vision, speech recognition, and multimodal AI applications. Integrating AI services like Google Gemini.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
