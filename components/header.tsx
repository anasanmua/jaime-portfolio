"use client"

import React from "react"

import Link from "next/link"
import { useState, useCallback } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLang } from "@/lib/i18n-provider"
import { dictionary, type Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const navKeys = ["about", "work", "contact"] as const

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLang()

  const navLinks = navKeys.map((key) => ({
    href: `#${key}`,
    label: t(dictionary.nav[key]),
  }))

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    setMobileMenuOpen(false)
  }, [])

  const toggleLocale = () => {
    const next: Locale = locale === "es" ? "en" : "es"
    setLocale(next)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            aria-label="Jaime Rosado Garcie — Home"
            className="flex items-center justify-center font-display text-lg font-bold uppercase tracking-wide text-foreground"
          >
            <span className="grid h-10 w-10 place-items-center clip-notch border border-primary/50 bg-primary/10 font-mono text-sm text-primary">
              JRG
            </span>
          </Link>
          <a
            href="https://anasanchez.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden lg:inline-flex items-center gap-2.5 clip-notch border border-primary/40 bg-primary/10 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Made with love by Ana — visit portfolio"
          >
            {t(dictionary.nav.madeWith)}
            <span className="text-primary transition-transform group-hover:scale-125" aria-hidden>♥</span>
            {t(dictionary.nav.by)}
            <span className="text-primary">Ana</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center clip-notch border border-border bg-secondary font-mono text-xs font-semibold uppercase tracking-wider"
            aria-label="Toggle language"
          >
            <span className={cn("px-2.5 py-1.5 transition-colors", locale === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}>ES</span>
            <span className="text-border">/</span>
            <span className={cn("px-2.5 py-1.5 transition-colors", locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground")}>EN</span>
          </button>



          <Button asChild size="sm" className="clip-notch">
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
              {t(dictionary.nav.getInTouch)}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            {/* Language Toggle (mobile) */}
            <button
              onClick={toggleLocale}
              className="self-start flex items-center clip-notch border border-border bg-secondary font-mono text-xs font-semibold uppercase tracking-wider"
              aria-label="Toggle language"
            >
              <span className={cn("px-2.5 py-1.5 transition-colors", locale === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>ES</span>
              <span className="text-border">/</span>
              <span className={cn("px-2.5 py-1.5 transition-colors", locale === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground")}>EN</span>
            </button>

            <Button asChild className="w-full clip-notch">
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                {t(dictionary.nav.getInTouch)}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
