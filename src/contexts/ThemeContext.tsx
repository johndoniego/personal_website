import React, { createContext, useContext, useEffect, useState } from 'react'

export type ColorScheme =
  | 'classic' | 'midnight' | 'sunset' | 'forest' | 'brutalist' | 'neon'
  | 'ocean' | 'rose' | 'cyberpunk' | 'dracula' | 'nord' | 'lavender'
  | 'retro' | 'coffee' | 'mint' | 'velvet'

interface ThemeContextType {
  colorScheme: ColorScheme
  setColorScheme: (scheme: ColorScheme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const colorSchemes: ColorScheme[] = [
  'classic', 'midnight', 'sunset', 'forest', 'brutalist', 'neon',
  'ocean', 'rose', 'cyberpunk', 'dracula', 'nord', 'lavender',
  'retro', 'coffee', 'mint', 'velvet'
]

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>('classic')

  useEffect(() => {
    const storedScheme = localStorage.getItem('colorScheme') as ColorScheme || 'classic'
    setColorSchemeState(storedScheme)
    applyColorScheme(storedScheme)
  }, [])

  const applyColorScheme = (scheme: ColorScheme) => {
    const root = document.documentElement
    
    // Remove all theme- classes
    colorSchemes.forEach((s) => {
      root.classList.remove(`theme-${s}`)
    })

    // Add selected theme class if not classic
    if (scheme !== 'classic') {
      root.classList.add(`theme-${scheme}`)
    }
  }

  const setColorScheme = (newScheme: ColorScheme) => {
    setColorSchemeState(newScheme)
    localStorage.setItem('colorScheme', newScheme)
    applyColorScheme(newScheme)
  }

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
