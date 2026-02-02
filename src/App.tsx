// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import TeamPage from './pages/TeamPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ContactPage from './pages/ContactPage'
import BookingPage from './pages/BookingPage'
import NotFound from './pages/NotFound'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import LoadingSpinner from './components/LoadingSpinner'
import DisclaimerModal from './components/DisclaimerModal'
import { Toaster } from './components/ui/toaster'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <DisclaimerModal />
        <LoadingSpinner />
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <Header />
          <main className="flex-grow overflow-x-hidden pt-[120px] sm:pt-[110px]">{/* Added padding-top to prevent overlap */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:postSlug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/book-appointment" element={<BookingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
          <Toaster />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App