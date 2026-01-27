
import { ServiceCategory, ServiceItem, Project } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'electrical',
    title: 'Electrical Wiring',
    description: 'Industrial & Commercial',
    longDescription: 'From complex industrial power systems to modern smart home setups, we deliver precision-engineered electrical installations.',
    category: ServiceCategory.ELECTRICAL,
    icon: 'bolt',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKKnClhBEo-xTJKv8xgOriFKlh8E45hS5vdbt10DxVKuLMM1dWuPyrKN7Urmnayg1Urb1D31s8wpatHlpgEogaB8VnxGCRa4kZqxOgCyoHEV_k-BjY_c2Sc4wdK0dlJolJAF5nHf4t21XMBQL4Z-rv7cONK6b4FQ3zzI0qOFOgYjOMUJgGw-CEWzHL-r-NRCdaHWR9at_PUhQopUQoA5VnjWq9U0BsZZaW_NSRgdDe2VZhZx3U5o3SHbm5FUEkMa5mQG90uxFuSds',
    features: ['Residential Wiring', 'Industrial Power', 'Smart Automation', 'Troubleshooting'],
    ctaText: 'Get a Quote'
  },
  {
    id: 'surveillance',
    title: 'Surveillance',
    description: '24/7 Smart Monitoring',
    longDescription: 'Comprehensive 4K surveillance networks designed for maximum protection and intelligent threat detection.',
    category: ServiceCategory.SECURITY,
    icon: 'videocam',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9InVxJIzSiUuyk6Bz0P9FEsUrMYfe2KmfEbCyh3_GOUyOj5XSgJrbu9WFafgfnOVTY7GXQvdkRLnMyU2dkpq99C9DkK3oMrWbg227m8BBna57cI4tN-eIBCZDv-4jE4L1FO8UWLPdfipd6IjaJpf9TMAAN8PUuvYSt4ZUNbaXCzSAGJvO9e-WBx-GBhbFISJPAE2lXP27spxZqhPVVkuRM2pDlpif7NVuR9w33e6KAAUuThMJA0zF5DQLHVt0tUnMCp6HMKUiC4',
    features: ['4K UHD Video', 'Remote Monitoring', 'AI Detection', '24/7 Cloud Storage'],
    ctaText: 'Request a Site Survey'
  },
  {
    id: 'biometrics',
    title: 'Biometric Access',
    description: 'Advanced Security',
    longDescription: 'Eliminate the risk of lost keys and unauthorized access with our high-tech fingerprint and facial recognition systems.',
    category: ServiceCategory.BIOMETRIC,
    icon: 'fingerprint',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3NA7l8g8BjN0IoQEgLgO3d-O-cAvUsbbsHpGUCGGlKpk9x1OFVQSSVw5or6REUxXDljO6R_bedMDpm3sRD9jtrU9pVnU0WTqw2-XW3g1JD1Iu53TZDZb7qNKY_Pd6id669V4oCVJ4KBx9pgHZE9bVb7_inosVITFiVKTnm768PmDec4A7i1wAUiW15pRNXE95oDZHkgd6uZGVR6uo21_qb1e4IhzxJhHhQ4rCrZTrDIZXZ-pUkN4yFU49Ao1Im9dq0ts670AUqmw',
    features: ['Fingerprint Scanning', 'Facial Recognition', 'RFID Integration', 'Palm Vein Technology'],
    ctaText: 'Request a Free Quote'
  },
  {
    id: 'hr-management',
    title: 'HR Management',
    description: 'Digital Workforce Tools',
    longDescription: "Optimize your HR operations with Pakmike Technology's comprehensive management system. Designed for the modern enterprise.",
    category: ServiceCategory.HR,
    icon: 'groups',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHStau4fTrokCDOITJBAb6EsTmfnyNRoPejTEd_gAmBd0lup4k0buCbaYVZ-fH4ol9mxZUoMiTr3YIUNSx8A2bMFO7GD6xUZi0ujfPAFCGOdxOXY91qeZ00OeU377ytStks7kjUxeDhM0UBETU9hj1PtSoAUB8nD14BcnBPItnryzVnC26mamiKuy4t4QjzC0moKATN1uzrmR7nzpAEoC-rovjk5tSt6TaYQ57xP1JOMdPpXC0w21_d616abKgHhmlpR8jyK-PQeA',
    features: ['Employee Profiles', 'Payroll Processing', 'Leave Management', 'Performance Tracking'],
    ctaText: 'Get Started'
  },
  {
    id: 'parking-systems',
    title: 'Car Park Entry & Exit Systems',
    description: 'Automated barriers and license plate recognition technology.',
    longDescription: 'State-of-the-art automated entry and exit systems for residential, commercial, and industrial facilities.',
    category: ServiceCategory.PARKING,
    icon: 'local_parking',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGB0OBSL7Z34OVFc7Bjt8Q_y7XjrXmAzmFa5D1ty7D1aSJMckP4u-yp0r_mQsw-wpcUhyKu-wiSM2SxuFxyGzPcIbt6f-TbGfECAeidKdHRA3uTbZiJPSbNlHKKmPMiX5T2u_EDb3Zd2FqtuRW7padgb0ztbj3eROLBQHHnJo933dmdeB4e3JATmped7SM_tsDd_igC73zauQs5BslbNwLh6hJYyOMqEG1lI9F2TvOkh4zRHpbmJmJdfGDwkRJPd6ELsIXlnjq8W0',
    features: ['ANPR', 'Automated Barriers', 'Ticketless Entry', 'Mobile Payment'],
    ctaText: 'Request a Site Survey'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Facility Lighting & Canopy Wiring',
    description: 'Specialized industrial LED installation and structural wiring for a commercial fuel station canopy.',
    category: ServiceCategory.ELECTRICAL,
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    title: 'Central Mall Surveillance Setup',
    description: 'Enhanced security coverage by 40% with smart IP cameras.',
    category: ServiceCategory.SECURITY,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASt8kITyJhJMcIlSWzSls8dJqN1fiMEO_gmTiH2wO3SLBiBvj3-7cbKjqK6Snnqpf1JRQ2YobhGKM9VPFofnqTyn3sWruva8ZQIiLn2JX2bt1EtAV1-RCCQcugs6_eSaWCLWv8-6y9XZy_CsEIGtJonAu4MC3Ja-jcnNdKqmKBoHUL1VQ1hBQaDH5H1fjFlbZWCXgu-DhW3sVWapEszALhzY5wHlI_NKGKXY4l5IDjafGHxuspiolZX3co2Nrg6WThg5dBKROgw3Y'
  },
  {
    id: 'p3',
    title: 'Automated Car Park Barrier',
    description: 'Implemented ANPR system reducing entry wait times by 60%.',
    category: ServiceCategory.PARKING,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9fE_PvEM5HucO-40aq_6RYxlutgH-YMQt9CG55TsI1QMr-8XpBfwVeZ28qQ-Iu1Pt1mSnw8fF7zaKQwRjp0SQYAt4QDkkPflZHCgx_4J7wAhrYWkXj6yE5AhHGJW98x6imkYncu4_JF2k2duFRoyOc1wHZh7IuS31xxhOqfovZkZ9GT-m7gfIlfD-NAvgjwzaUY0Nzh-g90KHDl1qbmKFju9En8uD9jJPFzLDa8gLP3Q0yvbOBKAc7_RDnCVOvJx9GDn-Z_0pmUE'
  },
  {
    id: 'p4',
    title: 'Biometric Attendance Integration',
    description: 'Automated payroll processing for 500+ staff members.',
    category: ServiceCategory.HR,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo3AzSmoIjiOmO5BxIqxhR-WENfCQJ8ExUb_RefcUnf-cTq_IA0Uj6TmNNvYnHAtaTUYhrgPrPv3RqEK_f6ziwHrw4bM-4Idkge-oyzfn0Xv6oUCsvj8l4ZZVM090cHXP0GQ095BHnC_fWS414xkCE_DHBIpUYxiEOIT99qPRUaBIcXLa4ts9NQShJN_YgTXfP70OOUZdCMUzwUnn-IUk_IzrN_0Xpxnd11y3EmoRRwfy5xwrykdghAlZlmerjbhiOqrkbE91-pdI'
  }
];
