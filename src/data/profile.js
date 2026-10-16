export const profile = {
  name: 'Garima Purohit',
  monogram: 'G / ARCHIVE',
  descriptor: 'Independent Developer Archive · Building since 2023',
  headline: "Hello, I'm Garima.",
  statement: 'I build things, question assumptions, and turn ideas into working software.',
  introduction: 'B.Tech Information Technology student at BPIT, GGSIPU · Current CGPA 9.39/10 · Class of 2027.',
  availability: 'Open to internship opportunities',
  graduation: '2027',
  cgpa: '9.39/10',
  dsaCount: '800+',
  email: 'purohitgarima2307@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/garima-purohit-914400291/',
    github: 'https://github.com/garimapurohit',
    leetcode: 'https://leetcode.com/u/purohitgarima2623/',
    codeforces: 'https://codeforces.com/profile/garimapurohit_',
    codechef: 'https://www.codechef.com/users/lethargicwhale',
    resume: 'https://drive.google.com/file/d/1OU2R2L_1oadNivhM0KwSF2uL5-lBBfQH/view?usp=sharing',
  },
}

export const skills = [
  {
    title: 'Languages',
    index: '01',
    items: ['C++', 'JavaScript', 'C', 'HTML', 'CSS'],
    note: 'Used across coursework, problem-solving, and web projects.',
  },
  {
    title: 'Frameworks & libraries',
    index: '02',
    items: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js'],
    note: 'Applied across personal projects and internship work.',
  },
  {
    title: 'Databases',
    index: '03',
    items: ['MongoDB', 'SQLite', 'Firebase'],
    note: 'Used in project and internship work.',
  },
  {
    title: 'Tools',
    index: '04',
    items: ['Git', 'GitHub', 'Postman', 'VS Code'],
    note: 'Used for version control, API testing, and development.',
  },
  {
    title: 'Concepts',
    index: '05',
    items: ['Data Structures & Algorithms', 'REST APIs', 'MVC'],
    note: 'Applied in project work and problem-solving.',
  },
  {
    title: 'Coursework',
    index: '06',
    items: ['Computer Networks', 'Operating Systems', 'DBMS', 'OOP'],
    note: 'Core subjects from my Information Technology degree.',
  },
]

export const competitiveProfiles = [
  {
    platform: 'Codeforces',
    standing: 'Pupil · 1230',
    href: profile.links.codeforces,
  },
  {
    platform: 'CodeChef',
    standing: '2-Star · 1457',
    href: profile.links.codechef,
  },
  {
    platform: 'CodeChef Starters 185',
    standing: 'Rank 394 / 10k+',
    href: profile.links.codechef,
  },
]

export const achievements = [
  { label: 'HackDUCS', value: '2nd place' },
  { label: 'Semester I', value: '3rd rank' },
]

export const timeline = [
  {
    year: '2023–27',
    title: 'B.Tech · Information Technology',
    place: 'BPIT, GGSIPU',
    detail: 'B.Tech in Information Technology; current CGPA 9.39/10. Secured 3rd rank in the 1st semester.',
    accent: 'blue',
  },
  {
    year: 'Jun–Jul 2026',
    title: 'Web Development Intern',
    place: 'Tata Power-DDL',
    detail: 'Contributed to frontend and backend development of the Self Meter Reading application using React, Node.js, Express, and SQLite.',
    accent: 'orange',
  },
  {
    year: '2023–24',
    title: 'Technical Society Member',
    place: 'Hash Define',
    detail: 'Participated in coding sessions and peer-learning groups.',
    accent: 'lime',
  },
]

export const notebookNotes = [
  {
    label: 'In progress',
    title: 'Connecting a request to the next step',
    summary:
      'Thinking through how PulseConnect can make a blood donation request clear and help donors find the right next action.',
    topic: 'Product thinking',
  },
  {
    label: 'Field note',
    title: 'A form is more than its fields',
    summary:
      'Thinking through validation, image uploads, and the backend details that support a self-meter reading flow.',
    topic: 'Product thinking',
  },
  {
    label: 'On the desk',
    title: 'Small systems, clear behavior',
    summary:
      'Continuing to learn by building practical web applications and solving data-structures-and-algorithms problems.',
    topic: 'Learning',
  },
]

export const contacts = [
  { label: 'Email', key: 'email', value: profile.email, display: 'Add email address' },
  { label: 'LinkedIn', key: 'linkedin', value: profile.links.linkedin, display: 'Add LinkedIn URL' },
  { label: 'GitHub', key: 'github', value: profile.links.github, display: 'Add GitHub URL' },
  { label: 'LeetCode', key: 'leetcode', value: profile.links.leetcode, display: 'Add LeetCode URL' },
  { label: 'Codeforces', key: 'codeforces', value: profile.links.codeforces, display: 'Add Codeforces URL' },
  { label: 'CodeChef', key: 'codechef', value: profile.links.codechef, display: 'Add CodeChef URL' },
  { label: 'Résumé', key: 'resume', value: profile.links.resume, display: 'Add résumé URL' },
]
