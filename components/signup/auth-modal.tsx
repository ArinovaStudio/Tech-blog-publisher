
'use client'

import { X } from 'lucide-react'
import LoginPage from './login'
import SignupPage from './signup'
import { useState, useEffect } from 'react'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: 'login' | 'signup'
}

export function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode)
  const [formKey, setFormKey] = useState(0)

  // Reset mode and form key when modal opens
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode)
      setFormKey(prev => prev + 1) // Increment key to force re-mount
    }
  }, [isOpen, initialMode])

  const handleSignupSuccess = () => {
    // Switch to login mode after successful signup
    setTimeout(() => {
      setMode('login')
      setFormKey(prev => prev + 1) // Force re-mount for login form
    }, 1500)
  }

  const handleLoginSuccess = () => {
    // Wait a bit to show success message before closing
    setTimeout(() => {
      onClose()
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md z-10">
        <div className="bg-card p-6 sm:p-8 rounded-xl border border-border shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-background rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
          
          {mode === 'login' ? (
            <div key={formKey}>
              <LoginPage onSuccess={handleLoginSuccess} />
              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
                Don't have an account?{' '}
                <button
                  onClick={() => {
                    setMode('signup')
                    setFormKey(prev => prev + 1)
                  }}
                  className="text-primary font-semibold hover:text-blue-400 transition"
                >
                  Sign up
                </button>
              </p>
            </div>
          ) : (
            <div key={formKey}>
              <SignupPage onSuccess={handleSignupSuccess} />
              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
                Already have an account?{' '}
                <button
                  onClick={() => {
                    setMode('login')
                    setFormKey(prev => prev + 1)
                  }}
                  className="text-primary font-semibold hover:text-blue-400 transition"
                >
                  Sign in
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
