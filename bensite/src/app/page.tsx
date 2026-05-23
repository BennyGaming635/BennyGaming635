'use client'

import { useEffect, useState } from 'react'
import { Rnd } from 'react-rnd'
import { motion } from 'framer-motion'
import {
  FaFolder,
  FaGithub,
  FaTerminal,
  FaUser,
  FaWindows,
} from 'react-icons/fa'

export default function Home() {
  const [time, setTime] = useState('')
  const [startOpen, setStartOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      )
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])
}