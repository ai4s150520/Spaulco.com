import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogType?: string
}

export default function SEO({ title, description, keywords, canonical, ogType = 'website' }: SEOProps) {
  const baseUrl = 'https://subratapaul.com'
  const fullTitle = `${title} | Subrata Paul & Co - Expert CA Firm Kolkata`
  const defaultKeywords = 'chartered accountants kolkata, CA firm kolkata, financial advisory services, tax planning, virtual CFO, business advisory, financial controllership, internal audit, risk advisory'
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonical && <meta property="og:url" content={`${baseUrl}${canonical}`} />}
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
    </Helmet>
  )
}
