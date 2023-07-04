interface DeveloperLanguage {
  name: string;
  level: 'Native' | 'Professional' | 'Intermediate' |'Basic';
}

interface DeveloperEducation {
  degree: string;
  school: string;
  time: string;
}

interface DeveloperContact {
  email: string;
  phone: string;
  website?: {
    name: string;
    url: string;
  },
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface DeveloperProfile {
  name: string;
  tagline: string;
}

interface Developer {
  profile: DeveloperProfile;
  contact: DeveloperContact;
  education: DeveloperEducation[];
  languages: DeveloperLanguage[];
  interests: string[];
}
