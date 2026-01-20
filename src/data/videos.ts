export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  channelName: string;
  channelAvatar: string;
  subscribers: string;
  views: string;
  likes: string;
  publishedAt: string;
}

export interface Comment {
  id: string;
  videoId: string;
  author: string;
  authorAvatar: string;
  content: string;
  likes: number;
  publishedAt: string;
  replies?: Comment[];
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Introdução ao Next.js 14 - Tutorial Completo",
    description:
      "Neste vídeo, vamos aprender os fundamentos do Next.js 14, incluindo App Router, Server Components e muito mais. Um guia completo para iniciantes e desenvolvedores intermediários.",
    thumbnailUrl: "https://i.ytimg.com/vi/tfSS1e3kYeo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tfSS1e3kYeo?si=VPAB5xUaxOui9Y8x",
    channelName: "DevMaster",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevMaster",
    subscribers: "2.5M",
    views: "1.2M",
    likes: "45K",
    publishedAt: "2024-01-15",
  },
  {
    id: "2",
    title: "React Hooks Avançado - useEffect, useMemo e useCallback",
    description:
      "Aprenda a usar os hooks mais importantes do React de forma eficiente. Dicas de performance e boas práticas para seus projetos.",
    thumbnailUrl: "https://i.ytimg.com/vi/tfSS1e3kYeo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tfSS1e3kYeo?si=VPAB5xUaxOui9Y8x",
    channelName: "ReactBrasil",
    channelAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=ReactBrasil",
    subscribers: "890K",
    views: "567K",
    likes: "23K",
    publishedAt: "2024-02-20",
  },
  {
    id: "3",
    title: "TypeScript do Zero ao Profissional",
    description:
      "Curso completo de TypeScript para desenvolvedores JavaScript. Aprenda tipagem estática, interfaces, generics e muito mais.",
    thumbnailUrl: "https://i.ytimg.com/vi/tfSS1e3kYeo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tfSS1e3kYeo?si=VPAB5xUaxOui9Y8x",
    channelName: "TypeScriptPro",
    channelAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=TypeScriptPro",
    subscribers: "1.1M",
    views: "890K",
    likes: "34K",
    publishedAt: "2024-03-10",
  },
  {
    id: "4",
    title: "Tailwind CSS - Design System Completo",
    description:
      "Crie interfaces incríveis com Tailwind CSS. Aprenda a criar seu próprio design system e componentes reutilizáveis.",
    thumbnailUrl: "https://i.ytimg.com/vi/tfSS1e3kYeo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tfSS1e3kYeo?si=VPAB5xUaxOui9Y8x",
    channelName: "CSSMaster",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CSSMaster",
    subscribers: "750K",
    views: "432K",
    likes: "18K",
    publishedAt: "2024-01-28",
  },
  {
    id: "5",
    title: "Node.js e Express - API REST do Zero",
    description:
      "Construa uma API REST completa com Node.js e Express. Inclui autenticação JWT, validação e boas práticas.",
    thumbnailUrl: "https://i.ytimg.com/vi/tfSS1e3kYeo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tfSS1e3kYeo?si=VPAB5xUaxOui9Y8x",
    channelName: "BackendBR",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BackendBR",
    subscribers: "1.8M",
    views: "1.5M",
    likes: "67K",
    publishedAt: "2024-02-05",
  },
  {
    id: "6",
    title: "Docker para Desenvolvedores - Guia Prático",
    description:
      "Aprenda Docker de forma prática. Containerize suas aplicações e simplifique seu fluxo de desenvolvimento.",
    thumbnailUrl: "https://i.ytimg.com/vi/tfSS1e3kYeo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tfSS1e3kYeo?si=VPAB5xUaxOui9Y8x",
    channelName: "DevOpsNinja",
    channelAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=DevOpsNinja",
    subscribers: "560K",
    views: "234K",
    likes: "12K",
    publishedAt: "2024-03-01",
  },
  {
    id: "7",
    title: "Git e GitHub - Fluxo de Trabalho Profissional",
    description:
      "Domine Git e GitHub como um profissional. Aprenda branching, merging, rebase e colaboração em equipe.",
    thumbnailUrl: "https://i.ytimg.com/vi/tfSS1e3kYeo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tfSS1e3kYeo?si=VPAB5xUaxOui9Y8x",
    channelName: "GitMaster",
    channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GitMaster",
    subscribers: "2.1M",
    views: "978K",
    likes: "41K",
    publishedAt: "2024-02-12",
  },
];

export const comments: Comment[] = [
  {
    id: "c1",
    videoId: "1",
    author: "João Silva",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=joao",
    content:
      "Excelente vídeo! Muito bem explicado, ajudou bastante no meu projeto.",
    likes: 234,
    publishedAt: "2024-01-16",
    replies: [
      {
        id: "c1r1",
        videoId: "1",
        author: "DevMaster",
        authorAvatar:
          "https://api.dicebear.com/7.x/avataaars/svg?seed=DevMaster",
        content: "Obrigado João! Fico feliz em ajudar 🙏",
        likes: 45,
        publishedAt: "2024-01-16",
      },
    ],
  },
  {
    id: "c2",
    videoId: "1",
    author: "Maria Santos",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    content:
      "Finalmente entendi Server Components! Obrigada pelo conteúdo de qualidade.",
    likes: 156,
    publishedAt: "2024-01-17",
  },
  {
    id: "c3",
    videoId: "1",
    author: "Pedro Oliveira",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pedro",
    content: "Poderia fazer um vídeo sobre Server Actions? Seria muito útil!",
    likes: 89,
    publishedAt: "2024-01-18",
  },
  {
    id: "c4",
    videoId: "2",
    author: "Ana Costa",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ana",
    content: "Melhor explicação de useCallback que já vi! 👏",
    likes: 178,
    publishedAt: "2024-02-21",
  },
  {
    id: "c5",
    videoId: "2",
    author: "Lucas Ferreira",
    authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lucas",
    content:
      "Muito bom! Consegui otimizar minha aplicação seguindo essas dicas.",
    likes: 67,
    publishedAt: "2024-02-22",
  },
];

export function getVideoById(id: string): Video | undefined {
  return videos.find((video) => video.id === id);
}

export function getCommentsByVideoId(videoId: string): Comment[] {
  return comments.filter((comment) => comment.videoId === videoId);
}

export function getRelatedVideos(
  currentVideoId: string,
  limit: number = 5,
): Video[] {
  return videos.filter((video) => video.id !== currentVideoId).slice(0, limit);
}
