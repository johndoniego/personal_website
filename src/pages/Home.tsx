import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, Mail, Download, Copy, Check } from 'lucide-react'
import profileImg from '@/assets/profile.jpg'
import resumePdf from '@/assets/Doniego_Resume.pdf'
import csuLogo from '@/assets/csu-carig.png'
import pshsLogo from '@/assets/pshs-cvc.jpg'
import dictLogo from '@/assets/dictr02.png'

export function Home() {
  return (
    <div className="section-fade-in">
      {/* Hero Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Image & Resume Button */}
            <div className="md:col-span-1 flex flex-col items-center gap-4">
              <div className="profile-image-container">
                <img
                  src={profileImg}
                  alt="John Ullyses Doniego"
                  className="profile-image"
                />
              </div>
              <a
                href={resumePdf}
                download="Doniego_Resume.pdf"
                className="w-full max-w-[280px]"
              >
                <button className="glitch-btn w-full py-3.5">
                  <span>
                    <Download className="w-4 h-4" />
                    Download Resume
                  </span>
                </button>
              </a>
            </div>

            {/* Terminal Name Animation + Bio */}
            <div className="md:col-span-2 space-y-4">
              {/* Terminal Animation */}
              <div className="terminal-card">
                <div className="terminal-header">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="terminal-header-title">portfolio.sh</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-prompt">
                    <span className="terminal-prompt-symbol">❯</span>
                    <span className="terminal-prompt-path">~/portfolio</span>
                  </div>
                  <div className="terminal-name-container">
                    <span className="terminal-label">name:</span>
                    <span className="terminal-name">John Ullyses Doniego</span>
                  </div>
                  <div className="terminal-role">Software Engineer</div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Computer Science graduate specializing in full-stack web development and applied AI.
                Experienced in building real-world systems including government workflow tools, dashboards,
                police dispatch platforms, and multimodal AI applications. Adept at TypeScript, React, Python,
                and Firebase.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="https://github.com/johndoniego" target="_blank" rel="noopener noreferrer">
                  <button className="glitch-btn">
                    <span>
                      <Github className="w-4 h-4" />
                      GitHub
                    </span>
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/john-ullyses-doniego-7b0060334" target="_blank" rel="noopener noreferrer">
                  <button className="glitch-btn">
                    <span>
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </span>
                  </button>
                </a>
                <EmailCopy />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Sections (2x2 Grid) */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* 1. Recent Experience */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold mb-6">Recent Experience</h2>
              <Card className="hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between">
                <CardContent className="pt-6 h-full flex flex-col justify-center">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-start justify-between mb-2 gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">
                            Internship, Department of Information and Communications Technology (DICT) Region 02
                          </h3>
                          <p className="text-sm text-muted-foreground">Dec 2025 – Feb 2026</p>
                        </div>
                        <img
                          src={dictLogo}
                          alt="DICT Region 02 Logo"
                          className="w-14 h-14 object-contain rounded-lg flex-shrink-0 bg-white p-1 border shadow-sm"
                        />
                      </div>
                      <ul className="space-y-2 text-muted-foreground ml-4 list-disc">
                        <li>Completed 300 hours of the DICT-ILCDB Apprenticeship Program (OJT)</li>
                        <li>Built the Digital Transformation Center (DTC) Monitoring System — a monitoring website for DTC Training Center workflows (TypeScript/CSS, GitHub Pages)</li>
                        <li>Developed the DICT Travel Order System Frontend — a workflow tool for DICT admin staff managing travel order approvals (TypeScript)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 2. Education */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="grid grid-cols-1 gap-4 flex-1">
                <Card className="hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-center">
                  <CardContent className="pt-6 flex items-start gap-4 justify-between">
                    <div className="flex-1">
                      <p className="font-semibold mb-2">Bachelor of Science in Computer Science</p>
                      <p className="text-muted-foreground mb-1">Cagayan State University - Carig Campus</p>
                      <p className="text-sm text-muted-foreground">Sep 2021 – May 2026</p>
                    </div>
                    <img
                      src={csuLogo}
                      alt="CSU Logo"
                      className="w-14 h-14 object-contain rounded-lg flex-shrink-0 bg-white p-1 border shadow-sm"
                    />
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-center">
                  <CardContent className="pt-6 flex items-start gap-4 justify-between">
                    <div className="flex-1">
                      <p className="font-semibold mb-2">Philippine Science High School</p>
                      <p className="text-muted-foreground mb-1">Cagayan Valley Campus</p>
                      <p className="text-sm text-muted-foreground">Jul 2015 – May 2021</p>
                    </div>
                    <img
                      src={pshsLogo}
                      alt="PSHS Logo"
                      className="w-14 h-14 object-contain rounded-lg flex-shrink-0 bg-white p-1 border shadow-sm"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 3. What I'm Focused On */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold mb-6">What I'm Focused On</h2>
              <div className="grid grid-cols-1 gap-4 flex-1">
                <Card className="hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-center">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4 text-primary">🎯 Current Focus</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Full-stack web development + applied AI</li>
                      <li>Primary stack: TypeScript, React / Next.js, Supabase</li>
                      <li>Also proficient in: Python (TensorFlow, OpenCV), Machine Learning</li>
                      <li>Open to: Full-stack / Frontend / Software Engineer roles</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-center">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4 text-primary">🏆 Accomplishments</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">DOST Scholarship Recipient</p>
                        <p className="text-sm text-muted-foreground">2021 – 2026</p>
                      </div>
                      <div>
                        <p className="font-semibold">Civil Service Professional Examination — Passer</p>
                        <p className="text-sm text-muted-foreground">Grade: 92.12</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 4. Core Skills */}
            <div className="flex flex-col h-full">
              <h2 className="text-3xl font-bold mb-6">Core Skills</h2>
              <div className="grid grid-cols-1 gap-4 flex-1">
                <Card className="hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-center">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {['TypeScript', 'JavaScript', 'Python', 'Java', 'PHP', 'C#', 'HTML', 'CSS'].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-center">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">Frameworks & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'Node.js', 'Git/GitHub', 'Firebase', 'SQL'].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

function EmailCopy() {
  const email = 'doniegojohnullyses@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      className="glitch-btn"
      onClick={handleCopy}
      title={email}
    >
      <span>
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Mail className="w-4 h-4" />}
        {copied ? 'Copied!' : 'Email'}
      </span>
    </button>
  )
}
