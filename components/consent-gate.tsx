"use client"

import { useEffect, useState } from "react"
import { ConsentModal } from "@/components/consent-modal"

export function ConsentGate({ children }: { children: React.ReactNode }) {
  const [accepted, setAccepted] = useState(false)
  const [checkedStorage, setCheckedStorage] = useState(false)

  useEffect(() => {
    const isAccepted =
      localStorage.getItem("consentAccepted") === "true" ||
      localStorage.getItem("pap_consent_accepted") === "true"
    setAccepted(isAccepted)
    setCheckedStorage(true)
  }, [])

  useEffect(() => {
    if (!checkedStorage || !accepted) {
      document.body.style.overflow = "hidden"
      return
    }
    document.body.style.overflow = ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [accepted, checkedStorage])

  if (!checkedStorage) {
    return <>{children}</>
  }

  return (
    <>
      {!accepted && <ConsentModal onAccept={() => setAccepted(true)} />}
      {children}
    </>
  )
}
