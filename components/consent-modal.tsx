"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
interface ConsentModalProps {
  onAccept: () => void
}

export function ConsentModal({ onAccept }: ConsentModalProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [accepted, setAccepted] = useState(false)

  const handleAccept = () => {
    localStorage.setItem("consentAccepted", "true")
    localStorage.setItem("pap_consent_accepted", "true")
    setAccepted(true)
    onAccept()
  }

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      <div 
        className="relative w-full max-w-lg rounded-xl border border-border bg-background shadow-2xl"
      >
        <div className="border-b border-border px-6 pb-4 pt-6">
          <h2 id="consent-title" className="text-xl font-semibold text-foreground">
            Manage Consent
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Step {step} of 2
          </p>
        </div>

        <div className="p-6">
          {step === 1 ? <StepOne termsAccepted={termsAccepted} setTermsAccepted={setTermsAccepted} /> : <StepTwo />}
        </div>

        <div className="flex justify-end gap-3 px-6 pb-6">
          {step === 1 ? (
            <Button
              onClick={() => setStep(2)}
              disabled={!termsAccepted}
              className="min-w-[120px]"
            >
              Next
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="min-w-[100px]"
              >
                Back
              </Button>
              <Button
                onClick={handleAccept}
                className="min-w-[160px] bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={accepted}
              >
                Accept & Continue
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function StepOne({ 
  termsAccepted, 
  setTermsAccepted 
}: { 
  termsAccepted: boolean
  setTermsAccepted: (value: boolean) => void 
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
          REQUIRED
        </span>
        <span className="text-sm font-medium text-foreground">Terms & Conditions</span>
      </div>

      <div className="h-[280px] overflow-y-auto rounded-lg border border-border bg-muted/30 p-4 text-sm leading-relaxed text-foreground/90">
        <div className="space-y-4">
          <section>
            <h3 className="mb-2 font-semibold text-foreground">Terms & Conditions</h3>
            <p>
              Placeholder terms text. This section can be replaced with your full Terms & Conditions
              content, including purchase policies, acceptable use, and legal obligations.
            </p>
          </section>
        </div>
      </div>

      <label htmlFor="terms-checkbox" className="group flex cursor-pointer items-start gap-3">
        <Checkbox
          id="terms-checkbox"
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(checked === true)}
          className="mt-0.5"
        />
        <span className="text-sm leading-tight text-foreground group-hover:text-foreground/80">I agree to the Terms & Conditions</span>
      </label>
    </div>
  )
}

function StepTwo() {
  return (
    <div className="space-y-4">
      <div className="h-[280px] overflow-y-auto rounded-lg border border-border bg-muted/30 p-4 text-sm leading-relaxed text-foreground/90">
        <div className="space-y-4">
          <section>
            <h3 className="mb-2 font-semibold text-foreground">Disclaimer</h3>
            <p>
              Placeholder disclaimer text. This section can be replaced with your full legal
              disclaimer, risk acknowledgments, and intended-use statements.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
