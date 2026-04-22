"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
interface ConsentModalProps {
  onAccept: () => void
}

export function ConsentModal({ onAccept }: ConsentModalProps) {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)
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
            Disclaimer
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">Please review and accept to continue.</p>
        </div>

        <div className="p-6">
          <DisclaimerContent
            disclaimerAccepted={disclaimerAccepted}
            setDisclaimerAccepted={setDisclaimerAccepted}
          />
        </div>

        <div className="flex justify-end gap-3 px-6 pb-6">
          <Button
            onClick={handleAccept}
            className="min-w-[180px] bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={accepted || !disclaimerAccepted}
          >
            Accept & Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

function DisclaimerContent({
  disclaimerAccepted,
  setDisclaimerAccepted,
}: {
  disclaimerAccepted: boolean
  setDisclaimerAccepted: (value: boolean) => void
}) {
  return (
    <div className="space-y-4">
      <div className="h-[280px] overflow-y-auto rounded-lg border border-border bg-muted/30 p-4 text-sm leading-relaxed text-foreground/90">
        <div className="space-y-4">
          <section>
            <h3 className="mb-2 font-semibold text-foreground">Disclaimer</h3>
            <p>
              This Disclaimer applies to the use of https://pure-amino-peptides.com/ (&ldquo;Website&rdquo;), any products purchased from Pure Aminos (&ldquo;Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;, &ldquo;Our&rdquo;), and any information provided on or through the Website.
            </p>
            <p className="mt-2">
              By accessing or using the Website, You (&ldquo;User&rdquo;) acknowledge and agree to the terms outlined in this Disclaimer.
            </p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">1. Research Use Only — Not for Human or Animal Consumption</h4>
            <p>All products sold by Pure Aminos are intended strictly for laboratory, scientific, and research purposes only.</p>
            <p className="mt-2">Products are NOT intended for:</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Human consumption</li>
              <li>Animal consumption</li>
              <li>Clinical or medical use</li>
              <li>Diagnostic or therapeutic purposes</li>
              <li>Veterinary use</li>
              <li>Any in vivo experimentation</li>
            </ul>
            <p className="mt-2">
              Any misuse, ingestion, injection, inhalation, topical application, or other administration of products to humans or animals is strictly prohibited.
            </p>
            <p className="mt-2">
              User assumes full responsibility for compliance with all applicable laws and regulations regarding purchase, possession, and use of research chemicals.
            </p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">2. No Medical Advice or Health Claims</h4>
            <p>Information on https://pure-amino-peptides.com/ is provided for educational and informational purposes only.</p>
            <p className="mt-2">Nothing on the Website should be interpreted as:</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Medical advice</li>
              <li>Health guidance</li>
              <li>Diagnosis or treatment recommendations</li>
              <li>A claim that any product can cure, mitigate, treat, or prevent any disease</li>
              <li>Suggestions for personal or clinical use</li>
            </ul>
            <p className="mt-2">
              Always consult licensed professionals for medical or scientific guidance. Pure Aminos does not provide professional medical, pharmaceutical, or veterinary advice.
            </p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">3. Not FDA Approved</h4>
            <p>Unless explicitly stated otherwise:</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Products sold by Pure Aminos have not been evaluated or approved by the U.S. Food and Drug Administration (FDA).</li>
              <li>Products are not intended to diagnose, treat, cure, or prevent any illness or condition.</li>
              <li>Products are not considered dietary supplements, drugs, food additives, cosmetic ingredients, or therapeutic compounds.</li>
            </ul>
            <p className="mt-2">
              Any reference to potential properties of compounds is strictly informational and does not imply suitability for human use.
            </p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">4. User Responsibility and Assumption of Risk</h4>
            <p>By purchasing or using products from Pure Aminos, User acknowledges and agrees that:</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>They are knowledgeable and qualified to handle research-grade materials.</li>
              <li>They will use all products only for lawful laboratory research applications.</li>
              <li>They fully understand the risks and hazards associated with handling chemical and biological materials.</li>
              <li>They assume all liability and responsibility for misuse, mishandling, or improper storage of products.</li>
            </ul>
            <p className="mt-2">Pure Aminos is not liable for any damages, loss, injury, or legal consequences resulting from:</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Failure to follow safe handling protocols</li>
              <li>Misuse of products</li>
              <li>Violation of this Disclaimer or the Terms & Conditions</li>
              <li>Use of products in a manner inconsistent with their intended purpose</li>
            </ul>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">5. Accuracy of Information</h4>
            <p>Pure Aminos makes reasonable efforts to provide accurate and up-to-date information on the Website. However:</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>We make no guarantee regarding accuracy, completeness, reliability, or suitability of any information.</li>
              <li>Product descriptions, data sheets, and scientific references are for research context only.</li>
              <li>Information may be changed, updated, or modified at any time without notice.</li>
            </ul>
            <p className="mt-2">
              User agrees that Pure Aminos shall not be liable for any errors, omissions, or reliance on Website content.
            </p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">6. No Guarantee of Results</h4>
            <p>
              Any scientific data, performance information, or experimental references provided are illustrative only, not guarantees of efficacy or outcome, and not assurances that results can be recreated under different conditions. Pure Aminos does not guarantee performance, purity, or suitability of products beyond what is disclosed.
            </p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">7. Third-Party Links and External Resources</h4>
            <p>
              The Website may contain links to third-party websites or resources. Pure Aminos does not endorse or control third-party content, is not responsible for accuracy or privacy practices of external sites, and is not liable for damages arising from use of third-party services.
            </p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">8. Legal Compliance</h4>
            <p>User agrees that:</p>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>They are solely responsible for understanding applicable laws and regulations in their jurisdiction.</li>
              <li>Products purchased will only be used in compliance with federal, state, and local regulations.</li>
              <li>Pure Aminos makes no representation regarding the legality of possessing or using products outside the United States.</li>
            </ul>
            <p className="mt-2">
              Any violation of law resulting from User&rsquo;s purchase or use of products is the User&rsquo;s sole responsibility.
            </p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">9. Limitation of Liability</h4>
            <p>
              To the fullest extent permitted by law, Pure Aminos and its affiliates shall not be liable for any direct or indirect damages, injuries, losses, or expenses arising from use or misuse of products, including improper handling, unauthorized use, violation of research protocols, or failure to follow safety guidelines.
            </p>
          </section>

          <section>
            <h4 className="mb-1 font-semibold text-foreground">10. Consent</h4>
            <p>
              By using the Website or purchasing products from Pure Aminos, You acknowledge and agree that You have read, understood, and accepted this Disclaimer; that You are legally permitted to purchase and use research chemicals; and that You assume all risks associated with handling such materials. If You do not agree with this Disclaimer, you must not use the Website or purchase products.
            </p>
          </section>
        </div>
      </div>

      <label htmlFor="disclaimer-checkbox" className="group flex cursor-pointer items-start gap-3">
        <Checkbox
          id="disclaimer-checkbox"
          checked={disclaimerAccepted}
          onCheckedChange={(checked) => setDisclaimerAccepted(checked === true)}
          className="mt-0.5"
        />
        <span className="text-sm leading-tight text-foreground group-hover:text-foreground/80">
          I have read and agree to this Disclaimer.
        </span>
      </label>
    </div>
  )
}
