"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AccountSignInPage() {
  const router = useRouter()
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="mx-auto flex w-full max-w-md flex-col px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
        <div className="rounded-2xl border border-slate-100 bg-white px-6 py-12 text-center shadow-[0_8px_40px_-12px_rgba(15,23,42,0.1)] sm:px-10">
          <p className="text-lg font-semibold text-slate-900">Welcome back</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Sign-in will connect here when your backend is ready.
          </p>
          <Button
            type="button"
            className="mt-8 h-12 w-full rounded-xl bg-[#14B8A6] text-base font-medium text-white hover:bg-[#0f9f91]"
            onClick={() => router.push("/")}
          >
            Back to home
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-col px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12">
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Sign in</h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">Use the phone number on your account.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_8px_40px_-12px_rgba(15,23,42,0.1)] sm:mt-12 sm:p-8"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="signin-phone" className="text-sm font-medium text-slate-800">
                Phone number
              </Label>
              <Input
                id="signin-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                required
                placeholder="+1 (555) 000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 rounded-xl border-slate-200 bg-white px-4 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="signin-password" className="text-sm font-medium text-slate-800">
                Password
              </Label>
              <Input
                id="signin-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl border-slate-200 bg-white px-4 text-base"
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-8 h-14 w-full rounded-xl bg-[#14B8A6] text-base font-semibold text-white shadow-[0_4px_20px_-4px_rgba(20,184,166,0.45)] hover:bg-[#0f9f91]"
          >
            Sign in
          </Button>

          <p className="mt-6 text-center text-sm text-slate-600">
            New here?{" "}
            <Link href="/account/create" className="font-medium text-[#14B8A6] underline-offset-4 hover:underline">
              Create an account
            </Link>
          </p>
        </form>

        <p className="mt-8 text-center">
          <Link href="/account" className="text-sm font-medium text-slate-500 transition-colors hover:text-[#14B8A6]">
            ← Back to benefits
          </Link>
        </p>
      </div>
    </main>
  )
}
