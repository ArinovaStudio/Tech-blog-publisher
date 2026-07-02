'use client'

import React, { useEffect, useState } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Set initial theme based on localStorage or system preference
    const theme = localStorage.getItem('theme') || 'dark'
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  if (!mounted) return <>{children}</>

  return <>{children}</>
}
