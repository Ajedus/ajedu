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

export const teamMembers: TeamMember[] = [...ajeduCommunityMembers].sort((a, b) =>
  a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }),
);
