import {
  IconAstro,
  IconDeno,
  IconFirebase,
  IconFlutter,
  IconJavaScript,
  IconKotlin,
  IconLaravel,
  IconMySQL,
  IconNextjs,
  IconNodejs,
  IconReact,
  IconTailwind,
  IconTypeScript,
  IconVue
} from './icons'

export const projects: Project[] = [
  {
    name: 'Nescafe Timer',
    slug: 'nescafe-timer',
    summary: 'Ensures your Dolce Gusto capsules brew to perfection.',
    description:
      'The idea for the creation of this project comes from the need of a family member who had a Nescafé Dolce Gusto coffee maker and when it was time to prepare the coffees, he did not know how long the machine had to be on until the lever was removed. Therefore, I developed this app based on the times suggested by the brand itself on its official website. The app provides an easy-to-use timer that guarantees optimal brewing time, ensuring every cup is made to perfection.',
    img: '/img/projects/nescafe-timer.avif',
    techStack: ['flutter'],
    date: new Date('2024-04-01'),
    link: 'https://play.google.com/store/apps/details?id=com.gonzxlodev.nescafe_timer'
  },
  {
    name: 'Creafacturas',
    slug: 'creafacturas',
    summary: 'Invoice generation platform.',
    description:
      'Creafacturas is a comprehensive platform designed to simplify the process of creating and managing invoices. It allows businesses and freelancers to generate customized invoices quickly and efficiently. The platform supports multiple formats, integrates seamlessly with SQL databases for secure data management, and is built with modern web technologies. Creafacturas not only streamlines the invoicing process but also helps users keep track of their financial records effortlessly.',
    img: '/img/projects/creafacturas.avif',
    techStack: ['nextjs', 'react', 'typescript', 'tailwind', 'sql'],
    date: new Date('2024-03-01'),
    link: 'https://creafacturas.es'
  },
  {
    name: 'Store Finder',
    slug: 'store-finder',
    summary: 'Store Finder with Google Maps API.',
    description:
      'Store Finder is a web application designed to help users locate stores and points of interest nearby. Built using Vue, Tailwind CSS, and Node.js, it leverages the Google Maps API to provide accurate and real-time location data. The app offers a user-friendly interface for searching stores based on various criteria, making it a valuable tool for customers and businesses alike. Whether you are looking for a specific shop or just exploring what’s nearby, Store Finder makes the process simple and efficient.',
    img: '/img/projects/storefinder.avif',
    techStack: ['vue', 'tailwind', 'node'],
    date: new Date('2023-05-01'),
    link: 'https://www.affenzahn.com/en/storefinder'
  },
  {
    name: 'CookMood',
    slug: 'cookmood',
    summary: 'Social network for sharing food recipes.',
    description:
      'CookMood is a social network dedicated to food lovers who enjoy sharing and discovering new recipes. Developed with Laravel, Vue, and TypeScript, the platform allows users to post their own recipes, follow other cooks, and engage with a community of like-minded food enthusiasts. The app features a sleek design, powered by Tailwind CSS, and a robust backend that ensures a seamless user experience. CookMood is the go-to platform for anyone who loves to cook, eat, and connect with others over a shared passion for food.',
    img: '/img/projects/cookmood.avif',
    date: new Date('2023-04-01'),
    techStack: ['laravel', 'vue', 'typescript', 'tailwind', 'sql']
  },
  {
    name: 'Burn-in fixer',
    slug: 'burn-in-fixer',
    summary: `Android App that helps remove burned pixels on your phone's OLED screen.`,
    description:
      'Burn-in fixer is an Android application designed to address the common issue of burn-in on OLED screens. The app uses a series of dynamic color patterns to refresh the pixels on your screen, helping to reduce and even eliminate burn-in effects. Built with Flutter, Burn-in fixer is easy to use and offers a simple, effective solution for extending the life of your device’s display. Whether you are dealing with slight screen discoloration or more severe pixel burn-in, this app provides a straightforward fix.',
    img: '/img/projects/burn-in-fixer.avif',
    techStack: ['flutter'],
    date: new Date('2022-10-01'),
    link: 'https://play.google.com/store/apps/details?id=com.gonzxlodev.burn_oled_fixer'
  },
  {
    name: 'Bullyganza',
    slug: 'bullyganza',
    summary: 'Website about dog events.',
    description:
      'Bullyganza is a website dedicated to the organization and promotion of dog events, particularly those focused on the Bully breed. The platform provides detailed information about upcoming events, including schedules, locations, and participant registration. Built with Laravel and Vue, the site is both visually appealing and functionally robust, offering a seamless user experience for dog enthusiasts. Whether you are a breeder, a competitor, or just a fan, Bullyganza is the go-to source for all things related to Bully events.',
    img: '/img/projects/bullyganza.avif',
    techStack: ['laravel', 'vue', 'javascript', 'tailwind', 'sql'],
    date: new Date('2022-07-01')
  },
  {
    name: 'Yummy',
    slug: 'yummy',
    summary: 'Social network Android App for recipes.',
    description:
      'Yummy is a mobile app designed for food enthusiasts who love to share and discover new recipes. Developed in Kotlin with Firebase integration, the app allows users to upload recipes, explore culinary content, and interact with a community of like-minded individuals. Yummy’s sleek interface and social features make it easy to connect with other food lovers, share your culinary creations, and find inspiration for your next meal. It’s the perfect platform for anyone looking to expand their culinary horizons.',
    img: '/img/projects/yummy.avif',
    date: new Date('2022-04-01'),
    techStack: ['kotlin', 'firebase'],
    repository: 'https://github.com/gonzalosalmeron/yummy'
  }
]

export interface Project {
  name: string
  slug: string
  summary: string
  description?: string
  img: string
  techStack: (keyof typeof techStackOptions)[]
  link?: string
  repository?: string
  date: Date
}

export const techStackOptions = {
  nextjs: {
    name: 'Next.js',
    icon: IconNextjs
  },
  laravel: {
    name: 'Laravel',
    icon: IconLaravel
  },
  astro: {
    name: 'Astro',
    icon: IconAstro
  },
  node: {
    name: 'Node.js',
    icon: IconNodejs
  },
  deno: {
    name: 'Deno',
    icon: IconDeno
  },
  react: {
    name: 'React',
    icon: IconReact
  },
  vue: {
    name: 'Vue',
    icon: IconVue
  },
  typescript: {
    name: 'TypeScript',
    icon: IconTypeScript
  },
  javascript: {
    name: 'JavaScript',
    icon: IconJavaScript
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: IconTailwind
  },
  flutter: {
    name: 'Flutter',
    icon: IconFlutter
  },
  kotlin: {
    name: 'Kotlin',
    icon: IconKotlin
  },
  sql: {
    name: 'SQL',
    icon: IconMySQL
  },
  firebase: {
    name: 'Firebase',
    icon: IconFirebase
  }
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
