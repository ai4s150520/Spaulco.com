import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasAgreed = localStorage.getItem('disclaimer-agreed')
    if (!hasAgreed) {
      setIsOpen(true)
    }
  }, [])

  const handleAgree = () => {
    localStorage.setItem('disclaimer-agreed', 'true')
    setIsOpen(false)
  }

  const handleDisagree = () => {
    window.location.href = 'about:blank'
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-background border-2 border-primary rounded-lg shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-primary text-primary-foreground p-6 rounded-t-lg">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center">Disclaimer</h2>
          <p className="text-center text-sm mt-2">To Whom So It May Concern</p>
        </div>

        <div className="p-6 md:p-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            In accordance with the Chartered Accountants Act, 1949 and the guidelines issued by the Institute of Chartered Accountants of India (ICAI), this website is intended solely to provide general information about <span className="font-semibold text-foreground">Subrata Paul & Co</span> and its professional profile, and areas of service.
          </p>

          <p>
            This website is not intended for the purpose of advertisement, solicitation, invitation to offer, or inducement of any nature, whatsoever. The content herein is purely for informational purposes and should not be interpreted as professional advice or assurance.
          </p>

          <p>
            By proceeding and clicking on <span className="font-semibold text-foreground">"I AGREE"</span>, the visitor acknowledges and confirms that they are accessing this website voluntarily, solely for their own information and that there has been no form of solicitation, advertisement or inducement by the Firm or any of its members.
          </p>

          <p>
            All intellectual property, including content, design, and material displayed on this website, remains the exclusive property of <span className="font-semibold text-foreground">Subrata Paul & Co</span>.
          </p>
        </div>

        <div className="sticky bottom-0 bg-accent/50 backdrop-blur-sm p-6 rounded-b-lg border-t border-border">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleAgree}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            >
              I AGREE
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDisagree}
              className="border-2 font-semibold px-8"
            >
              I DISAGREE
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
