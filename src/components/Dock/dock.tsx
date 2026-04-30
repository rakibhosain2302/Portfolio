import { useState, useRef } from 'react'
import '@/styles/dock.css'

interface DockIconProps {
  children: React.ReactNode
  label?: string
  href?: string
  target?: string
}

export function Dock({ 
  children, 
  direction = 'middle',
  iconSize = 40,
  iconMagnification = 70,
  iconDistance = 120 
}: { 
  children: React.ReactNode
  direction?: string
  iconSize?: number
  iconMagnification?: number
  iconDistance?: number
}) {
  return (
    <div 
      className="dock-container"
      data-direction={direction}
      style={{
        '--icon-size': `${iconSize}px`,
        '--icon-magnification': `${iconMagnification}px`,
        '--icon-distance': `${iconDistance}px`
      } as React.CSSProperties}
    >
      <div className="dock">
        {children}
      </div>
    </div>
  )
}

export function DockIcon({ children, label, href, target }: DockIconProps) {
  const [showLabel, setShowLabel] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="dock-icon"
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        ref={ref as any}
      >
        {children}
        {label && showLabel && <span className="dock-label">{label}</span>}
      </a>
    )
  }

  return (
    <div 
      className="dock-icon"
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
      ref={ref}
    >
      {children}
      {label && showLabel && <span className="dock-label">{label}</span>}
    </div>
  )
}
