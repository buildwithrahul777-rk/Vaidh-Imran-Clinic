import { ClinicInfo, ServiceItem, ApproachStep, PrivacyPoint } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Vaidh Imran Clinic',
  category: 'Sexologist / Ayurvedic Sexual Health',
  fullAddress: '68GW+VPW, Mairwa Road, near Canara Bank, Srinagar, Ayodhyapuri, Siwan, Bihar 841226',
  streetAddress: 'Mairwa Road',
  landmark: 'Near Canara Bank',
  area: 'Srinagar, Ayodhyapuri',
  city: 'Siwan',
  state: 'Bihar',
  pincode: '841226',
  plusCode: '68GW+VPW',
  phone: '094106 24243',
  displayPhone: '094106 24243',
  website: 'vaidhimran.com',
  rating: 5.0,
  reviewCount: 615,
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'sexual-health-consultation',
    title: 'Sexual Health Consultation',
    shortDescription: 'One-on-one confidential consultation focused on addressing individual concerns in a supportive clinical environment.',
    iconName: 'stethoscope',
    overview: 'A confidential medical consultation space tailored for honest, comfortable dialogue regarding intimate health and wellbeing.',
    discussionTopics: [
      'Understanding personal symptoms and timeline',
      'Confidential clinical evaluation',
      'Holistic health and lifestyle factors',
      'Structured discussion of concerns without stigma'
    ],
    approachPoints: [
      'Strict patient privacy protocols',
      'Non-judgmental, respectful clinical dialogue',
      'Dedicated one-on-one time without rushing'
    ]
  },
  {
    id: 'personalised-ayurvedic-guidance',
    title: 'Personalised Ayurvedic Guidance',
    shortDescription: 'Tailored recommendations rooted in traditional Ayurvedic principles designed to align with your unique constitution.',
    iconName: 'leaf',
    overview: 'Ayurvedic guidance focused on balancing bodily principles (doshas) through disciplined lifestyle, nutrition, and traditional herbal formulations.',
    discussionTopics: [
      'Assessment of individual constitution (Prakriti)',
      'Dietary and nutritional lifestyle recommendations',
      'Daily routines (Dinacharya) to foster balance',
      'Responsible, traditional botanical considerations'
    ],
    approachPoints: [
      'Rooted in classical Ayurvedic principles',
      'Focus on long-term physical and mental balance',
      'Individualized rather than one-size-fits-all advice'
    ]
  },
  {
    id: 'mens-sexual-wellness',
    title: 'Men’s Sexual Wellness',
    shortDescription: 'Discreet guidance for male sexual health concerns, addressing physiological and stress-related elements.',
    iconName: 'shield',
    overview: 'Focused clinical attention on male reproductive and intimate wellbeing, supporting vitality, mental resilience, and physiological balance.',
    discussionTopics: [
      'Personal intimate health concerns and vitality',
      'Impact of stress, sleep, and physical fatigue',
      'Age-appropriate wellbeing and lifestyle adjustments',
      'Clarity on common myths and misconceptions'
    ],
    approachPoints: [
      'Discreet, confidential consultations',
      'Understanding the mind-body link in performance',
      'Constructive guidance for sustainable wellbeing'
    ]
  },
  {
    id: 'private-health-consultation',
    title: 'Private Health Consultation',
    shortDescription: 'A quiet, secure setting designed specifically to discuss sensitive topics with complete dignity and respect.',
    iconName: 'compass',
    overview: 'Designed for patients who value absolute privacy and desire a safe clinical space to voice personal concerns without apprehension.',
    discussionTopics: [
      'Open discussion in an unhurried, private room',
      'Addressing underlying anxiety or sensitive worries',
      'Clarification of health history and questions',
      'Clear, understandable advice on next steps'
    ],
    approachPoints: [
      'Separate consultation quarters ensuring privacy',
      'Confidential patient record handling',
      'Direct, respectful interaction with the practitioner'
    ]
  },
  {
    id: 'general-sexual-wellbeing-guidance',
    title: 'General Sexual Wellbeing Guidance',
    shortDescription: 'Holistic lifestyle and wellness advice promoting ongoing balance, vigor, and relationship harmony.',
    iconName: 'heart-handshake',
    overview: 'Comprehensive guidance supporting general physical harmony, vitality, relational comfort, and long-term intimate wellness.',
    discussionTopics: [
      'Holistic physical harmony and stamina',
      'Mindfulness, stress reduction, and mental ease',
      'Nutritional support for natural vitality',
      'Healthy communication and confidence'
    ],
    approachPoints: [
      'Encouraging proactive, informed choices',
      'Safe, natural wellness practices',
      'Emphasis on overall vitality and mental peace'
    ]
  }
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Begin with a private conversation about your concerns and wellbeing.'
  },
  {
    number: '02',
    title: 'Personalise',
    description: "Build guidance around the individual's needs and circumstances."
  },
  {
    number: '03',
    title: 'Support',
    description: 'Encourage informed, responsible approaches to ongoing wellbeing.'
  }
];

export const PRIVACY_POINTS: PrivacyPoint[] = [
  {
    title: 'Private consultation',
    description: 'A discreet, quiet room where consultations take place with dedicated attention.'
  },
  {
    title: 'Respectful communication',
    description: 'Compassionate, non-judgmental discussions prioritizing patient dignity and comfort.'
  },
  {
    title: 'Personalised guidance',
    description: 'Advice customized strictly to your individual lifestyle, physical constitution, and personal needs.'
  }
];
