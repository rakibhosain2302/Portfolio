"use client"

import { Dock, DockIcon } from "./Dock/dock"
import { FaGithub, FaHome } from "react-icons/fa"
import { SiWikimediafoundation } from "react-icons/si"
import { PiToolboxFill } from "react-icons/pi";
import { IoIosMailUnread } from "react-icons/io";



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
        <DockIcon label="Home">
          <FaHome size={20}/>
        </DockIcon>

        <DockIcon label="About Me">
          <SiWikimediafoundation size={20} />
        </DockIcon>

        <DockIcon label="Project">
          <PiToolboxFill size={20} />
        </DockIcon>

        <DockIcon label="Github">
          <FaGithub size={20} />
        </DockIcon>

        <DockIcon label="Contact">
          <IoIosMailUnread size={20} />
        </DockIcon>
      </Dock>
    </div>
  )
}