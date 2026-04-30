"use client"

import { Dock, DockIcon } from "./Dock/dock"
import { FaGithub, FaLinkedin, FaHome } from "react-icons/fa"
import { SiWikimediafoundation } from "react-icons/si"
import { PiToolboxFill } from "react-icons/pi";
import { RiMailSendFill } from "react-icons/ri";


import '../styles/dock.css'

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
          <SiWikimediafoundation size={20} />
        </DockIcon>

        <DockIcon>
          <PiToolboxFill size={20} />
        </DockIcon>

        <DockIcon>
          <FaGithub size={20} />
        </DockIcon>

        <DockIcon>
          <RiMailSendFill size={20} />
        </DockIcon>
      </Dock>
    </div>
  )
}