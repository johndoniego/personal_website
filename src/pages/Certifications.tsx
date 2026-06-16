import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, ExternalLink, Calendar, Award } from 'lucide-react'

interface Certification {
  name: string
  start: string
  end: string
  hours: string
  type: string
  provider: string
  fileName: string | null
}

const certificationsData: Certification[] = [
  {
    name: 'PYTHON PROGRAMMING ESSENTIALS COURSE',
    start: '8/12/2025',
    end: '12/12/2025',
    hours: '40',
    type: 'TECHNICAL',
    provider: 'DIGITAL TRANSFORMATION CENTER, DICT REGIONAL OFFICE / ILCDB',
    fileName: 'Certificate of Completion of Python Essentials Course.pdf'
  },
  {
    name: 'PYTHON ESSENTIALS 1',
    start: '10/1/2026',
    end: '10/1/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / OPENEDG / DICT-ITU DTC INITIATIVE',
    fileName: 'Python_Essentials_1_certificate_doniegojohnullyses-gmail-com_2b0648ae-b962-4772-919f-81cb931bf448.pdf'
  },
  {
    name: 'FUTURE-READY PILIPINAS: UNDERSTANDING BLOCKCHAIN TODAY',
    start: '22/01/2026',
    end: '22/01/2026',
    hours: '4',
    type: 'TECHNICAL',
    provider: 'DICT REGION 2 NUEVA VIZCAYA / ILCDB',
    fileName: 'Future-Ready Pilipinas Understanding Blockchain Today.pdf'
  },
  {
    name: 'INFORMATION SESSION ON AI PROMPT ENGINEERING',
    start: '29/01/2026',
    end: '29/01/2026',
    hours: '3',
    type: 'TECHNICAL',
    provider: 'DICT REGION 2 - QUIRINO PROVINCIAL OFFICE',
    fileName: 'AI Prompt Engineering.pdf'
  },
  {
    name: 'INTRODUCTION TO CANVA',
    start: '29/01/2026',
    end: '29/01/2026',
    hours: '4',
    type: 'TECHNICAL',
    provider: 'DICT REGION 2 - QUIRINO PROVINCIAL OFFICE',
    fileName: 'INTRODUCTION TO CANVA-INFORMATION SESSION.pdf'
  },
  {
    name: 'CREATE DIGITAL CONTENT, COMMUNICATE, AND COLLABORATE ONLINE',
    start: '2/2/2026',
    end: '2/2/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'Create_Digital_Content-_Communicate_and_Collaborate_Online_certificate_doniegojohnullyses-gmail-com_157f30a5-4678-498e-874f-c88c9aaccd42.pdf'
  },
  {
    name: 'INTRODUCTION TO DATA SCIENCE',
    start: '2/2/2026',
    end: '2/2/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'Introduction_to_Data_Science_certificate_doniegojohnullyses-gmail-com_32b50f84-7b71-4c6f-97f2-0783f4ac077a.pdf'
  },
  {
    name: 'INTRODUCTION TO MODERN AI',
    start: '2/2/2026',
    end: '2/2/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'Introduction_to_Modern_AI_certificate_doniegojohnullyses-gmail-com_aea51b50-ef9c-4cb6-9dbb-c81be907ad8c.pdf'
  },
  {
    name: 'HOW TO SWIM IN THE BLUE OCEAN AS A DIGITAL PROFESSIONAL',
    start: '3/2/2026',
    end: '3/2/2026',
    hours: '4',
    type: 'TECHNICAL',
    provider: 'DICT / ILCDB',
    fileName: 'HOW TO SWIM IN THE BLUE OCEAN AS A DIGITAL PROFESSIONAL PRACTITIONER - “The world doesn’t need another VA”.pdf'
  },
  {
    name: 'ENGLISH FOR IT: ADVICE AND TIME',
    start: '4/2/2026',
    end: '4/2/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'English_for_IT-_Advice_and_Time_certificate_doniegojohnullyses-gmail-com_467bdc01-84b5-4f6a-b2df-0cc55e08bc35.pdf'
  },
  {
    name: 'IT CUSTOMER SUPPORT BASICS',
    start: '4/2/2026',
    end: '4/2/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'IT_Customer_Support_Basics_certificate_doniegojohnullyses-gmail-com_9ca57d98-7560-4103-be43-4b01263dfbe1.pdf'
  },
  {
    name: 'INTRO TO CANVA & SCAM AWARENESS',
    start: '6/2/2026',
    end: '6/2/2026',
    hours: '4',
    type: 'TECHNICAL',
    provider: 'DICT SOUTH COTABATO / RACU XII',
    fileName: 'Intro to Canva & Scam Awareness.pdf'
  },
  {
    name: 'NETWORKING DEVICES AND INITIAL CONFIGURATION',
    start: '19/02/2026',
    end: '19/02/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'Networking_Devices_and_Initial_Configuration_certificate_doniegojohnullyses-gmail-com_87baff18-996a-4130-9ac6-7d64fc6648f6.pdf'
  },
  {
    name: 'INTRODUCTION TO MICROSOFT POWER BI',
    start: '20/02/2026',
    end: '20/02/2026',
    hours: '4',
    type: 'TECHNICAL',
    provider: 'DICT REGION 2 - QUIRINO PROVINCIAL OFFICE',
    fileName: 'Power BI.pdf'
  },
  {
    name: 'INTRODUCTION TO IOT AND DIGITAL TRANSFORMATION',
    start: '22/02/2026',
    end: '22/02/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'Introduction_to_IoT_certificate_doniegojohnullyses-gmail-com_3b066cea-7eeb-4deb-8e56-be50d72bcff9.pdf'
  },
  {
    name: 'ETHICAL HACKER',
    start: '23/02/2026',
    end: '23/02/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'Ethical_Hacker_certificate_doniegojohnullyses-gmail-com_7635ffc0-ec01-4e5a-b714-4b9fdaa4df04.pdf'
  },
  {
    name: 'INDUSTRIAL IOT AND CONTROL SYSTEMS IN ENERGY',
    start: '23/02/2026',
    end: '23/02/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'Industrial_IoT_and_Control_Systems_in_Energy_certificate_doniegojohnullyses-gmail-com_2b5f4b81-a172-4877-8d4f-7359b7595933.pdf'
  },
  {
    name: 'SECURITY AND CONNECTIVITY SUPPORT',
    start: '23/02/2026',
    end: '23/02/2026',
    hours: 'N/A',
    type: 'TECHNICAL',
    provider: 'CISCO NETWORKING ACADEMY / DICT-ITU DTC INITIATIVE',
    fileName: 'Security_and_Connectivity_Support_certificate_doniegojohnullyses-gmail-com_e93c1f96-c842-4c63-ba15-b53f6571ae0d.pdf'
  },
  {
    name: 'INTRODUCTION TO DATA ANALYTICS USING R PROGRAMMING',
    start: '29/04/2026',
    end: '29/04/2026',
    hours: '4',
    type: 'TECHNICAL',
    provider: 'DICT REGION 2 - BATANES PROVINCIAL OFFICE',
    fileName: 'INTRODUCTION TO DATA ANALYTICS USING R PROGRAMMING.pdf'
  }
]

export function Certifications() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCertifications = certificationsData.filter((cert) => {
    const searchString = `${cert.name} ${cert.provider} ${cert.type}`.toLowerCase()
    return searchString.includes(searchTerm.toLowerCase())
  })

  return (
    <section className="py-8 md:py-12 px-4 section-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Certifications</h1>
            <p className="text-xl text-muted-foreground">
              Technical training and professional certifications completed
            </p>
          </div>
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search certs or providers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all"
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-xl border bg-card shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-muted/50 border-b">
              <tr>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Certificate Title</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Provider</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Dates</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Hours</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Type</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredCertifications.map((cert, index) => (
                <tr key={index} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground max-w-xs">{cert.name}</td>
                  <td className="px-6 py-4 text-muted-foreground max-w-xs">{cert.provider}</td>
                  <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                    {cert.start === cert.end ? cert.start : `${cert.start} - ${cert.end}`}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground whitespace-nowrap">
                    {cert.hours === 'N/A' ? 'N/A' : `${cert.hours} hrs`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="secondary" className="font-semibold text-xs tracking-wider">
                      {cert.type}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    {cert.fileName ? (
                      <a
                        href={`${import.meta.env.BASE_URL}assets/certs/${cert.fileName}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary hover:underline font-semibold"
                      >
                        View
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground italic text-xs">Ongoing</span>
                    )}
                  </td>
                </tr>
              ))}
              {filteredCertifications.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-muted-foreground">
                    No certifications found matching search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden grid gap-4">
          {filteredCertifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5 space-y-4">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold text-lg leading-snug">{cert.name}</h3>
                  <Badge variant="secondary">{cert.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.provider}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground border-t pt-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {cert.start === cert.end ? cert.start : `${cert.start} - ${cert.end}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cert.hours === 'N/A' ? 'N/A Duration' : `${cert.hours} Hours`}</span>
                  </div>
                </div>
                <div className="pt-2">
                  {cert.fileName ? (
                    <a
                      href={`${import.meta.env.BASE_URL}assets/certs/${cert.fileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 border rounded-md py-2 text-sm text-primary hover:bg-muted font-medium transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="w-full text-center text-xs text-muted-foreground italic py-2 bg-muted/30 rounded-md">
                      Ongoing Training
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          {filteredCertifications.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No certifications found matching search criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
