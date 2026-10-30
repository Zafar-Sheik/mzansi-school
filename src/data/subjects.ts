export type Category = 'caps' | 'elective' | 'skills'
export type Status = 'live' | 'soon'

export interface Subject {
  id: string
  name: string
  category: Category
  status: Status
  group: string
  blurb: string
  icon: string
  url?: string
  phase?: string
}

export const categoryLabels: Record<Category, string> = {
  caps: 'CAPS core',
  elective: 'Electives',
  skills: 'Mzansi Skills',
}

export const statusLabels: Record<Status, string> = {
  live: 'Live now',
  soon: 'Coming soon',
}

// Subjects with a `url` are finished apps that learners can open today.
export const subjects: Subject[] = [
  // ── Live ────────────────────────────────────────────────────────────────
  {
    id: 'english',
    name: 'English',
    category: 'caps',
    status: 'live',
    group: 'Languages',
    icon: '📚',
    phase: 'Gr 10–12',
    blurb: 'Comprehension, language structures, literature and writing practice, aligned to the CAPS English curriculum.',
    url: 'https://mzansi-english.vercel.app/',
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    category: 'caps',
    status: 'live',
    group: 'Mathematics',
    icon: '📐',
    phase: 'Gr 10–12',
    blurb: 'Algebra, functions, trigonometry, geometry, calculus and statistics — worked through step by step.',
    url: 'https://mzansi-math.vercel.app/',
  },
  {
    id: 'physical-sciences',
    name: 'Physical Sciences',
    category: 'caps',
    status: 'live',
    group: 'Sciences',
    icon: '⚛️',
    phase: 'Gr 10–12',
    blurb: 'Mechanics, waves, electricity, matter and chemical change — physics and chemistry explained clearly.',
    url: 'https://mzansi-physics.vercel.app/',
  },
  {
    id: 'life-sciences',
    name: 'Life Sciences',
    category: 'caps',
    status: 'live',
    group: 'Sciences',
    icon: '🧬',
    phase: 'Gr 11–12',
    blurb: 'From photosynthesis, respiration and population ecology to DNA, genetics, human reproduction and evolution.',
    url: 'https://mzansi-life-science-klar.vercel.app/',
  },
  {
    id: 'accounting',
    name: 'Accounting',
    category: 'caps',
    status: 'live',
    group: 'Commerce',
    icon: '🧾',
    phase: 'Gr 10–12',
    blurb: 'Journals, ledgers, financial statements and analysis — the skills behind every business in South Africa.',
    url: 'https://mzansi-accounting.vercel.app/',
  },
  {
    id: 'geography',
    name: 'Geography',
    category: 'caps',
    status: 'live',
    group: 'Humanities',
    icon: '🌍',
    phase: 'Gr 10–12',
    blurb: 'Climate and weather, geomorphology, settlement, economic geography and mapwork — your Geography companion.',
    url: 'https://geog-companion.vercel.app/',
  },
  {
    id: 'information-technology',
    name: 'Information Technology',
    category: 'caps',
    status: 'live',
    group: 'Technology',
    icon: '💻',
    phase: 'Gr 10–12',
    blurb: 'Programming, databases, systems and communication technologies — help for IT theory and practical work.',
    url: 'https://it-helper-ten.vercel.app/',
  },

  // ── CAPS core (coming) ─────────────────────────────────────────────────
  { id: 'afrikaans', name: 'Afrikaans', category: 'caps', status: 'soon', group: 'Languages', icon: '🗣️', phase: 'Gr 10–12', blurb: 'Huistaal and Eerste Addisionele Taal — leesbegrip, taalstrukture en letterkunde.' },
  { id: 'african-languages', name: 'African Languages', category: 'caps', status: 'soon', group: 'Languages', icon: '🗣️', phase: 'Gr 10–12', blurb: 'isiZulu, isiXhosa, Sesotho, Setswana, Sepedi, Xitsonga, Tshivenḓa, isiNdebele and siSwati — Home and First Additional Language.' },
  { id: 'sasl', name: 'South African Sign Language', category: 'caps', status: 'soon', group: 'Languages', icon: '🤟', phase: 'Gr 10–12', blurb: 'SASL Home Language — our twelfth official language, for Deaf learners and everyone who wants to learn it.' },
  { id: 'math-lit', name: 'Mathematical Literacy', category: 'caps', status: 'soon', group: 'Mathematics', icon: '🧮', phase: 'Gr 10–12', blurb: 'Finance, measurement, maps, plans and data — maths for everyday life and work.' },
  { id: 'technical-maths', name: 'Technical Mathematics', category: 'caps', status: 'soon', group: 'Mathematics', icon: '📏', phase: 'Gr 10–12', blurb: 'Applied maths for the technical stream, built around real engineering problems.' },
  { id: 'life-orientation', name: 'Life Orientation', category: 'caps', status: 'soon', group: 'Personal development', icon: '🧭', phase: 'Gr 10–12', blurb: 'Wellbeing, citizenship, careers and study skills — compulsory for every learner.' },
  { id: 'business-studies', name: 'Business Studies', category: 'caps', status: 'soon', group: 'Commerce', icon: '📊', phase: 'Gr 10–12', blurb: 'Business environments, operations, ventures and the role of business in society.' },
  { id: 'economics', name: 'Economics', category: 'caps', status: 'soon', group: 'Commerce', icon: '💹', phase: 'Gr 10–12', blurb: 'Macro- and microeconomics, economic pursuits and contemporary economic issues in South Africa.' },
  { id: 'history', name: 'History', category: 'caps', status: 'soon', group: 'Humanities', icon: '🏛️', phase: 'Gr 10–12', blurb: 'From colonialism and apartheid to the Cold War and democracy — sources, essays and context.' },
  { id: 'cat', name: 'Computer Applications Technology', category: 'caps', status: 'soon', group: 'Technology', icon: '🖱️', phase: 'Gr 10–12', blurb: 'Word processing, spreadsheets, databases and digital solutions for the workplace.' },
  { id: 'natural-sciences', name: 'Natural Sciences & Technology', category: 'caps', status: 'soon', group: 'Senior & Intermediate Phase', icon: '🔬', phase: 'Gr 4–9', blurb: 'Life and living, matter and materials, energy and change, planet Earth and beyond.' },
  { id: 'social-sciences', name: 'Social Sciences', category: 'caps', status: 'soon', group: 'Senior & Intermediate Phase', icon: '🗺️', phase: 'Gr 4–9', blurb: 'Foundations of History and Geography for the Intermediate and Senior Phases.' },
  { id: 'ems', name: 'Economic & Management Sciences', category: 'caps', status: 'soon', group: 'Senior & Intermediate Phase', icon: '🪙', phase: 'Gr 7–9', blurb: 'The economy, financial literacy and entrepreneurship — the first step towards Accounting and Business.' },
  { id: 'technology-gr7-9', name: 'Technology', category: 'caps', status: 'soon', group: 'Senior & Intermediate Phase', icon: '⚙️', phase: 'Gr 7–9', blurb: 'Structures, processes, mechanical systems and electrical systems through the design process.' },

  // ── Electives (coming) ─────────────────────────────────────────────────
  { id: 'agri-sciences', name: 'Agricultural Sciences', category: 'elective', status: 'soon', group: 'Agriculture', icon: '🌱', phase: 'Gr 10–12', blurb: 'Soil science, plant and animal studies, and agricultural economics.' },
  { id: 'agri-tech', name: 'Agricultural Technology & Management', category: 'elective', status: 'soon', group: 'Agriculture', icon: '🚜', phase: 'Gr 10–12', blurb: 'Farm structures, machinery, irrigation and running a farming enterprise.' },
  { id: 'egd', name: 'Engineering Graphics & Design', category: 'elective', status: 'soon', group: 'Technical', icon: '📐', phase: 'Gr 10–12', blurb: 'Technical drawing, projections, CAD fundamentals and design thinking.' },
  { id: 'civil-tech', name: 'Civil Technology', category: 'elective', status: 'soon', group: 'Technical', icon: '🏗️', phase: 'Gr 10–12', blurb: 'Construction, woodworking and civil services.' },
  { id: 'electrical-tech', name: 'Electrical Technology', category: 'elective', status: 'soon', group: 'Technical', icon: '🔌', phase: 'Gr 10–12', blurb: 'Electronics, digital systems and power systems.' },
  { id: 'mechanical-tech', name: 'Mechanical Technology', category: 'elective', status: 'soon', group: 'Technical', icon: '🔧', phase: 'Gr 10–12', blurb: 'Automotive, fitting and machining, and welding and metalwork.' },
  { id: 'technical-sciences', name: 'Technical Sciences', category: 'elective', status: 'soon', group: 'Technical', icon: '🧪', phase: 'Gr 10–12', blurb: 'Physics and chemistry applied to the technical trades.' },
  { id: 'tourism', name: 'Tourism', category: 'elective', status: 'soon', group: 'Services', icon: '🧳', phase: 'Gr 10–12', blurb: 'Tourism sectors, map work, attractions, culture and customer service.' },
  { id: 'hospitality', name: 'Hospitality Studies', category: 'elective', status: 'soon', group: 'Services', icon: '🍽️', phase: 'Gr 10–12', blurb: 'Food production, service and the hospitality industry.' },
  { id: 'consumer-studies', name: 'Consumer Studies', category: 'elective', status: 'soon', group: 'Services', icon: '🛒', phase: 'Gr 10–12', blurb: 'Food, clothing, housing and entrepreneurship from the consumer’s side.' },
  { id: 'visual-arts', name: 'Visual Arts', category: 'elective', status: 'soon', group: 'Creative Arts', icon: '🎨', phase: 'Gr 10–12', blurb: 'Art history, visual literacy and practical artmaking.' },
  { id: 'design', name: 'Design', category: 'elective', status: 'soon', group: 'Creative Arts', icon: '✏️', phase: 'Gr 10–12', blurb: 'Design literacy, process and practice across disciplines.' },
  { id: 'dramatic-arts', name: 'Dramatic Arts', category: 'elective', status: 'soon', group: 'Creative Arts', icon: '🎭', phase: 'Gr 10–12', blurb: 'Theatre history, performance and South African drama.' },
  { id: 'music', name: 'Music', category: 'elective', status: 'soon', group: 'Creative Arts', icon: '🎵', phase: 'Gr 10–12', blurb: 'Music theory, history, performance and composition.' },
  { id: 'dance', name: 'Dance Studies', category: 'elective', status: 'soon', group: 'Creative Arts', icon: '💃', phase: 'Gr 10–12', blurb: 'Dance history, choreography, performance and anatomy.' },
  { id: 'religion', name: 'Religion Studies', category: 'elective', status: 'soon', group: 'Humanities', icon: '🕊️', phase: 'Gr 10–12', blurb: 'The world’s religions, their teachings and their place in society.' },
  { id: 'marine', name: 'Marine Sciences & Maritime Economics', category: 'elective', status: 'soon', group: 'Maritime', icon: '🌊', phase: 'Gr 10–12', blurb: 'Our oceans, coastal ecosystems and the maritime economy.' },
  { id: 'sport-science', name: 'Sport & Exercise Science', category: 'elective', status: 'soon', group: 'Health', icon: '🏃', phase: 'Gr 10–12', blurb: 'Anatomy, physiology, training principles and sport in society.' },

  // ── Mzansi Skills (our own modules) ────────────────────────────────────
  { id: 'money', name: 'Money Smarts', category: 'skills', status: 'soon', group: 'Life & money', icon: '💰', blurb: 'Budgeting, saving, banking, credit, stokvels, payslips and SARS — how money really works.' },
  { id: 'entrepreneurship', name: 'Start Your Hustle', category: 'skills', status: 'soon', group: 'Work & business', icon: '🚀', blurb: 'Turn an idea into a small business: pricing, marketing, cash flow and registering with CIPC.' },
  { id: 'job-ready', name: 'Job Ready', category: 'skills', status: 'soon', group: 'Work & business', icon: '💼', blurb: 'Writing a CV, finding opportunities, interviews, workplace etiquette and your rights at work.' },
  { id: 'coding', name: 'Code & Create', category: 'skills', status: 'soon', group: 'Digital', icon: '👩🏾‍💻', blurb: 'Build websites and apps from scratch — practical coding for people who have never coded.' },
  { id: 'digital-safety', name: 'Online & Safe', category: 'skills', status: 'soon', group: 'Digital', icon: '🛡️', blurb: 'Scams, privacy, cyberbullying, POPIA and spotting fake news.' },
  { id: 'ai-literacy', name: 'AI for Everyone', category: 'skills', status: 'soon', group: 'Digital', icon: '🤖', blurb: 'What AI is, how to use it well for study and work, and where it gets things wrong.' },
  { id: 'electrical-basics', name: 'Wiring & Electrical Basics', category: 'skills', status: 'soon', group: 'Trades', icon: '💡', blurb: 'Circuits, safety, fault-finding and the path to an electrician apprenticeship.' },
  { id: 'solar', name: 'Solar & Load-shedding Solutions', category: 'skills', status: 'soon', group: 'Trades', icon: '☀️', blurb: 'How solar panels, inverters and batteries work — and the growing careers around them.' },
  { id: 'plumbing', name: 'Plumbing & Home Repairs', category: 'skills', status: 'soon', group: 'Trades', icon: '🔩', blurb: 'Fix a leak, unblock a drain, tile, paint and maintain a home safely.' },
  { id: 'auto', name: 'Car Care & Mechanics', category: 'skills', status: 'soon', group: 'Trades', icon: '🚗', blurb: 'How engines work, basic servicing, tyres and roadside fixes.' },
  { id: 'learners-licence', name: 'Learner’s Licence Prep', category: 'skills', status: 'soon', group: 'Life & money', icon: '🚦', blurb: 'Road signs, rules of the road and vehicle controls — get ready for your K53 test.' },
  { id: 'food-garden', name: 'Grow Your Own Food', category: 'skills', status: 'soon', group: 'Agriculture & food', icon: '🥬', blurb: 'Backyard and school food gardens, composting, water-wise growing and selling your harvest.' },
  { id: 'cooking', name: 'Cooking & Nutrition', category: 'skills', status: 'soon', group: 'Agriculture & food', icon: '🍲', blurb: 'Healthy meals on a budget, food safety and the basics of a kitchen career.' },
  { id: 'first-aid', name: 'First Aid & Emergencies', category: 'skills', status: 'soon', group: 'Health & wellbeing', icon: '⛑️', blurb: 'CPR, wounds, burns, choking and what to do until help arrives.' },
  { id: 'wellbeing', name: 'Mind Matters', category: 'skills', status: 'soon', group: 'Health & wellbeing', icon: '🧠', blurb: 'Stress, exam anxiety, relationships and where to get help when you need it.' },
  { id: 'civics', name: 'Know Your Rights', category: 'skills', status: 'soon', group: 'Life & money', icon: '⚖️', blurb: 'The Constitution, voting, consumer protection, leases and dealing with government services.' },
  { id: 'public-speaking', name: 'Speak Up', category: 'skills', status: 'soon', group: 'Work & business', icon: '🎤', blurb: 'Confident public speaking, presentations and debating.' },
]
