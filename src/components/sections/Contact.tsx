import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'doniegojohnullyses@gmail.com',
      href: 'mailto:doniegojohnullyses@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'John Ullyses Doniego',
      href: 'https://www.linkedin.com/in/john-ullyses-doniego-7b0060334',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@johndoniego',
      href: 'https://github.com/johndoniego',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="h-full hover:shadow-lg hover:border-primary transition-all cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center pt-6">
                    <Icon className="w-8 h-8 mb-3 text-primary" />
                    <p className="text-sm font-semibold mb-1">{link.label}</p>
                    <p className="text-sm text-muted-foreground text-center">
                      {link.value}
                    </p>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>

        <div className="bg-muted/50 rounded-lg p-8 border text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to collaborate?</h3>
          <p className="text-muted-foreground mb-6">
            I'm actively looking for opportunities in full-stack development,
            frontend engineering, and AI integration. Let's build something amazing together!
          </p>
          <a href="mailto:doniegojohnullyses@gmail.com">
            <Button size="lg" className="gap-2">
              Start a Conversation <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>Built with React, TypeScript, and shadcn/ui</p>
          <p className="mt-2">
            © 2026 John Ullyses Doniego. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
