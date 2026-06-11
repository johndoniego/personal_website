import { Mail, Linkedin, Github, MapPin, Phone, ExternalLink, Copy, Check, Send } from 'lucide-react'
import { useState } from 'react'

const hoverColors: Record<string, string> = {
  Email: 'rgb(239, 68, 68)',
  Phone: 'rgb(59, 130, 246)',
  Location: 'rgb(16, 185, 129)',
  LinkedIn: 'rgb(10, 102, 194)',
  GitHub: 'rgb(107, 114, 128)'
}

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null)

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'doniegojohnullyses@gmail.com',
      copyValue: 'doniegojohnullyses@gmail.com',
      href: 'mailto:doniegojohnullyses@gmail.com',
      gradient: 'from-red-500/20 to-orange-500/20',
      iconColor: 'text-red-500',
      borderHover: 'hover:border-red-500/30',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(0960) 295 5055',
      copyValue: '(0960) 295 5055',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-500',
      borderHover: 'hover:border-blue-500/30',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tuguegarao City, Cagayan, Philippines',
      copyValue: 'Tuguegarao City, Cagayan, Philippines',
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-500',
      borderHover: 'hover:border-green-500/30',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'John Ullyses Doniego',
      copyValue: 'https://www.linkedin.com/in/john-ullyses-doniego-7b0060334',
      href: 'https://www.linkedin.com/in/john-ullyses-doniego-7b0060334',
      gradient: 'from-blue-600/20 to-blue-400/20',
      iconColor: 'text-blue-600',
      borderHover: 'hover:border-blue-600/30',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@johndoniego',
      copyValue: 'https://github.com/johndoniego',
      href: 'https://github.com/johndoniego',
      gradient: 'from-gray-500/20 to-gray-400/20',
      iconColor: 'text-foreground',
      borderHover: 'hover:border-gray-500/30',
    },
  ]

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="section-fade-in">
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or opportunity. I'm actively open to new roles and collaborations.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-4 mb-8">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <div
                  key={link.label}
                  className={`contact-card group ${link.borderHover}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`contact-icon-ring bg-gradient-to-br ${link.gradient}`}>
                        <Icon className={`w-5 h-5 ${link.iconColor}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">{link.label}</p>
                        <p className="font-medium mt-0.5 break-all">{link.value}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      {link.copyValue && (
                        <button
                          onClick={() => handleCopy(link.copyValue, link.label)}
                          className="contact-uiverse-btn"
                          style={{ '--hover-color': hoverColors[link.label] || 'var(--color-accent)' } as React.CSSProperties}
                        >
                          <span className="tooltip">
                            {copied === link.label ? 'Copied!' : 'Copy'}
                          </span>
                          {copied === link.label ? (
                            <Check className="w-4 h-4 text-green-500 animate-in zoom-in duration-200" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}
                      {link.href && (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-uiverse-btn"
                          style={{ '--hover-color': hoverColors[link.label] || 'var(--color-accent)' } as React.CSSProperties}
                        >
                          <span className="tooltip">Visit</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Email CTA */}
          <div className="cta-card">
            <div className="p-8 text-primary-foreground">
              <h2 className="text-2xl font-bold mb-3">Ready to Work Together?</h2>
              <p className="mb-6 text-sm opacity-90">
                I'm actively looking for opportunities in full-stack development, frontend engineering,
                and AI integration. Let's create something amazing together!
              </p>
              <a href="mailto:doniegojohnullyses@gmail.com">
                <button className="animated-btn flex items-center gap-2 font-semibold py-3 px-6 rounded-xl text-sm transition-all hover:shadow-lg">
                  <span className="relative z-10 flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Me an Email
                  </span>
                  <div className="blobs">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t bg-muted/50 py-8 px-4">
        <div className="max-w-3xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 John Ullyses Doniego. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, Tailwind CSS, and shadcn/ui</p>
        </div>
      </section>
    </div>
  )
}
