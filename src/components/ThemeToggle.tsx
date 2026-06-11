import { useTheme, type ColorScheme } from '@/contexts/ThemeContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { 
  Palette, Moon, Sun, Trees, Zap, Sparkles, Waves, Heart, 
  Terminal, Ghost, Wind, Flower, Tv, Coffee as CoffeeIcon, Leaf, Crown 
} from 'lucide-react'

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useTheme()

  const schemes: { id: ColorScheme; label: string; icon: any; color: string; bg: string; border: string; textColor: string }[] = [
    { id: 'classic', label: 'Classic', icon: Palette, color: '#0ea5e9', bg: '#FBFBFA', border: '#e0f2fe', textColor: '#1C1917' },
    { id: 'midnight', label: 'Midnight', icon: Moon, color: '#EAB308', bg: '#0A0A0B', border: '#422006', textColor: '#F5F5F4' },
    { id: 'sunset', label: 'Sunset', icon: Sun, color: '#F97316', bg: '#FFF7ED', border: '#FFEDD5', textColor: '#431407' },
    { id: 'forest', label: 'Forest', icon: Trees, color: '#10B981', bg: '#F0F4F0', border: '#D1FAE5', textColor: '#064E3B' },
    { id: 'brutalist', label: 'Brutalist', icon: Zap, color: '#00FF00', bg: '#FFFFFF', border: '#CCFFCC', textColor: '#000000' },
    { id: 'neon', label: 'Neon', icon: Sparkles, color: '#A855F7', bg: '#0D0D1A', border: '#2E1065', textColor: '#E8E8FF' },
    { id: 'ocean', label: 'Ocean', icon: Waves, color: '#06B6D4', bg: '#0C1929', border: '#164E63', textColor: '#E0F2FE' },
    { id: 'rose', label: 'Rosé', icon: Heart, color: '#F43F5E', bg: '#FFF1F2', border: '#FFE4E6', textColor: '#4C0519' },
    { id: 'cyberpunk', label: 'Cyberpunk', icon: Terminal, color: '#00FF9D', bg: '#0F0F1A', border: '#004d30', textColor: '#E0E0FF' },
    { id: 'dracula', label: 'Dracula', icon: Ghost, color: '#FF79C6', bg: '#282A36', border: '#44475A', textColor: '#F8F8F2' },
    { id: 'nord', label: 'Nord', icon: Wind, color: '#88C0D0', bg: '#2E3440', border: '#4C566A', textColor: '#ECEFF4' },
    { id: 'lavender', label: 'Lavender', icon: Flower, color: '#9333EA', bg: '#F3E8FF', border: '#E9D5FF', textColor: '#3B0764' },
    { id: 'retro', label: 'Retro', icon: Tv, color: '#D6AD60', bg: '#F4EBD0', border: '#B68D40', textColor: '#122620' },
    { id: 'coffee', label: 'Coffee', icon: CoffeeIcon, color: '#C6AC8F', bg: '#EAE0D5', border: '#5E503F', textColor: '#220901' },
    { id: 'mint', label: 'Mint', icon: Leaf, color: '#00BFA5', bg: '#E0F7FA', border: '#B2DFDB', textColor: '#004D40' },
    { id: 'velvet', label: 'Velvet', icon: Crown, color: '#D946EF', bg: '#1A0B2E', border: '#701A75', textColor: '#F3E8FF' },
  ]

  const activeScheme = schemes.find((s) => s.id === colorScheme) || schemes[0]
  const ActiveIcon = activeScheme.icon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="default" 
          className="flex items-center gap-2 border-2 border-ink px-4 py-2 bg-bg text-ink hover:bg-accent-muted transition-all rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
        >
          <ActiveIcon className="h-4.5 w-4.5" style={{ color: activeScheme.color }} />
          <span className="font-display font-medium text-xs tracking-wider uppercase">{activeScheme.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="max-h-[380px] overflow-y-auto w-64 p-3 bg-bg border-2 border-ink rounded-2xl shadow-xl mt-2"
      >
        <p className="font-display font-bold text-[10px] tracking-widest text-muted-foreground uppercase mb-3 px-1">
          Color Palette
        </p>
        <div className="grid grid-cols-2 gap-2">
          {schemes.map((scheme) => {
            const IconComponent = scheme.icon
            const isSelected = colorScheme === scheme.id

            return (
              <button
                key={scheme.id}
                onClick={() => setColorScheme(scheme.id)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all group relative ${
                  isSelected 
                    ? 'border-accent scale-102 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]' 
                    : 'border-border hover:border-ink hover:scale-102'
                }`}
                style={{ backgroundColor: scheme.bg }}
                title={scheme.label}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all"
                  style={{ 
                    borderColor: scheme.border,
                    backgroundColor: isSelected ? scheme.border : 'transparent'
                  }}
                >
                  <IconComponent 
                    className="w-5 h-5 transition-transform group-hover:scale-110" 
                    style={{ color: scheme.color }} 
                  />
                </div>
                <span 
                  className="text-[9px] mt-2 tracking-widest uppercase font-display font-semibold transition-opacity"
                  style={{ color: scheme.textColor }}
                >
                  {scheme.label}
                </span>
              </button>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
