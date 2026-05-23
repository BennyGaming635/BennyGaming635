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
}