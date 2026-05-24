"use client"

import { useEffect, useState } from "react"

import { Dock, DockIcon } from "./Dock/dock"
import { FaGithub, FaHome } from "react-icons/fa"
import { SiWikimediafoundation } from "react-icons/si"
import { PiToolboxFill } from "react-icons/pi"
import { IoIosMailUnread } from "react-icons/io"

import "../styles/dock.css"

export default function MyDock() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const scrollThreshold = 8

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY

      // ছোট scroll ignore
      if (Math.abs(scrollDelta) < scrollThreshold) {
        return
      }

      // Top এ থাকলে always show
      if (currentScrollY <= 10) {
        setIsNavbarVisible(true)
      }

      // Down Scroll = Hide
      else if (scrollDelta > 0) {
        setIsNavbarVisible(false)
      }

      // Up Scroll = Show
      else {
        setIsNavbarVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <Dock
        className={`dock-container ${
          isNavbarVisible ? "dock-visible" : "dock-hidden"
        }`}
        iconSize={40}
        iconMagnification={70}
        iconDistance={120}
        direction="middle"
      >
        <a href="#" className="hire-me">
          Rakib.dev
        </a>

        <DockIcon label="Home" className="dock-icon" href="#home">
          <FaHome size={20} loading="lazy"/>
        </DockIcon>

        <DockIcon label="About" className="dock-icon" href="#about">
          <SiWikimediafoundation size={20} loading="lazy"/>
        </DockIcon>

        <DockIcon label="Project" className="dock-icon" href="#project">
          <PiToolboxFill size={20} loading="lazy"/>
        </DockIcon>

        <DockIcon label="Github" className="dock-icon" href="#github">
          <FaGithub size={20} loading="lazy"/>
        </DockIcon>

        <DockIcon label="Contact" className="dock-icon" href="#contact">
          <IoIosMailUnread size={20} loading="lazy"/>
        </DockIcon>
      </Dock>
    </div>
  )
}