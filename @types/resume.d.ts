interface Experience {
  position: string;
  company: string;
  location: string;
  time: string;
  description: string;
  technologies: string[];
}

interface Project {
  header: string;
  items: {
    name: string;
    url: string;
    description: string;
  }[];
}

interface Skill {
  name: string;
  value: number;
}

interface Resume {
  summary: string;
  experiences: Experience[];
  projects: Project;
  skills: Skill[];
}
