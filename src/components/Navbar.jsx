"use client"

import { Dock, DockIcon } from "./Dock/dock"
import { FaGithub, FaLinkedin, FaHome } from "react-icons/fa"
import { SiReact, SiLaravel } from "react-icons/si"

export default function MyDock() {
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2">
      <Dock
        iconSize={40}
        iconMagnification={70}
        iconDistance={120}
        direction="middle"
      >
        <DockIcon>
          <FaHome size={20} />
        </DockIcon>

        <DockIcon>
          <SiReact size={20} />
        </DockIcon>

        <DockIcon>
          <SiLaravel size={20} />
        </DockIcon>

        <DockIcon>
          <FaGithub size={20} />
        </DockIcon>

        <DockIcon>
          <FaLinkedin size={20} />
        </DockIcon>
      </Dock>
    </div>
  )
}