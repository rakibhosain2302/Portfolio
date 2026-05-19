import { useState, useRef, ReactElement } from 'react'
import '@/styles/dock.css'

interface DockIconProps {
  children: React.ReactNode
  label?: string
  href?: string
  target?: string
  onClick?: () => void
  isActive?: boolean
  onSetActive?: (label: string) => void
}

export function Dock({ 
  children, 
  direction = 'middle',
  iconSize = 45,
  iconMagnification = 70,
  iconDistance = 120 
}: { 
  children: React.ReactNode
  direction?: string
  iconSize?: number
  iconMagnification?: number
  iconDistance?: number
}) {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)

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
        {Array.isArray(children) 
          ? children.map((child: ReactElement, index: number) => {
              if (child && child.props && child.props.label) {
                return (
                  <div key={index}>
                    {(() => {
                      const DockIconComponent = child.type as any
                      return (
                        <DockIconComponent
                          {...child.props}
                          isActive={activeIcon === child.props.label}
                          onSetActive={(label: string) => setActiveIcon(label)}
                        />
                      )
                    })()}
                  </div>
                )
              }
              return child
            })
          : children}
      </div>
    </div>
  )
}

export function DockIcon({ 
  children, 
  label, 
  href, 
  target, 
  isActive = false, 
  onSetActive,
  onClick 
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleClick = (e: React.MouseEvent) => {
    if (label && onSetActive) {
      onSetActive(label)
    }
    if (onClick) {
      onClick()
    }
  }

  const showText = isHovered || isActive

  const content = (
    <>
      {!showText && <span className="dock-icon-content">{children}</span>}
      {showText && label && <span className="dock-label-inline">{label}</span>}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`dock-icon ${isHovered || isActive ? 'hovered' : ''} ${isActive ? 'active' : ''}`}
        ref={ref as any}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {content}
      </a>
    )
  }

  return (
    <div 
      className={`dock-icon ${isHovered || isActive ? 'hovered' : ''} ${isActive ? 'active' : ''}`}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {content}
    </div>
  )
}
