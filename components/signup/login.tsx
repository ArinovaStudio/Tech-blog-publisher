'use client'

import { useState, useEffect } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface LoginProps {
  onSuccess?: () => void
}

export default function LoginPage({ onSuccess }: LoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Clear form when component mounts
  useEffect(() => {
    setEmail('')
    setPassword('')
    setError('')
    setSuccess('')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Invalid email or password')
        return
      }

      setSuccess(data.message || 'Login successful!')
      console.log('Login successful:', data)
      
      // Clear form after success
      setEmail('')
      setPassword('')
      
      onSuccess?.()
    } catch (err) {
      setError('Failed to login. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="space-y-2 mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Sign in</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">Enter your credentials to sign in</p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="text-xs sm:text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded px-3 py-2 mb-4">{success}</div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" autoComplete="off">
        {/* Email Input */}
        <div className="space-y-2">
          <label htmlFor="login-email" className="text-xs sm:text-sm font-medium text-white">Email address</label>
          <input
            id="login-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="new-email"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg text-sm sm:text-base text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <label htmlFor="login-password" className="text-xs sm:text-sm font-medium text-white">Password</label>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 bg-background border border-border rounded-lg text-sm sm:text-base text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-xs sm:text-sm text-destructive bg-red-500/10 border border-red-500/20 rounded px-3 py-2">{error}</div>
        )}

        {/* Remember Me */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-border bg-background" />
            <span className="text-xs sm:text-sm text-muted-foreground">Remember me</span>
          </label>
          <button className="text-xs sm:text-sm text-primary hover:text-blue-400 transition">
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 sm:py-3 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition mt-4 sm:mt-6 text-sm sm:text-base"
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
