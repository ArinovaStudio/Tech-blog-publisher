'use client'

import { useState, useEffect } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface SignupProps {
  onSuccess?: () => void
}

export default function SignupPage({ onSuccess }: SignupProps) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Clear form when component mounts
  useEffect(() => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
    setError('')
    setSuccess('')
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Failed to create account')
        return
      }

      setSuccess(data.message || 'Account created successfully!')
      console.log('Signup successful:', data)
      
      // Clear form after success
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
      
      onSuccess?.()
    } catch (err) {
      setError('Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <div className="space-y-2 mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Create account</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">Sign up to get started</p>
      </div>

      {/* Success Message */}
      {success && (
        <div className="text-xs sm:text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded px-3 py-2 mb-4">{success}</div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" autoComplete="off">
        {/* Username Input */}
        <div className="space-y-2">
          <label htmlFor="signup-username" className="text-xs sm:text-sm font-medium text-white">Username</label>
          <input
            id="signup-username"
            name="username"
            type="text"
            placeholder="johndoe"
            value={formData.username}
            onChange={handleChange}
            required
            autoComplete="new-username"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg text-sm sm:text-base text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label htmlFor="signup-email" className="text-xs sm:text-sm font-medium text-white">Email address</label>
          <input
            id="signup-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="new-email"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-lg text-sm sm:text-base text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        {/* Password Input */}
        <div className="space-y-2">
          <label htmlFor="signup-password" className="text-xs sm:text-sm font-medium text-white">Password</label>
          <div className="relative">
            <input
              id="signup-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
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
          <p className="text-xs text-muted-foreground">At least 6 characters</p>
        </div>

        {/* Confirm Password Input */}
        <div className="space-y-2">
          <label htmlFor="signup-confirmPassword" className="text-xs sm:text-sm font-medium text-white">Confirm password</label>
          <div className="relative">
            <input
              id="signup-confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 bg-background border border-border rounded-lg text-sm sm:text-base text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-xs sm:text-sm text-destructive bg-red-500/10 border border-red-500/20 rounded px-3 py-2">{error}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 sm:py-3 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed transition mt-4 sm:mt-6 text-sm sm:text-base"
        >
          {loading ? 'Creating account...' : 'Create account'}
        </button>
      </form>
    </div>
  )
}
