import { useEffect } from 'react'

export const useTheme = () => {
  useEffect(() => {
    // Get theme from URL query param
    const params = new URLSearchParams(window.location.search)
    const theme = params.get('theme') || 'dark'
    
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme)
  }, [])
}
