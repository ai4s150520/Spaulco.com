import { Receipt } from 'lucide-react'
import ServiceDetail from '@/components/ServiceDetail'

export default function GSTServicesPage() {
  return (
    <ServiceDetail
      title="GST Services"
      description="Complete GST registration, filing, and compliance services for businesses of all sizes"
      icon={Receipt}
      features={[
        'GST Registration (New & Migration)',
        'Monthly/Quarterly GST Returns Filing',
        'Annual GST Return Filing',
        'GST Refund Processing',
        'GST Audit & Assessment Support',
        'Input Tax Credit Reconciliation',
        'GST Notice Handling',
        'E-Way Bill Generation',
      ]}
      pricing={[
        {
          plan: 'Basic',
          price: '₹2,999/month',
          features: [
            'GST Registration',
            'Monthly Return Filing (GSTR-1 & GSTR-3B)',
            'Email Support',
            'Up to 50 invoices/month',
          ],
        },
        {
          plan: 'Professional',
          price: '₹5,999/month',
          features: [
            'Everything in Basic',
            'Quarterly Return Filing',
            'ITC Reconciliation',
            'Priority Support',
            'Up to 200 invoices/month',
            'GST Audit Support',
          ],
        },
        {
          plan: 'Enterprise',
          price: 'Custom',
          features: [
            'Everything in Professional',
            'Dedicated Account Manager',
            'Unlimited Invoices',
            'On-site Consultation',
            'Annual Return Filing',
            'Notice Handling',
          ],
        },
      ]}
      process={[
        {
          step: 'Document Collection',
          description: 'We collect all necessary documents including PAN, Aadhaar, business proof, and bank details.',
        },
        {
          step: 'GST Registration',
          description: 'Complete GST registration process with GSTIN generation within 3-7 working days.',
        },
        {
          step: 'Monthly Compliance',
          description: 'Regular filing of GSTR-1, GSTR-3B, and other applicable returns before deadlines.',
        },
        {
          step: 'Reconciliation',
          description: 'Monthly ITC reconciliation and mismatch resolution to avoid penalties.',
        },
        {
          step: 'Annual Filing',
          description: 'Annual return filing (GSTR-9) and audit support (GSTR-9C) if applicable.',
        },
      ]}
      documents={[
        'PAN Card of Business/Proprietor',
        'Aadhaar Card',
        'Business Registration Certificate',
        'Address Proof (Electricity Bill/Rent Agreement)',
        'Bank Account Statement',
        'Photographs',
        'Digital Signature (for Companies)',
      ]}
      timeline="3-7 Days"
      faqs={[
        {
          question: 'Who needs GST registration?',
          answer: 'Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states) must register for GST. E-commerce sellers and inter-state suppliers need registration regardless of turnover.',
        },
        {
          question: 'What are the GST return filing deadlines?',
          answer: 'GSTR-1 is due by 11th of next month, GSTR-3B by 20th of next month. Quarterly filers have different deadlines. We ensure timely filing to avoid late fees.',
        },
        {
          question: 'Can I claim Input Tax Credit (ITC)?',
          answer: 'Yes, you can claim ITC on business purchases if the supplier has filed their returns and the invoice details match. We help with ITC reconciliation and claims.',
        },
        {
          question: 'What happens if I miss GST filing deadline?',
          answer: 'Late filing attracts penalties of ₹50/day (₹20/day for nil returns) per act (CGST + SGST). We help avoid penalties through timely compliance.',
        },
      ]}
    />
  )
}
