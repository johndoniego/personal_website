import * as React from 'react'

export interface GlitchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: React.ReactNode
}

export function GlitchButton({ text, icon, className = '', onMouseEnter, onFocus, ...props }: GlitchButtonProps) {
  const [displayText, setDisplayText] = React.useState(text)
  const [isScrambling, setIsScrambling] = React.useState(false)

  React.useEffect(() => {
    if (!isScrambling) {
      setDisplayText(text)
    }
  }, [text, isScrambling])

  const triggerScramble = () => {
    if (isScrambling) return
    setIsScrambling(true)

    // Characters derived from the original CSS keyframes animation
    const chars = '#.-!$_№:0{}+?@}%\\;1]|f[\'<'
    const duration = 1200
    const intervalTime = 60
    const totalSteps = duration / intervalTime
    let step = 0

    const timer = setInterval(() => {
      step++
      if (step >= totalSteps) {
        setDisplayText(text)
        setIsScrambling(false)
        clearInterval(timer)
        return
      }

      // We reveal characters from left to right as the animation progresses
      const revealCount = Math.floor((step / totalSteps) * text.length)
      const scrambled = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' '
          if (index < revealCount) return text[index]
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')

      setDisplayText(scrambled)
    }, intervalTime)
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    triggerScramble()
    if (onMouseEnter) onMouseEnter(e)
  }

  const handleFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
    triggerScramble()
    if (onFocus) onFocus(e)
  }

  return (
    <button
      className={`glitch-btn ${className}`}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      {...props}
    >
      <span>
        {icon}
        {displayText}
      </span>
    </button>
  )
}
