import { Calculator, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedSection from '@/components/AnimatedSection'
import { useState } from 'react'

type CalculationType = 'exclusive' | 'inclusive'

export default function GSTCalculator() {
  const [amount, setAmount] = useState<string>('')
  const [gstRate, setGstRate] = useState<number>(18)
  const [calculationType, setCalculationType] = useState<CalculationType>('exclusive')
  const [result, setResult] = useState<{
    originalAmount: number
    gstAmount: number
    totalAmount: number
    cgst: number
    sgst: number
  } | null>(null)

  const calculateGST = () => {
    const baseAmount = parseFloat(amount)
    if (isNaN(baseAmount) || baseAmount <= 0) {
      alert('Please enter a valid amount')
      return
    }

    let originalAmount: number
    let gstAmount: number
    let totalAmount: number

    if (calculationType === 'exclusive') {
      // GST Exclusive: Add GST to the amount
      originalAmount = baseAmount
      gstAmount = (baseAmount * gstRate) / 100
      totalAmount = baseAmount + gstAmount
    } else {
      // GST Inclusive: Extract GST from the amount
      totalAmount = baseAmount
      originalAmount = (baseAmount * 100) / (100 + gstRate)
      gstAmount = baseAmount - originalAmount
    }

    // Calculate CGST and SGST (split equally)
    const cgst = gstAmount / 2
    const sgst = gstAmount / 2

    setResult({
      originalAmount: Math.round(originalAmount * 100) / 100,
      gstAmount: Math.round(gstAmount * 100) / 100,
      totalAmount: Math.round(totalAmount * 100) / 100,
      cgst: Math.round(cgst * 100) / 100,
      sgst: Math.round(sgst * 100) / 100,
    })
  }

  const resetCalculator = () => {
    setAmount('')
    setGstRate(18)
    setCalculationType('exclusive')
    setResult(null)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(value)
  }

  return (
    <section id="gst-calculator" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              GST <span className="text-primary">Calculator</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Calculate GST accurately with our free online calculator. Get instant results for GST inclusive and exclusive amounts.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <AnimatedSection animation="fade-right" delay={100}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    Calculate GST
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Calculation Type */}
                  <div>
                    <label className="block text-sm font-medium mb-3">Calculation Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setCalculationType('exclusive')}
                        className={`py-3 px-4 rounded-lg border-2 transition-all ${
                          calculationType === 'exclusive'
                            ? 'border-primary bg-primary/10 text-primary font-semibold'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        GST Exclusive
                      </button>
                      <button
                        onClick={() => setCalculationType('inclusive')}
                        className={`py-3 px-4 rounded-lg border-2 transition-all ${
                          calculationType === 'inclusive'
                            ? 'border-primary bg-primary/10 text-primary font-semibold'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        GST Inclusive
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {calculationType === 'exclusive'
                        ? 'Add GST to the amount'
                        : 'Extract GST from the amount'}
                    </p>
                  </div>

                  {/* Amount Input */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {calculationType === 'exclusive' ? 'Amount (Excluding GST)' : 'Amount (Including GST)'}
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full pl-8 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* GST Rate */}
                  <div>
                    <label className="block text-sm font-medium mb-2">GST Rate (%)</label>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {[5, 12, 18, 28].map((rate) => (
                        <button
                          key={rate}
                          onClick={() => setGstRate(rate)}
                          className={`py-2 rounded-lg border-2 transition-all ${
                            gstRate === rate
                              ? 'border-primary bg-primary text-primary-foreground font-semibold'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      value={gstRate}
                      onChange={(e) => setGstRate(parseFloat(e.target.value) || 0)}
                      placeholder="Custom rate"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button onClick={calculateGST} className="flex-1" size="lg">
                      Calculate
                    </Button>
                    <Button onClick={resetCalculator} variant="outline" size="lg">
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Results */}
            <AnimatedSection animation="fade-left" delay={200}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Calculation Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {result ? (
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-accent">
                        <div className="text-sm text-muted-foreground mb-1">
                          {calculationType === 'exclusive' ? 'Original Amount' : 'Amount (Excluding GST)'}
                        </div>
                        <div className="text-2xl font-bold">{formatCurrency(result.originalAmount)}</div>
                      </div>

                      <div className="space-y-3 p-4 rounded-lg border border-border">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">GST @ {gstRate}%</span>
                          <span className="font-semibold">{formatCurrency(result.gstAmount)}</span>
                        </div>
                        <div className="flex justify-between items-center pl-4 border-l-2 border-primary/30">
                          <span className="text-xs text-muted-foreground">CGST ({gstRate / 2}%)</span>
                          <span className="text-sm">{formatCurrency(result.cgst)}</span>
                        </div>
                        <div className="flex justify-between items-center pl-4 border-l-2 border-primary/30">
                          <span className="text-xs text-muted-foreground">SGST ({gstRate / 2}%)</span>
                          <span className="text-sm">{formatCurrency(result.sgst)}</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary">
                        <div className="text-sm text-primary mb-1">Total Amount (Including GST)</div>
                        <div className="text-3xl font-bold text-primary">{formatCurrency(result.totalAmount)}</div>
                      </div>

                      <div className="p-3 rounded-lg bg-muted text-xs text-muted-foreground">
                        <strong>Note:</strong> CGST and SGST are applicable for intra-state transactions. 
                        For inter-state transactions, IGST ({gstRate}%) would apply instead.
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <Calculator className="w-16 h-16 text-muted-foreground/30 mb-4" />
                      <p className="text-muted-foreground">
                        Enter amount and click Calculate to see results
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Info Cards */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2 text-sm">GST Rates in India</h4>
                <p className="text-xs text-muted-foreground">5%, 12%, 18%, and 28% are standard GST rates applicable on different goods and services.</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2 text-sm">CGST + SGST</h4>
                <p className="text-xs text-muted-foreground">For intra-state sales, GST is split equally between Central GST and State GST.</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-2 text-sm">Need Help?</h4>
                <p className="text-xs text-muted-foreground">Contact our CA experts for GST registration, filing, and compliance assistance.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
