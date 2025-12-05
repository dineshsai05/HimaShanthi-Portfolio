"use client"

import { useState, useEffect } from "react"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState("home")

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT ME", href: "#about" },
    { name: "EDUCATION", href: "#education" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "RESEARCH", href: "#research" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ESSAYS", href: "#essays" },
    { name: "SKILLS", href: "#skills" },
  ]

  // Scroll spy: updates activeId based on section in view
  useEffect(() => {
    const handleScroll = () => {
      let current = "home"

      navItems.forEach((item) => {
        const id = item.href.replace("#", "")
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()
        // adjust 140 if you want earlier/later switch
        if (rect.top <= 140) {
          current = id
        }
      })

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-black text-white p-2 rounded"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white border-r border-black w-64 p-8 flex flex-col justify-between transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo + nav */}
        <div>
          <h1 className="text-2xl font-black mb-12 tracking-tight">HIMA</h1>

          {/* Navigation */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const id = item.href.replace("#", "")
              const isActive = activeId === id

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full px-3 py-2 text-base font-bold uppercase tracking-wide transition-all duration-200
                    ${
                      isActive
                        ? "bg-yellow-400 text-black"
                        : "text-black hover:bg-yellow-400 hover:text-black"
                    }`}
                >
                  {item.name}
                </a>
              )
            })}
          </nav>
        </div>

        {/* Divider line above CV */}
        <div className="h-[1px] w-full bg-black my-4"></div>

        {/* View CV button */}
        <a
          
          href="YOUR_CV_LINK_HERE" /* ikkada cv link pettu */
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-yellow-400 text-black font-semibold text-center py-2 rounded-lg border-2 border-black
                     transition-all duration-300 transform hover:-translate-y-1 hover:bg-black hover:text-white"
        >
          View CV
        </a>

        {/* Contact + socials */}
        <div className="space-y-6 mt-4">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full bg-yellow-400 text-black font-bold py-3 px-4 text-center uppercase text-sm rounded-lg border-2 border-black
                       transition-all duration-300 transform hover:-translate-y-1 hover:bg-black hover:text-white"
          >
            CONTACT
          </a>

          {/* Social Links */}
          <div className="flex gap-4 justify-center border-t pt-6">
            <a
              href="https://www.linkedin.com/in/himarayapati"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <span className="text-xs font-bold">in</span>
            </a>
            <a
              href="mailto:hrayapa1@asu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <span className="text-xs font-bold">@</span>
            </a>
          </div>

          <p className="text-xs text-gray-600">© 2025 Hima Shanthi</p>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
