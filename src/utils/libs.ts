export const projects: Project[] = [
  {
    name: 'Nescafe Timer',
    description: 'Ensures your Dolce Gusto capsules brew to perfection',
    img: 'img/projects/nescafe-timer.avif',
    techStack: ['flutter'],
    date: new Date('2024-04-01'),
    link: 'https://play.google.com/store/apps/details?id=com.gonzxlodev.nescafe_timer'
  },
  {
    name: 'Creafacturas',
    description: 'Invoice generation platform',
    img: 'img/projects/creafacturas.avif',
    techStack: ['nextjs', 'react', 'typescript', 'tailwind', 'sql'],
    date: new Date('2024-03-01'),
    link: 'creafacturas.es'
  },
  {
    name: 'Store Finder',
    description: 'Store Finder with Google Maps API',
    img: '/img/projects/storefinder.avif',
    techStack: ['vue', 'tailwind', 'node'],
    date: new Date('2023-05-01'),
    link: 'https://www.affenzahn.com/en/storefinder'
  },
  {
    name: 'CookMood',
    description: 'Social network for sharing food recipes',
    img: '/img/projects/cookmood.avif',
    date: new Date('2023-04-01'),
    techStack: ['laravel', 'vue', 'typescript', 'tailwind', 'sql']
  },
  {
    name: 'Burn-in fixer',
    description: `Android App that will help you remove burned pixels on your phone's OLED screen`,
    img: 'img/projects/burn-in-fixer.avif',
    techStack: ['flutter'],
    date: new Date('2022-10-01'),
    link: 'https://play.google.com/store/apps/details?id=com.gonzxlodev.burn_oled_fixer'
  },
  {
    name: 'Bullyganza',
    description: 'Website about dog events',
    img: 'img/projects/bullyganza.avif',
    techStack: ['laravel', 'vue', 'javascript', 'tailwind', 'sql'],
    date: new Date('2022-07-01')
  },
  {
    name: 'Yummy',
    description: 'Social network Android App for recipes',
    img: 'img/projects/yummy.avif',
    date: new Date('2022-04-01'),
    techStack: ['kotlin', 'firebase'],
    repository: 'https://github.com/gonzalosalmeron/yummy'
  }
]

export interface Project {
  name: string
  description: string
  img: string
  techStack: (keyof typeof techStackOptions)[]
  link?: string
  repository?: string
  date: Date
}

const techStackOptions = {
  nextjs: 'Next.js',
  laravel: 'Laravel',
  astro: 'Astro',
  node: 'Node.js',
  deno: 'Deno',
  react: 'React',
  vue: 'Vue',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
  tailwind: 'Tailwind CSS',
  flutter: 'Flutter',
  kotlin: 'Kotlin',
  ionic: 'Ionic',
  sql: 'SQL',
  firebase: 'Firebase',
  plausible: 'Plausible'
}

export const socialNetworks = [
  {
    name: 'Linkedin',
    link: 'https://linkedin.com/in/gonsalmeron'
  },
  {
    name: 'Github',
    link: 'https://github.com/gonzalosalmeron'
  },
  {
    name: 'Google Play',
    link: 'https://play.google.com/store/apps/developer?id=gonzxlodev'
  }
]
