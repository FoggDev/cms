"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
  title: string
}

export function VideoModal({ isOpen, onClose, videoId, title }: VideoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl mx-4 bg-background rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video */}
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
