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
  const [booting, setBooting] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const bootTimer = setTimeout(() => {
      setTimeout(() => {
        setBooting(false)
      }, 500)
    }, 3000)

    return () => clearTimeout(bootTimer)
  }, [])

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
     } 

    check()
    window.addEventListener('resize', check)

    return () => window.removeEventListener('resize', check)
  }, [])

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

  if (isMobile) {
    return (
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white text-center">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Desktop Only</h1>
          <p className="text-neutral-400 text-l">
            Please open this site on a desktop or laptop to experience this site.
            Thank you.
          </p>
        </div>
      </main>
    )
  }

  if (booting) {
    return (
      <main className="lex h-screen w-screen flex-col items-center justify-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6"
          >
            <div className="text-6xl font-bold tracking-widest">
              benOS
            </div>
            <div className="h-2 w-72 overflow-hidden rounded-full bg-white/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3 }}
                className="h-full bg-blue-500"
              />
            </div>
            <p className="text-sm text-netural-400">
              Starting benOS...
            </p>
          </motion.div>
      </main>
    )
  }

  return (
    <main className="h-screen w-screen overflow-hidden bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center text-white select-none">
      <div className="absolute left-4 top-4 flex flex-col gap-6">
        <DesktopIcon
          icon={<FaUser size={28} />}
          label="About Me"
          onClick={() => setAboutOpen(true)}
        />

        <DesktopIcon
          icon={<FaFolder size={28} />}
          label="Projects"
          onClick={() => setProjectsOpen(true)}
        />

        <DesktopIcon
          icon={<FaTerminal size={28} />}
          label="Terminal"
          onClick={() => setTerminalOpen(true)}
        />
      </div>

      {aboutOpen && (
        <Window
          title="About Me"
          onClose={() => setAboutOpen(false)}
        >
          <div className="space-y-3 text-sm text-black">
            <h2 className="text-2xl font-bold">Ben</h2>
            <p>
              Youth Developer from Adelaide building apps, transport concepts,
              websites, and creative projects.
            </p>

            <div>
              <p className="font-semibold">Skills</p>
              <ul className="list-disc pl-5">
                <li>Next.js</li>
                <li>Python</li>
                <li>Flutter</li>
                <li>UI Design</li>
              </ul>
            </div>
          </div>
        </Window>
      )}

      {projectsOpen && (
        <Window
          title="Projects"
          onClose={() => setProjectsOpen(false)}
        >
          <div className="space-y-4 text-black text-sm">
            <ProjectCard
              name="Ninja"
              description="Offline productivity and password manager app."
            />

            <ProjectCard
              name="CodeQuest"
              description="Gamified coding challenge platform."
            />

            <ProjectCard
              name="Wavey"
              description="Internal messaging and social platform."
            />

            <ProjectCard
              name="Clean Today"
              description="Platform to connect communities and governments for local cleanups."
            />

            <ProjectCard
              name="DeskFM"
              description="A simple python-based app to play and organise your music library."
            />
          </div>
        </Window>
      )}

      {terminalOpen && (
        <Window
          title="Terminal"
          onClose={() => setTerminalOpen(false)}
        >
          <div className="h-full rounded bg-black p-4 font-mono text-green-400">
            <p>Terminal</p>
            <br />
            <p>&gt; help</p>
            <p>about - Open about info</p>
            <p>projects - View projects</p>
            <p>github - Open GitHub</p>
            <br />
            <p>&gt; github</p>
            <a
              href="https://github.com/bennygaming635"
              target="_blank"
              className="text-blue-400 underline"
            >
              Open GitHub
            </a>
          </div>
        </Window>
      )}

      {startOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-16 left-4 w-72 rounded-2xl border border-white/20 bg-black/70 p-4 backdrop-blur-lg"
        >
          <h2 className="mb-4 text-lg font-bold">Start Menu</h2>

          <div className="space-y-2">
            <StartButton
              icon={<FaUser />}
              label="About Me"
              onClick={() => {
                setAboutOpen(true)
                setStartOpen(false)
              }}
            />

            <StartButton
              icon={<FaFolder />}
              label="Projects"
              onClick={() => {
                setProjectsOpen(true)
                setStartOpen(false)
              }}
            />

            <StartButton
              icon={<FaTerminal />}
              label="Terminal"
              onClick={() => {
                setTerminalOpen(true)
                setStartOpen(false)
              }}
            />
          </div>
        </motion.div>
      )}

      <div className="absolute bottom-0 flex h-14 w-full items-center justify-between border-t border-white/20 bg-black/40 px-4 backdrop-blur-lg">
        <button
          onClick={() => setStartOpen(!startOpen)}
          className="flex items-center gap-2 rounded-xl px-4 py-2 transition hover:bg-white/10"
        >
          <FaWindows />
          Start
        </button>

        <div className="flex items-center gap-4 text-sm">
          <FaGithub />
          <span>{time}</span>
        </div>
      </div>
    </main>
  )
}

function DesktopIcon({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button
      onDoubleClick={onClick}
      className="flex w-24 flex-col items-center gap-2 rounded-xl p-2 hover:bg-white/10"
    >
      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
        {icon}
      </div>

      <span className="text-center text-sm">{label}</span>
    </button>
  )
}

function Window({
  title,
  children,
  onClose,
}: {
  title: string
  children: React.ReactNode
  onClose: () => void
}) {
  return (
    <Rnd
      default={{
        x: 250,
        y: 100,
        width: 500,
        height: 350,
      }}
      minWidth={300}
      minHeight={200}
      dragHandleClassName="window-drag"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/90 shadow-2xl"
      >
        <div className="window-drag flex cursor-move items-center justify-between bg-neutral-900 px-4 py-3 text-white">
          <span>{title}</span>

          <button
            onClick={onClose}
            className="rounded bg-red-500 px-3 py-1 text-sm hover:bg-red-600"
          >
            X
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">{children}</div>
      </motion.div>
    </Rnd>
  )
}

function StartButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/10"
    >
      {icon}
      {label}
    </button>
  )
}

function ProjectCard({
  name,
  description,
}: {
  name: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-neutral-300 p-4">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>{description}</p>
    </div>
  )
}