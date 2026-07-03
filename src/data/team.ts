import { ajeduCommunityMembers } from './ajedu-members';

export type SocialPlatform = 'twitter' | 'linkedin' | 'github' | 'website';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: SocialLink[];
  department: 'leadership' | 'engineering' | 'design' | 'marketing';
  joinedAt: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'joaquin-fernandez-amigo',
    name: 'Joaquin Fernandez Amigo',
    role: 'Coordinacion ajEdu',
    bio: 'Coordina la red internacional ajEdu y promueve proyectos, encuentros y experiencias de ajedrez educativo.',
    avatar: '/images/team/joaquin-fernandez-amigo.jpg',
    social: [],
    department: 'leadership',
    joinedAt: '2005-01-01',
  },
  ...ajeduCommunityMembers.filter((member) => member.id !== 'ajedu-member-027'),
];
