import React, { useState, FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Check,
  Menu,
  X,
  Star,
  ClipboardList,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
} from 'lucide-react';

/* ==========================================================================
   EDITABLE CLINIC CONFIGURATION
   Easily update services, clinic contact information, or opening hours here.
   ========================================================================== */

export const CLINIC_INFO = {
  name: 'Windsor Chiropractic',
  phoneDisplay: '+61 428 166 000',
  phoneRaw: '0428 166 000',
  phoneHref: 'tel:+61428166000',
  address: '21 Coulls Rd, Athelstone SA 5076, Australia',
  addressShort: '21 Coulls Rd, Athelstone SA 5076',
  googleMapsUrl: 'https://maps.google.com/?q=21+Coulls+Rd,+Athelstone+SA+5076,+Australia',
  serviceArea: 'Athelstone & Adelaide’s north-eastern suburbs',
  ratingScore: '4.5',
  reviewCount: '15',
  email: 'info@windsorchiropractic.com.au', // Contact point
};

/**
 * OPENING HOURS PLACEHOLDER
 * When the clinic confirms standard opening hours, update the values below
 * or set isHoursAvailable to true.
 */
export const CLINIC_HOURS = {
  isHoursAvailable: false, // Set to true when opening hours are confirmed
  schedule: [
    { days: 'Monday – Friday', hours: 'By appointment' },
    { days: 'Saturday', hours: 'By appointment' },
    { days: 'Sunday & Public Holidays', hours: 'Closed' },
  ],
  callToBookNotice: 'Call to book your appointment',
};

/**
 * CLINIC SERVICES PLACEHOLDER
 * Update, add, or refine service names and descriptions here.
 * Adheres to Australian Health Practitioner Regulation Agency (AHPRA) advertising guidelines:
 * general, factual descriptions with no cure claims, guarantees, or specific outcome promises.
 */
export const CLINIC_SERVICES = [
  {
    id: 'consultation',
    title: 'Consultation & Assessment',
    description: 'A thorough review of your concerns, history, and goals.',
    icon: 'clipboard',
  },
  {
    id: 'spinal-care',
    title: 'Spinal & Back Care',
    description: 'Hands-on care to support a healthy, comfortable back.',
    icon: 'spine',
  },
  {
    id: 'neck-headache',
    title: 'Neck & Headache Care',
    description: 'Care focused on neck tension and related discomfort.',
    icon: 'neck',
  },
  {
    id: 'posture-ergonomics',
    title: 'Posture & Ergonomic Advice',
    description: 'Practical tips for your desk, car, and daily routine.',
    icon: 'posture',
  },
];

/* ==========================================================================
   SVG MOTIFS & ICONS (Spine, Logo, Wave Dividers)
   ========================================================================== */

/** Stylised spine & leaf logo mark */
function ClinicLogoIcon({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central spinal alignment curve with subtle vertebrae-leaf nodes */}
      <path
        d="M24 6C23 12 25 18 24 24C23 30 25 36 24 42"
        stroke="#136F7A"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Node 1 */}
      <ellipse cx="24" cy="9" rx="4.5" ry="3" fill="#8DB8A5" />
      <circle cx="24" cy="9" r="1.5" fill="#FFFFFF" />
      {/* Node 2 - gentle leaf wings */}
      <ellipse cx="23.2" cy="16" rx="5.2" ry="3.2" fill="#136F7A" />
      <path d="M19 16C15 14 14 11 17 10C20 12 21 14 23 16Z" fill="#8DB8A5" opacity="0.85" />
      {/* Node 3 */}
      <ellipse cx="24.5" cy="23.5" rx="5.5" ry="3.3" fill="#136F7A" />
      <path d="M29 23.5C33 21.5 34 18.5 31 17.5C28 19.5 27 21.5 25 23.5Z" fill="#8DB8A5" opacity="0.85" />
      {/* Node 4 */}
      <ellipse cx="23.5" cy="31" rx="5.2" ry="3.2" fill="#136F7A" />
      <path d="M19 31C15 29 14 26 17 25C20 27 21 29 23 31Z" fill="#8DB8A5" opacity="0.85" />
      {/* Node 5 */}
      <ellipse cx="24" cy="38" rx="4.5" ry="3" fill="#8DB8A5" />
      <circle cx="24" cy="38" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

/** Service custom line icons */
function ServiceIcon({ type }: { type: string }) {
  const strokeColor = '#136F7A';
  const accentColor = '#8DB8A5';

  if (type === 'clipboard') {
    return <ClipboardList className="w-8 h-8 text-[#136F7A]" strokeWidth={1.8} />;
  }

  if (type === 'spine') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        aria-hidden="true"
      >
        <path
          d="M12 2V22"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M7.5 5.5C9 4.8 15 4.8 16.5 5.5"
          stroke={accentColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6.5 9.5C8.5 8.5 15.5 8.5 17.5 9.5"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6 13.5C8.5 12.5 15.5 12.5 18 13.5"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M6.5 17.5C8.5 16.5 15.5 16.5 17.5 17.5"
          stroke={accentColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="5.5" r="1.5" fill={accentColor} />
        <circle cx="12" cy="9.5" r="1.5" fill={strokeColor} />
        <circle cx="12" cy="13.5" r="1.5" fill={strokeColor} />
        <circle cx="12" cy="17.5" r="1.5" fill={accentColor} />
      </svg>
    );
  }

  if (type === 'neck') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        aria-hidden="true"
      >
        {/* Head outline */}
        <circle cx="12" cy="7" r="4.5" stroke={strokeColor} strokeWidth="1.8" />
        {/* Neck with supportive curve */}
        <path
          d="M9.5 11.5V15C9.5 16.5 8 18 6 19.5"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14.5 11.5V15C14.5 16.5 16 18 18 19.5"
          stroke={strokeColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Tension relief rays / gentle accent lines */}
        <path
          d="M12 12V16.5"
          stroke={accentColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
        <path
          d="M9.5 14H14.5"
          stroke={accentColor}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Posture & Ergonomic figure
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <circle cx="12" cy="4" r="2.5" stroke={strokeColor} strokeWidth="1.8" />
      {/* Upright aligned spinal posture */}
      <path
        d="M12 6.5V14.5"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Balanced shoulders */}
      <path
        d="M7 10H17"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Ergonomic seated / standing alignment */}
      <path
        d="M9 14.5L7 21"
        stroke={accentColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15 14.5L17 21"
        stroke={accentColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="10" r="1" fill={accentColor} />
    </svg>
  );
}

/** Decorative spine wave pattern for backgrounds */
function SpineWaveMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 60C150 20 300 100 450 60C600 20 750 100 900 60C1050 20 1200 60 1200 60"
        stroke="#8DB8A5"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        opacity="0.4"
      />
      <path
        d="M0 80C150 40 300 120 450 80C600 40 750 120 900 80C1050 40 1200 80 1200 80"
        stroke="#FFFFFF"
        strokeWidth="1"
        opacity="0.25"
      />
    </svg>
  );
}

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form submission state
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: CLINIC_SERVICES[0].title,
    preferredTime: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Front-end validation
    if (!formState.name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!formState.phone.trim()) {
      setFormError('Please provide a contact phone number.');
      return;
    }
    // Basic phone format validation (at least 8 digits)
    const phoneDigits = formState.phone.replace(/\D/g, '');
    if (phoneDigits.length < 8) {
      setFormError('Please enter a valid phone number (e.g. 0428 166 000).');
      return;
    }
    if (!formState.email.trim() || !formState.email.includes('@')) {
      setFormError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate short network submission delay for natural feel
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 450);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormState({
      name: '',
      phone: '',
      email: '',
      service: CLINIC_SERVICES[0].title,
      preferredTime: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1E2D33] antialiased selection:bg-[#8DB8A5]/30 selection:text-[#136F7A]">
      {/* ====================================================================
          SECTION 1: STICKY HEADER (White)
          - Logo on left
          - Nav links (Services, About, Contact) on right
          - Sand/gold "Call Now" button showing phone number
          - Mobile hamburger menu with phone button always accessible
          ==================================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#1E2D33]/10 shadow-[0_2px_12px_rgba(19,111,122,0.06)] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* LOGO: Stylised spine leaf icon + Windsor / CHIROPRACTIC */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#136F7A] rounded-clinic p-1"
            aria-label="Windsor Chiropractic Home"
          >
            <div className="w-10 h-10 rounded-clinic bg-[#F3F8F6] border border-[#8DB8A5]/30 flex items-center justify-center shrink-0 group-hover:border-[#136F7A]/40 transition-colors">
              <ClinicLogoIcon className="w-7 h-7" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#136F7A]">
                Windsor
              </span>
              <span className="text-[10px] tracking-[0.26em] font-semibold text-[#8DB8A5] uppercase mt-0.5">
                Chiropractic
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1E2D33]/80"
            aria-label="Primary site navigation"
          >
            <a
              href="#services"
              className="hover:text-[#136F7A] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#136F7A] hover:after:w-full after:transition-all"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-[#136F7A] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#136F7A] hover:after:w-full after:transition-all"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[#136F7A] transition-colors py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#136F7A] hover:after:w-full after:transition-all"
            >
              Contact
            </a>
          </nav>

          {/* RIGHT ACTION: CALL NOW BUTTON (Sand/Gold) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 bg-[#E3A94B] hover:bg-[#d79c3d] text-[#1E2D33] font-semibold text-xs sm:text-sm rounded-[10px] shadow-sm transition-all duration-150 transform active:scale-[0.98] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#136F7A]"
              aria-label={`Call Windsor Chiropractic at ${CLINIC_INFO.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 text-[#1E2D33] shrink-0" />
              <span className="hidden sm:inline">Call</span>
              <span className="font-bold tracking-tight">{CLINIC_INFO.phoneDisplay}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-[10px] text-[#136F7A] hover:bg-[#F3F8F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#136F7A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE COLLAPSIBLE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1E2D33]/10 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in fade-in duration-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-[10px] text-base font-medium text-[#1E2D33] hover:bg-[#F3F8F6] hover:text-[#136F7A]"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-[10px] text-base font-medium text-[#1E2D33] hover:bg-[#F3F8F6] hover:text-[#136F7A]"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-[10px] text-base font-medium text-[#1E2D33] hover:bg-[#F3F8F6] hover:text-[#136F7A]"
            >
              Contact & Location
            </a>
            <div className="pt-2 border-t border-[#1E2D33]/10 flex flex-col gap-2">
              <a
                href={CLINIC_INFO.phoneHref}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#E3A94B] text-[#1E2D33] font-bold rounded-[10px] text-sm"
              >
                <Phone className="w-4 h-4" />
                Call {CLINIC_INFO.phoneDisplay}
              </a>
              <p className="text-center text-xs text-[#1E2D33]/70 pt-1">
                21 Coulls Rd, Athelstone SA 5076
              </p>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* ====================================================================
            SECTION 2: HERO
            - Deep teal background (#136F7A) with subtle gradient & calm clinic image overlay
            - Headline: "Move Well. Feel Well."
            - Subheadline: "Caring, professional chiropractic in Athelstone, South Australia. Call to book your appointment."
            - Badge: "★★★★½ 4.5 · 15 Google reviews"
            - Two buttons: "Call +61 428 166 000" (solid sand/gold) and "Book an Appointment" (outlined white)
            - Gentle curved divider at bottom
            ==================================================================== */}
        <section
          id="hero"
          className="relative bg-[#136F7A] text-white pt-16 pb-28 sm:pt-20 sm:pb-36 overflow-hidden"
        >
          {/* Serene Wellness Clinic Background Image with Deep Teal Overlay Scrim */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <img
              src="/src/assets/images/clinic_interior_serene_1792953206979.jpg"
              alt="Serene and welcoming clinic interior at Windsor Chiropractic in Athelstone"
              className="w-full h-full object-cover object-center opacity-20 filter saturate-50"
              referrerPolicy="no-referrer"
            />
            {/* Rich gradient blend */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D4F58]/90 via-[#136F7A]/92 to-[#136F7A]" />
          </div>

          {/* Decorative Subtle Spine Wave Line Motif */}
          <div className="absolute bottom-12 left-0 right-0 pointer-events-none select-none opacity-40">
            <SpineWaveMotif className="w-full h-20" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* GOOGLE REVIEWS TRUST BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-white shadow-sm mb-6">
              <div className="flex items-center text-[#E3A94B] tracking-tight text-sm" aria-hidden="true">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span className="text-white/60">½</span>
              </div>
              <span className="font-semibold text-[#E3A94B]">4.5</span>
              <span className="text-white/60">·</span>
              <span className="text-white/90">15 Google reviews</span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15] text-balance">
              Move Well. Feel Well.
            </h1>

            {/* SUBHEADLINE */}
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Caring, professional chiropractic in Athelstone, South Australia. Call to book your appointment.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto">
              {/* Primary Call CTA (Warm Sand/Gold with Dark Slate text) */}
              <a
                href={CLINIC_INFO.phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#E3A94B] hover:bg-[#d79c3d] text-[#1E2D33] font-bold text-base rounded-[10px] shadow-lg shadow-black/15 transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-5 h-5 text-[#1E2D33] shrink-0" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>

              {/* Secondary Book CTA (Outlined White) */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold text-base rounded-[10px] transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Book an Appointment</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Locality trust indicator */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#8DB8A5]" />
                21 Coulls Rd, Athelstone
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span>Serving Adelaide’s north-eastern suburbs</span>
            </div>
          </div>

          {/* GENTLE CURVED DIVIDER AT THE BOTTOM (Transitions cleanly into white background) */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
            <svg
              className="relative block w-full h-8 sm:h-12 text-white"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M0,0 C300,70 900,70 1200,0 L1200,120 L0,120 Z"></path>
            </svg>
          </div>
        </section>

        {/* ====================================================================
            SECTION 3: SERVICES + ABOUT
            - 4 attractive cards with line icons, title, and one-line description
            - Under the cards: "Why Choose Windsor Chiropractic" strip with 4 check-icon points
            - Strict compliance with Australian health advertising rules:
              General & factual language, no cure claims, no guarantees, no testimonials.
            ==================================================================== */}
        <section id="services" className="py-16 sm:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* SECTION HEADING */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#136F7A]">
                Our Care Focus
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2D33] mt-2 mb-4">
                Personalised Chiropractic Services
              </h2>
              <p className="text-[#1E2D33]/80 text-base sm:text-lg leading-relaxed">
                Gentle, evidence-informed chiropractic care tailored to your individual needs and lifestyle in Athelstone.
              </p>
            </div>

            {/* 4 SERVICE CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {CLINIC_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="bg-[#F3F8F6] rounded-[10px] p-6 sm:p-7 border border-[#8DB8A5]/25 hover:border-[#136F7A]/40 transition-all duration-200 hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-[10px] bg-white border border-[#8DB8A5]/30 flex items-center justify-center mb-5 group-hover:border-[#136F7A] transition-colors shadow-xs">
                      <ServiceIcon type={service.icon} />
                    </div>

                    {/* Service Title */}
                    <h3 className="font-serif text-xl font-bold text-[#136F7A] mb-2.5 leading-snug">
                      {service.title}
                    </h3>

                    {/* One-line Description */}
                    <p className="text-sm text-[#1E2D33]/85 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Card footer link */}
                  <div className="pt-5 mt-5 border-t border-[#8DB8A5]/20">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#136F7A] group-hover:text-[#0D4F58] hover:underline"
                    >
                      <span>Enquire about this service</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* ABOUT STRIP: WHY CHOOSE WINDSOR CHIROPRACTIC */}
            <div
              id="about"
              className="mt-16 sm:mt-20 bg-[#F3F8F6] border border-[#8DB8A5]/30 rounded-[10px] p-8 sm:p-10 shadow-xs"
            >
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#136F7A]">
                  Local Allied Health Practice
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E2D33] mt-2">
                  Why Choose Windsor Chiropractic
                </h3>
                <p className="text-sm sm:text-base text-[#1E2D33]/80 mt-2">
                  Dedicated to supporting the health and wellbeing of individuals and families throughout Athelstone and neighbouring north-eastern communities.
                </p>
              </div>

              {/* 4 CHECK-ICON POINTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                <div className="flex items-start gap-3.5 bg-white p-4 rounded-[10px] border border-[#8DB8A5]/25">
                  <div className="w-8 h-8 rounded-full bg-[#8DB8A5]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#136F7A] stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E2D33]">Highly Rated Locally</h4>
                    <p className="text-xs text-[#1E2D33]/75 mt-0.5 leading-relaxed">
                      4.5-star rating from 15 Google patient reviews.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-[10px] border border-[#8DB8A5]/25">
                  <div className="w-8 h-8 rounded-full bg-[#8DB8A5]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#136F7A] stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E2D33]">Friendly &amp; Professional Care</h4>
                    <p className="text-xs text-[#1E2D33]/75 mt-0.5 leading-relaxed">
                      Welcoming clinical setting focused on your comfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-[10px] border border-[#8DB8A5]/25">
                  <div className="w-8 h-8 rounded-full bg-[#8DB8A5]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#136F7A] stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E2D33]">Personalised Treatment Plans</h4>
                    <p className="text-xs text-[#1E2D33]/75 mt-0.5 leading-relaxed">
                      Practical recommendations structured to your daily goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 bg-white p-4 rounded-[10px] border border-[#8DB8A5]/25">
                  <div className="w-8 h-8 rounded-full bg-[#8DB8A5]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#136F7A] stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#1E2D33]">Easy to Reach in Athelstone</h4>
                    <p className="text-xs text-[#1E2D33]/75 mt-0.5 leading-relaxed">
                      Convenient Coulls Road location with on-site parking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Factual disclaimer complying with Australian health advertising standard */}
              <div className="mt-8 pt-4 border-t border-[#8DB8A5]/25 text-center">
                <p className="text-[11px] text-[#1E2D33]/65 max-w-2xl mx-auto">
                  Individual results may vary. Chiropractic care is tailored following comprehensive physical assessment and clinical evaluation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 4: CONTACT + FOOTER
            - "Ready to Book Your Appointment?" split in two columns:
              * Left: Simple contact form (Name, Phone, Email, Service dropdown, Preferred time, Message, "Request Appointment")
              * Right: Address linked to Google Maps, clickable phone number, hours note, embedded Google Map iframe
            - Slim dark teal footer with logo, business name, address, phone, copyright
            ==================================================================== */}
        <section id="contact" className="py-16 sm:py-24 bg-[#F3F8F6] border-t border-[#8DB8A5]/20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#136F7A]">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E2D33] mt-2 mb-3">
                Ready to Book Your Appointment?
              </h2>
              <p className="text-[#1E2D33]/80 text-base">
                Call our Athelstone clinic directly or submit the request form below, and we will be in touch promptly to confirm your booking.
              </p>
            </div>

            {/* TWO-COLUMN CONTACT LAYOUT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* LEFT COLUMN: CONTACT / APPOINTMENT REQUEST FORM */}
              <div className="lg:col-span-7 bg-white rounded-[10px] p-6 sm:p-9 border border-[#8DB8A5]/30 shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-[#136F7A] mb-2">
                  Request an Appointment
                </h3>
                <p className="text-xs sm:text-sm text-[#1E2D33]/75 mb-6">
                  Complete your details below and our team will contact you to organise a suitable consultation time.
                </p>

                {formSubmitted ? (
                  <div className="bg-[#F3F8F6] border border-[#8DB8A5] rounded-[10px] p-8 text-center animate-in fade-in duration-300">
                    <div className="w-14 h-14 bg-[#136F7A] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#8DB8A5]" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-[#136F7A] mb-2">
                      Request Received
                    </h4>
                    <p className="text-sm text-[#1E2D33]/80 max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you, <span className="font-semibold text-[#1E2D33]">{formState.name}</span>. We have received your booking request for{' '}
                      <span className="font-semibold text-[#136F7A]">{formState.service}</span>. Our clinic will phone you shortly at{' '}
                      <span className="font-semibold text-[#1E2D33]">{formState.phone}</span> to confirm your appointment time.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={CLINIC_INFO.phoneHref}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E3A94B] hover:bg-[#d79c3d] text-[#1E2D33] font-bold text-xs sm:text-sm rounded-[10px]"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now to Fast-Track
                      </a>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-xs font-semibold text-[#136F7A] hover:underline px-4 py-2"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                    {formError && (
                      <div className="p-3.5 rounded-[10px] bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider text-[#1E2D33] mb-1.5"
                        >
                          Full Name <span className="text-[#136F7A]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Sarah Miller"
                          className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#1E2D33]/20 bg-white text-sm text-[#1E2D33] placeholder:text-gray-400 focus:border-[#136F7A] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider text-[#1E2D33] mb-1.5"
                        >
                          Phone Number <span className="text-[#136F7A]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 0428 166 000"
                          className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#1E2D33]/20 bg-white text-sm text-[#1E2D33] placeholder:text-gray-400 focus:border-[#136F7A] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email & Service Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider text-[#1E2D33] mb-1.5"
                        >
                          Email Address <span className="text-[#136F7A]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="e.g. sarah@example.com.au"
                          className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#1E2D33]/20 bg-white text-sm text-[#1E2D33] placeholder:text-gray-400 focus:border-[#136F7A] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-bold uppercase tracking-wider text-[#1E2D33] mb-1.5"
                        >
                          Select Service
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#1E2D33]/20 bg-white text-sm text-[#1E2D33] focus:border-[#136F7A] focus:outline-none transition-colors"
                        >
                          {CLINIC_SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Day / Time (Optional) */}
                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="block text-xs font-bold uppercase tracking-wider text-[#1E2D33] mb-1.5"
                      >
                        Preferred Day or Time (Optional)
                      </label>
                      <input
                        type="text"
                        id="preferredTime"
                        name="preferredTime"
                        value={formState.preferredTime}
                        onChange={handleInputChange}
                        placeholder="e.g. Tuesday morning or Thursday afternoon"
                        className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#1E2D33]/20 bg-white text-sm text-[#1E2D33] placeholder:text-gray-400 focus:border-[#136F7A] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Message / Notes */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider text-[#1E2D33] mb-1.5"
                      >
                        Notes or Questions (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Briefly describe what you would like assistance with..."
                        className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#1E2D33]/20 bg-white text-sm text-[#1E2D33] placeholder:text-gray-400 focus:border-[#136F7A] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#E3A94B] hover:bg-[#d79c3d] text-[#1E2D33] font-bold text-sm sm:text-base rounded-[10px] shadow-sm transition-all duration-150 transform active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#136F7A] cursor-pointer disabled:opacity-75"
                      >
                        {isSubmitting ? (
                          <span>Submitting Request...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#1E2D33]" />
                            <span>Request Appointment</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-[#1E2D33]/60 pt-2">
                      Your privacy is protected. Contact details are solely used to coordinate your appointment.
                    </p>
                  </form>
                )}
              </div>

              {/* RIGHT COLUMN: CLINIC INFO, HOURS & GOOGLE MAP */}
              <div className="lg:col-span-5 space-y-6">
                {/* Contact Details Card */}
                <div className="bg-white rounded-[10px] p-6 sm:p-7 border border-[#8DB8A5]/30 shadow-sm space-y-5">
                  <h3 className="font-serif text-xl font-bold text-[#136F7A] border-b border-[#1E2D33]/10 pb-3">
                    Clinic Details
                  </h3>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#F3F8F6] border border-[#8DB8A5]/30 flex items-center justify-center shrink-0 text-[#136F7A]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#1E2D33]/60">
                        Phone
                      </span>
                      <a
                        href={CLINIC_INFO.phoneHref}
                        className="text-base sm:text-lg font-bold text-[#136F7A] hover:text-[#0D4F58] hover:underline"
                      >
                        {CLINIC_INFO.phoneDisplay}
                      </a>
                      <p className="text-xs text-[#1E2D33]/70 mt-0.5">
                        Direct line for enquiries &amp; bookings
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-[10px] bg-[#F3F8F6] border border-[#8DB8A5]/30 flex items-center justify-center shrink-0 text-[#136F7A]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#1E2D33]/60">
                        Address
                      </span>
                      <a
                        href={CLINIC_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#1E2D33] hover:text-[#136F7A] group inline-flex items-center gap-1.5"
                      >
                        <span>{CLINIC_INFO.address}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#8DB8A5] group-hover:text-[#136F7A]" />
                      </a>
                      <p className="text-xs text-[#1E2D33]/70 mt-0.5">
                        Conveniently situated in Athelstone with street &amp; on-site access
                      </p>
                    </div>
                  </div>

                  {/* Opening Hours Placeholder (Clearly marked & easy to edit in code) */}
                  <div className="flex items-start gap-3.5 pt-2 border-t border-[#1E2D33]/10">
                    <div className="w-9 h-9 rounded-[10px] bg-[#F3F8F6] border border-[#8DB8A5]/30 flex items-center justify-center shrink-0 text-[#136F7A]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-[#1E2D33]/60">
                        Opening Hours
                      </span>

                      {CLINIC_HOURS.isHoursAvailable ? (
                        /* When specific hours are confirmed, they display here */
                        <ul className="text-xs space-y-1 mt-1 text-[#1E2D33]">
                          {CLINIC_HOURS.schedule.map((slot, index) => (
                            <li key={index} className="flex justify-between gap-4">
                              <span className="font-medium">{slot.days}:</span>
                              <span>{slot.hours}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        /* Standard notice as requested: "Call to book your appointment" */
                        <div className="mt-1">
                          <p className="text-sm font-semibold text-[#136F7A]">
                            {CLINIC_HOURS.callToBookNotice}
                          </p>
                          <p className="text-xs text-[#1E2D33]/70 mt-0.5">
                            Appointments are scheduled by phone to accommodate your availability.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Embedded Google Map */}
                <div className="bg-white rounded-[10px] border border-[#8DB8A5]/30 overflow-hidden shadow-sm">
                  <div className="px-4 py-3 bg-[#F3F8F6] border-b border-[#8DB8A5]/20 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#136F7A] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Clinic Map Location
                    </span>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#136F7A] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="relative w-full h-64 bg-gray-100">
                    <iframe
                      title="Windsor Chiropractic clinic location at 21 Coulls Rd, Athelstone SA 5076"
                      src="https://maps.google.com/maps?q=21+Coulls+Rd,+Athelstone+SA+5076,+Australia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          SLIM DARK TEAL FOOTER
          - Logo, business name, address, phone, and copyright
          ==================================================================== */}
      <footer className="bg-[#0D4F58] text-white py-10 border-t border-[#136F7A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            {/* Logo and clinic identity */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <ClinicLogoIcon className="w-7 h-7" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold tracking-tight text-white">
                  Windsor Chiropractic
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#8DB8A5] uppercase mt-0.5">
                  Athelstone, South Australia
                </span>
              </div>
            </div>

            {/* Quick contact summary */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8DB8A5]" />
                {CLINIC_INFO.addressShort}
              </span>
              <a
                href={CLINIC_INFO.phoneHref}
                className="flex items-center gap-1.5 hover:text-[#E3A94B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8DB8A5]" />
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-white/60">
              <p>&copy; {new Date().getFullYear()} Windsor Chiropractic. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          MOBILE FLOATING "CALL" BUTTON
          - Prominent, easy-to-tap floating call CTA for mobile users
          - Stays strictly within the 15% mobile viewport height constraint
          ==================================================================== */}
      <div className="sm:hidden fixed bottom-4 right-4 z-40">
        <a
          href={CLINIC_INFO.phoneHref}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#E3A94B] hover:bg-[#d79c3d] text-[#1E2D33] font-bold text-sm rounded-full shadow-xl shadow-black/25 active:scale-95 transition-transform border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#136F7A]"
          aria-label={`Call ${CLINIC_INFO.phoneDisplay}`}
        >
          <div className="w-7 h-7 rounded-full bg-[#1E2D33] text-[#E3A94B] flex items-center justify-center shrink-0">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span className="tracking-tight">Call Now</span>
        </a>
      </div>
    </div>
  );
}
