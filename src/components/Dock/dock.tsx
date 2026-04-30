import { useState, useRef } from 'react'
import { OverlayTrigger, Tooltip } from "react-bootstrap";
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
  const ref = useRef<HTMLDivElement>(null)

  const content = (
    <>
      {children}
    </>
  )

  if (href) {
    if (label) {
      return (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}
        >
          <a
            href={href}
            target={target}
            rel={target === '_blank' ? 'noopener noreferrer' : undefined}
            className="dock-icon"
            ref={ref as any}
          >
            {children}
          </a>
        </OverlayTrigger>
      )
    }

    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className="dock-icon"
        ref={ref as any}
      >
        {children}
      </a>
    )
  }

  if (label) {
    return (
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}
      >
        <div 
          className="dock-icon"
          ref={ref}
        >
          {children}
        </div>
      </OverlayTrigger>
    )
  }

  return (
    <div 
      className="dock-icon"
      ref={ref}
    >
      {children}
    </div>
  )
}
