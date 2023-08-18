// Interfaces
import { Setup } from '@interface/instant-setup';

// Mock data for instant setup
export const instantSetupMock: Setup[] = [
  {
    id: "1",
    srcSet: "/src/assets/images/setup/instant-setup-download-2x.webp",
    imageSrc: "/src/assets/images/setup/instant-setup-download.webp",
    step: 'step 1',
    title: 'Download the app',
  },
  {
    id: "2",
    srcSet: "/src/assets/images/setup/instant-setup-invite-2x.webp",
    imageSrc: "/src/assets/images/setup/instant-setup-invite.webp",
    step: "step 2",
    title: "Invite teammates",
  },
  {
    id: "3",
    srcSet: "/src/assets/images/setup/instant-setup-workspace-2x.webp",
    imageSrc: "/src/assets/images/setup/instant-setup-workspace.webp",
    step: "step 3",
    title: "Create workspace",
  },
  {
    id: "4",
    srcSet: "/src/assets/images/setup/instant-setup-track-performance-2x.webp",
    imageSrc: "/src/assets/images/setup/instant-setup-track-performance.webp",
    step: "step 4",
    title: "Track performance",
  },
];