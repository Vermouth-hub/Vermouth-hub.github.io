import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  demoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  demoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Custom System based on Django',
    description: 'A custom system based on Django and the database MySQL. ',
    demoLink: 'https://github.com/Vermouth-hub/CRM-System-based-Django',
    tags: ['Python', 'MySQL', 'Django']
  },
  {
    name: 'SmartPlan App',
    description: 'A smart plan app to manage their business plan.',
    demoLink: 'https://github.com/Vermouth-hub/HarmonyOS_SmartPlan',
    // demoLinkRel: 'nofollow noopener noreferrer',
    tags: ['HarmonyOS', 'ArkTS']
  },
  {
    name: 'TreeMind',
    description: 'A tool used to reproduce Android crash automatically.',
    demoLink: 'https://github.com/Vermouth-hub/TreeMind',
    tags: ['Crash Reproduction', 'Android']
  }
//   {
//     ...(await getRepositoryDetails('devaradise/paradise-ui')),
//     name: 'Paradise UI',
//     demoLink: 'https://paradise-ui.com',
//     postLink: 'https://devaradise.com/how-i-build-paradise-ui-react-component-library/',
//     tags: ['React', 'UI Library']
//   },
//   {
//     ...(await getRepositoryDetails('syakirurahman/react-lab')),
//     name: 'React Lab',
//     demoLink: 'https://devaradise.com/lab/react/',
//     tags: ['React']
//   },
//   {
//     ...(await getRepositoryDetails('syakirurahman/pokemon-catcher')),
//     name: 'Pokemon Catcher',
//     demoLink: 'https://pokemon-catcher-18636.web.app/',
//     tags: ['Hobby']
//   },
//   {
//     ...(await getRepositoryDetails('syakirurahman/movie-nominations')),
//     name: 'Movie Nominations',
//     demoLink: 'https://movie-nominations-c21c3.web.app/',
//     tags: ['Hobby']
//   },
//   {
//     ...(await getRepositoryDetails('syakirurahman/organization-tree')),
//     name: 'Organization tree',
//     demoLink: 'https://organization-tree-2a446.web.app/',
//     tags: ['Hobby']
//   }
]
