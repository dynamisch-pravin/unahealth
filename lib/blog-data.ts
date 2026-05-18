export type PressReleasePost = {
  type: 'press-release'
  slug: string
  title: string
  date: string
  categories: string[]
  source: string
  sourceHref: string
  location: string
  label: string | null
  body: string
  image?: string
  imageAlt?: string
  quote?: string
  quoteAuthor?: string
  bulletsLabel?: string
  bullets?: string[]
  secondBulletsLabel?: string
  secondBullets?: string[]
  bulletsNote?: string
  secondBulletsNote?: string
  availabilityBold?: string
  availabilityText?: string
  aboutBody?: string
  sourceCredit?: string
  relatedHref: string
  relatedLabel: string
}

export type DeveloperNotePost = {
  type: 'developer-note'
  slug: string
  title: string
  date: string
  categories: string[]
  excerpt: string
  groups: {
    title: string
    subtitle: string
    sections: { heading: string; body: string }[]
    tickets: string[]
  }[]
}

export type BlogPost = PressReleasePost | DeveloperNotePost

export const allPosts: BlogPost[] = [
  {
    type: 'press-release',
    slug: 'una-health-introduces-una-air',
    title: 'UNA Health Introduces UNA AIR: Revolutionizing Candidate Remediation in Healthcare',
    date: 'May 29, 2025',
    categories: ['Blog', 'Press Releases'],
    source: 'PRNewswire',
    sourceHref: 'https://www.prnewswire.com/news-releases/una-health-introduces-una-air-revolutionizing-candidate-remediation-in-healthcare-302467723.html',
    location: 'GREENSBORO, N.C., May 29, 2025 /PRNewswire/',
    label: 'A New Tool for Closing Knowledge Gaps, Improving Onboarding, and Elevating Care',
    body: "UNA Health, the nation's fastest-growing healthcare competency testing platform, announced the launch of UNA AIR (Automated Instant Remediation) — a solution designed to accelerate onboarding and elevate clinical readiness by delivering instant, personalized remediation to healthcare professionals. UNA AIR identifies knowledge gaps during clinical testing and delivers targeted \"content snacks\" — bite-sized educational refreshers — improving retake success rates and accelerating time-to-placement. The platform automates exam scheduling and remediation cycles, allowing candidates to retest with zero manual intervention and reducing administrative burden on healthcare organizations.",
    quote: "UNA AIR is designed to drastically improve the onboarding process while ensuring the highest standards of clinical competency. By providing instant remediation, we empower candidates to address their knowledge gaps directly — resulting in a more confident, capable, and compliant healthcare workforce.",
    quoteAuthor: 'Ron Gonzalez, CEO of UNA Health',
    image: '/pressrealase/UNA_Health_launch_UNA_AIR.jpg',
    imageAlt: 'UNA AIR remediation interface on tablet',
    bulletsLabel: 'Initial Launch — 10 exams available June 2:',
    bullets: ['RN Pharmacology', 'CNA', 'Long Term Care RN', 'Behavioral Health RN', 'Medical Surgical RN', 'LPN/LVN', 'Operating Room RN', 'Medical Assistant', 'Clinic RN', 'Dysrhythmia General'],
    secondBulletsLabel: 'Expanding within 30 days:',
    secondBullets: ['MRI Tech', 'Corrections RN', 'ER PEDS RN', 'PICU RN', 'CVICU RN', 'PEDS RN', 'Respiratory Tech', 'Physical Therapist', 'Behavioral Health Tech'],
    availabilityBold: 'UNA AIR will be available starting June 2 to hospital networks, staffing agencies, and healthcare professionals',
    availabilityText: ' seeking to improve onboarding efficiency, reduce time-to-fill, and ensure clinical excellence across their workforce.',
    aboutBody: 'UNA Health offers a suite of mobile-first solutions purpose-built for hospital networks, staffing agencies, and healthcare professionals. From credentialing and compliance to clinical readiness and onboarding, UNA is redefining connected hiring in healthcare. With decades of experience and a growing ecosystem of integrations, UNA is helping the industry move faster, smarter, and with greater transparency.',
    sourceCredit: 'SOURCE UNA Health, Inc',
    relatedHref: '/resources/una-air',
    relatedLabel: 'Learn about UNA Air',
  },
  {
    type: 'press-release',
    slug: 'una-health-sets-the-standard-for-integrated-healthcare-hiring-through-deep-ats-staffing-platform-partnerships',
    title: 'UNA Health Sets the Standard for Integrated Healthcare Hiring Through Deep ATS & Staffing Platform Partnerships',
    date: 'May 13, 2025',
    categories: ['Blog', 'Press Releases'],
    source: 'PRNewswire',
    sourceHref: 'https://www.prnewswire.com/news-releases/una-health-sets-the-standard-for-integrated-healthcare-hiring-through-deep-ats--staffing-platform-partnerships-302452984.html',
    location: 'GREENSBORO, N.C., May 13, 2025 /PRNewswire/',
    label: null,
    body: "UNA Health, the nation's fastest-growing healthcare competency testing platform, is reinforcing its role as the technology standard for connected hiring by expanding and deepening its integration partnerships with applicant tracking systems (ATS) and staffing platforms across the ecosystem. With a relentless commitment to interoperability, UNA is investing heavily in building and scaling connections that unify the experience for staffing firms, travel nurse companies, healthcare facilities, and workforce platforms — resulting in faster fill times, better compliance, and industry-leading transparency.",
    quote: "Our goal is to be the connective tissue across the healthcare hiring stack. When we connect directly into our partners' systems, we unlock compounding value: richer insights, smoother workflows, and the ability to benchmark performance nationwide.",
    quoteAuthor: 'Ron Gonzalez, CEO at UNA Health',
    image: '/pressrealase/UNA_Health_Partnerships.jpg',
    imageAlt: 'ATS integration partners: Credentially, Nexus by LaborEdge, Bullhorn, NextCrew, Ceipal',
    bulletsLabel: 'UNA Health is proud to offer connections to leading platforms to drive a unified and data-rich experience for healthcare staffing. Current integration partners include:',
    bullets: ['Credentially', 'LaborEdge – Nexus', 'Bullhorn', 'NextCrew', 'Ceipal'],
    bulletsNote: 'These partners represent a growing ecosystem of connected solutions, allowing healthcare facilities and agencies to operate more efficiently, with greater visibility and certainty.',
    secondBulletsLabel: 'UNA is working with additional industry-leading platforms to further enhance the connected hiring experience. Current integrations in progress include:',
    secondBullets: ['ActivateStaff', 'JobDiva', 'VARS Health', 'WorkDay'],
    secondBulletsNote: 'As these connections are finalized, mutual customers can expect the same high standard of performance, data accessibility, and workflow automation that UNA is known for.',
    aboutBody: 'UNA Health is transforming healthcare staffing by seamlessly connecting medical facilities with top-tier, clinically proficient talent from leading agencies and partners nationwide. Through its API-first platform, UNA empowers hiring managers to act with confidence, speed, and visibility — setting a new standard for clinical competency selection.',
    sourceCredit: 'SOURCE UNA Health, Inc',
    relatedHref: '/resources/integrations',
    relatedLabel: 'View Integration Partners',
  },
  {
    type: 'developer-note',
    slug: 'una-development-updates-11-april-25',
    title: 'UNA Development Updates: 11 April 25',
    date: 'April 11, 2025',
    categories: ['Blog', 'Developer Notes'],
    excerpt: 'Platform-wide fixes and improvements across Admin Legacy, Admin V2, and the HCP App.',
    groups: [
      {
        title: 'Admin Legacy App',
        subtitle: 'Fixes & Improvements',
        sections: [
          { heading: 'Dropdown Menu Enhancements', body: 'Added "View Profile" and "Sign Out" options to the dropdown menu.' },
          { heading: 'Profile Image Update', body: 'Replacing the profile image now updates correctly without delay.' },
          { heading: 'Checklist Delete Message', body: 'Deleting a section with items now shows a complete warning message.' },
        ],
        tickets: [
          'UNA-907: Update UI for "My Profile" and "Logout" options',
          'UNA-919: Fix delay in profile image refresh after upload',
          'UNA-932: Improve delete warning message for checklist sections',
        ],
      },
      {
        title: 'Admin V2 App',
        subtitle: 'UI / Layout Fixes',
        sections: [
          { heading: '"Create New Invite" Page', body: 'Fixed UI shift when clicking "Expand" button and resolved background height reduction.' },
          { heading: 'Avatar Consistency', body: 'Unified avatar styling across roster and profile views.' },
          { heading: 'Checklist Spacing & Scroll Fixes', body: 'Removed unnecessary horizontal scrollbars and fixed spacing in print.' },
          { heading: 'Header & Page Title', body: 'Changed duplicate title to "View Profile" and fixed HCP profile name collapse on mobile.' },
          { heading: 'Input Field Standardization', body: 'Standardized email input box width across app.' },
          { heading: 'Mobile Responsiveness', body: 'Improved page spacing, resolved scroll issues, and adjusted misaligned content across mobile and tablet devices.' },
        ],
        tickets: [
          'UNA-912: Fix UI shift on "Create New Invite" page expand',
          'UNA-922: Fix background height reduction on "Create New Invite" expand',
          'UNA-920: Unify avatar styling across roster and profile views',
          'UNA-933: Remove unnecessary horizontal scrollbar in checklists',
          'UNA-942: Fix spacing in checklist print view',
          'UNA-950: Change duplicate page title to "View Profile"',
          'UNA-938: Fix HCP profile name collapse on mobile',
          'UNA-939: Standardize email input box width',
          'UNA-956: Improve mobile page spacing',
          'UNA-957: Resolve mobile scroll issues',
          'UNA-948: Fix misaligned content on tablet',
          'UNA-940: Additional mobile responsiveness improvements',
        ],
      },
      {
        title: 'HCP App',
        subtitle: 'Navigation, Forms & Media',
        sections: [
          { heading: 'Scroll Fix', body: 'Fixed page scroll issue when returning from UNA Wallet item.' },
          { heading: '"Change Role" Button', body: 'Resolved delayed appearance on Profile page.' },
          { heading: 'Reference Form Fix', body: '"Currently Working Here" checkbox now correctly affects reference form.' },
          { heading: 'Wallet Defaults', body: '"Currently working here" starts unchecked by default.' },
          { heading: 'Primary Specialty', body: 'Added missing specialty field to test, checklist, and course results.' },
          { heading: 'Status Labels & Styling', body: 'Reference status labels are color-coded; questions are now bold; checklist results include status labels.' },
          { heading: 'HTML Editor', body: 'Added audio upload support for tests and mandatories.' },
        ],
        tickets: [
          'UNA-662: Fix page scroll issue when returning from UNA Wallet item',
          'UNA-926: Fix delayed appearance of "Change Role" button on Profile page',
          'UNA-914: Fix "Currently Working Here" checkbox affecting reference form',
          'UNA-923: Set "Currently working here" unchecked by default in Wallet',
          'UNA-921: Add primary specialty field to test, checklist, and course results',
          'UNA-936: Add color-coded reference status labels',
          'UNA-952: Make questions bold in reference form',
          'UNA-924: Add status labels to checklist results',
          'UNA-971: Add audio upload support to HTML editor for tests and mandatories',
        ],
      },
    ],
  },
]
