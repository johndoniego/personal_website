import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award, Landmark, GraduationCap } from 'lucide-react'

interface Accomplishment {
  title: string
  subtitle: string
  detail?: string
  date?: string
  icon: React.ReactNode
  category: 'Competition' | 'Academic' | 'Professional'
}

const accomplishmentsData: Accomplishment[] = [
  {
    title: 'DOST Scholarship Recipient',
    subtitle: 'Department of Science and Technology (DOST) - SEI',
    detail: 'Prestigious undergraduate science and technology scholarship in the Philippines.',
    date: '2021 – 2026',
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    category: 'Academic',
  },
  {
    title: 'Civil Service Professional Examination',
    subtitle: 'Civil Service Commission (CSC) — Passer',
    detail: 'Eligibility exam for professional civil service positions.',
    date: 'Grade: 92.12',
    icon: <Award className="w-6 h-6 text-emerald-500" />,
    category: 'Professional',
  },
  {
    title: 'Quiz Bee BSCS Champion (Singles)',
    subtitle: 'Cagayan State University - Carig Campus',
    date: 'BSCS Departmental Competition',
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    category: 'Competition',
  },
  {
    title: 'National iSITE Quiz Bee Champion (Team)',
    subtitle: 'Integrated Society of Information Technology Enthusiasts / National Competition',
    date: 'National IT Education Competition',
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    category: 'Competition',
  },
  {
    title: 'Aparri Quiz Bee BSCS Inter-School Campus Champion (Team)',
    subtitle: 'Inter-School Campus Competition',
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    category: 'Competition',
  },
  {
    title: 'Gonzaga Quiz Bee BSCS Inter-School Campus Champion (Team)',
    subtitle: 'Inter-School Campus Competition',
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    category: 'Competition',
  },
]

export function Accomplishments() {
  return (
    <section className="py-8 md:py-12 px-4 section-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Accomplishments</h1>
          <p className="text-xl text-muted-foreground">
            Academic achievements, professional credentials, and competition awards
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {accomplishmentsData.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-muted rounded-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                    <Badge variant="secondary" className="font-semibold text-xs whitespace-nowrap">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{item.subtitle}</p>
                  {item.detail && (
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">{item.detail}</p>
                  )}
                  {item.date && (
                    <p className="text-xs font-semibold text-primary/80 mt-2">{item.date}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
