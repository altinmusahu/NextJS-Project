import type { Metadata } from "next"
import Link from "next/link"
import PublicLayout from "@/app/components/landing/PublicLayout"

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Kinderhub Refund Policy — your right of withdrawal under EU consumer law, how to cancel, and how refunds are processed.",
  alternates: { canonical: "https://kinderhub.app/refund-policy" },
  robots: { index: true, follow: false },
}

const LAST_UPDATED = "23 August 2026"

export default function RefundPolicyPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-[#F3EADA] px-4 sm:px-8 py-14 sm:py-20 text-center border-b border-[#EBDFC9]">
        <span
          className="inline-block text-xs tracking-widest text-[#D2592F] uppercase mb-4"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          Legal
        </span>
        <h1
          className="text-4xl sm:text-5xl text-[#2A2018] leading-tight"
          style={{ fontFamily: "var(--font-instrument-serif)" }}
        >
          Refund Policy
        </h1>
        <p
          className="text-[#5B4D3F] mt-3 text-sm"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          Last updated: {LAST_UPDATED}
        </p>
      </section>

      {/* Body */}
      <section className="bg-[#F3EADA] py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto prose-kinderhub space-y-10 text-[#5B4D3F] text-sm leading-relaxed">

          <div>
            <h2 className="text-xl text-[#2A2018] mb-3" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              1. Your right of withdrawal
            </h2>
            <p>
              If you are a consumer based in the European Union, you have the right to withdraw from your
              subscription purchase within <strong className="text-[#2A2018]">14 calendar days</strong> of the
              date of purchase, without giving any reason, in accordance with EU Directive 2011/83/EU on
              consumer rights.
            </p>
            <p className="mt-3">
              To exercise this right, contact us at{" "}
              <a href="mailto:billing@kinderhub.app" className="text-[#D2592F] hover:underline">
                billing@kinderhub.app
              </a>{" "}
              with your organisation name and the email address used at signup, before the 14-day period ends.
              We will confirm receipt of your withdrawal request without delay.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#2A2018] mb-3" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              2. Early access to the service
            </h2>
            <p>
              Kinderhub is a digital service that is provisioned immediately after purchase. If you ask us to
              begin providing the service during the 14-day withdrawal period — for example by logging in and
              using your account — you acknowledge that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>You expressly request that performance begin before the withdrawal period ends.</li>
              <li>
                If you later withdraw after service has begun, we may deduct an amount proportionate to what was
                supplied up until you told us you wished to withdraw, compared to the full scope of the
                subscription.
              </li>
              <li>
                If the service is fully performed within the 14 days with your prior express consent and
                acknowledgement that you lose the right of withdrawal once performance is complete, the right of
                withdrawal no longer applies.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-[#2A2018] mb-3" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              3. How refunds are issued
            </h2>
            <p>
              Approved refunds are issued to the original payment method used at checkout, processed through our
              payment provider, 2Checkout (Verifone). Refunds are typically returned within{" "}
              <strong className="text-[#2A2018]">5–10 business days</strong>, though your bank or card issuer may
              take longer to reflect the transaction.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#2A2018] mb-3" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              4. After the withdrawal period
            </h2>
            <p>
              Outside of the 14-day withdrawal period described above, subscription fees are non-refundable for
              the remainder of the current billing term. You can cancel auto-renewal at any time from{" "}
              <span className="text-[#2A2018]">Dashboard → Settings → Billing</span> to prevent future charges —
              your existing access continues until the end of the period you already paid for.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#2A2018] mb-3" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              5. Cancellations due to our error
            </h2>
            <p>
              If you were charged incorrectly — for example a duplicate charge, a billing error, or a service
              outage that materially prevented you from using Kinderhub — contact us and we will issue a full or
              partial refund regardless of the 14-day window, at our discretion and in line with applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-[#2A2018] mb-3" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              6. How to request a refund or cancellation
            </h2>
            <p>Email us with your organisation name, the email used at signup, and your order/transaction reference:</p>
            <div className="mt-3 bg-[#EBDFC9] rounded-2xl p-5">
              <p>
                <span className="font-semibold text-[#2A2018]">Billing support:</span>{" "}
                <a href="mailto:billing@kinderhub.app" className="text-[#D2592F] hover:underline">
                  billing@kinderhub.app
                </a>
              </p>
            </div>
            <p className="mt-3">
              You can also reach us via the{" "}
              <Link href="/contact" className="text-[#D2592F] hover:underline">contact form</Link>. We aim to
              respond to all billing enquiries within one business day.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EBDFC9]">
            <p>
              This Refund Policy should be read together with our{" "}
              <Link href="/privacy-policy" className="text-[#D2592F] hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
