import React, { useState, useEffect } from 'react'

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${position.x - 20}px`,
        top: `${position.y - 20}px`,
        opacity: isVisible ? 0.5 : 0,
        transition: 'opacity 0.2s ease',
        pointerEvents: 'none'
      }}
    />
  )
}

export default CursorGlow
