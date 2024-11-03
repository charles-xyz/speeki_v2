"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AnalogCountdown() {
  const [timeLeft, setTimeLeft] = useState(45)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
      alert("Countdown finished!")
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft])

  const toggleTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(45)
    }
    setIsActive(!isActive)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const radius = 100
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - timeLeft / 45)

  return (
    <div className="flex flex-col items-center justify-center">
      <style jsx global>{`
        @font-face {
          font-family: 'DS-Digital';
          src: url('https://db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2') format('woff2');
        }
      `}</style>
      <div className="relative w-64 h-64">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="128"
            cy="128"
            r={radius}
            strokeWidth="12"
            fill="transparent"
          />
          <circle
            cx="128"
            cy="128"
            r={radius}
            stroke="#26C6DA"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-6xl font-bold text-cyan-400" 
            style={{ fontFamily: "'DS-Digital', monospace" }}
            aria-live="polite"
            aria-label={`Time remaining: ${formatTime(timeLeft)}`}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>
      <Button 
        onClick={toggleTimer} 
        className="mt-4 bg-purple-500 hover:bg-purple-600"
      >
        {isActive ? 'Pause' : timeLeft === 0 ? 'Restart' : 'Start'}
      </Button>
    </div>
  )
}