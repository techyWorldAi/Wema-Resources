export const APPLY_FORM_URL =
  'https://forms.zohopublic.com/wemaresources1/form/JobApplicationForm/formperma/iA6IBfZ7kCZEP-I3SQv_G7vckn4Jh0hOC1fcUdwopMQ'

export const CAREER_SUPPORT_FORM_URL =
  'https://forms.zohopublic.com/wemaresources1/form/CareerSupportForm/formperma/oLThphxg6_CPMJ6J_Wn441g8MVKMhigwNzuyUHosm9E'

/**
 * Background photos used across the page. Each is just a URL — swap any of
 * these for real photography at any time, nothing else needs to change.
 */
export const siteImages = {
  hero: '/hero-african.svg',
  values: '/hero-african.svg',
  cta: '/hero-african.svg',
  about: '/hero-african.svg',
}


export interface JobCategory {
  code: string
  title: string
  roles: string
  destination: string
}

export const jobCategories: JobCategory[] = [
  { code: 'HC', title: 'Home-Care', roles: 'Domestic workers, drivers', destination: 'GULF · EUROPE' },
  {
    code: 'HOS',
    title: 'Hospitality',
    roles: 'Restaurant workers, service crew, housekeepers, baristas, hairdressers',
    destination: 'GULF · EUROPE',
  },
  {
    code: 'ENG',
    title: 'Engineering & Construction',
    roles: 'Engineers, technicians, construction workers',
    destination: 'GULF · LOCAL',
  },
  {
    code: 'HLT',
    title: 'Healthcare',
    roles: 'Caregivers, nurses, allied health professionals',
    destination: 'GULF · EUROPE',
  },
  {
    code: 'ADM',
    title: 'Administration',
    roles: 'Cleaners, administrators, management staff, drivers',
    destination: 'LOCAL · GULF',
  },
]

export interface CoreValue {
  letter: string
  title: string
  description: string
}

export const coreValues: CoreValue[] = [
  {
    letter: 'S',
    title: 'Support',
    description: 'We guide and assist candidates throughout their journey.',
  },
  {
    letter: 'C',
    title: 'Clarity',
    description:
      'We aim to provide practical and honest guidance so candidates better understand opportunities, expectations and process.',
  },
  {
    letter: 'I',
    title: 'Integrity',
    description: 'We work with trusted partners and verified opportunities.',
  },
  {
    letter: 'T',
    title: 'Transparency',
    description: 'We provide clear information at every stage of the process.',
  },
]

export interface ProcessStep {
  gate: string
  title: string
  description: string
  tag: 'All routes' | 'International'
}

export const processSteps: ProcessStep[] = [
  { gate: '01', title: 'Submit your application', description: 'Tell us about your experience and the opportunities you’re aiming for.', tag: 'All routes' },
  { gate: '02', title: 'Screening & shortlisting', description: 'We review your profile against verified, open roles.', tag: 'All routes' },
  { gate: '03', title: 'Employer screening / interview', description: 'Shortlisted candidates meet the employer or partner agency.', tag: 'All routes' },
  { gate: '04', title: 'Medical & documentation', description: 'Required checks and paperwork ahead of deployment.', tag: 'International' },
  { gate: '05', title: 'Visa processing & travel', description: 'We guide you through visa approval and travel arrangements.', tag: 'International' },
]

export interface CareerService {
  title: string
  description: string
}

export const careerServices: CareerService[] = [
  {
    title: 'CV & Profile Support',
    description:
      'We help strengthen how your experience comes through on your CV and LinkedIn profile, so your strengths, impact and direction are clearer to employers.',
  },
  {
    title: 'Interview Preparation',
    description:
      'Practical support to help you communicate your experience more confidently and prepare for interviews and career conversations.',
  },
  {
    title: 'Career & Application Support',
    description:
      'Support around job applications, career positioning, and identifying roles that better align with your experience, strengths and goals.',
  },
]

export const whyCandidates: string[] = [
  'Clear communication',
  'Structured guidance',
  'Transparent process',
  'Professional support',
]
