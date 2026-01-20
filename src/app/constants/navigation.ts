import {
  type LucideIcon,
  HelpCircleIcon,
  LifeBuoyIcon,
  PlaySquareIcon,
  SearchIcon,
  SendIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { AiOutlineLike } from "react-icons/ai";
import { TiHomeOutline } from "react-icons/ti";
import { IoTicket } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { LuLibraryBig } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";

export const data = {
  navMain: [
    {
      title: "Início",
      url: "/app",
      icon: TiHomeOutline,
    },
    {
      title: "Shorts",
      url: "#",
      icon: IoTicket,
    },
    {
      title: "Inscrições",
      url: "#",
      icon: UsersIcon,
    },
    {
      title: "Você",
      url: "#",
      icon: UserIcon,
    },
    {
      title: "Histórico",
      url: "#",
      icon: TfiTimer,
    },
    {
      title: "Playlist",
      url: "#",
      icon: LuLibraryBig,
    },
    {
      title: "Assistir mais tarde",
      url: "#",
      icon: FaRegClock,
    },
    {
      title: "Vídeos com gostei",
      url: "#",
      icon: AiOutlineLike,
    },
    {
      title: "Seus vídeos",
      url: "#",
      icon: PlaySquareIcon,
    },
    {
      title: "Explorar",
      url: "#",
      icon: SearchIcon,
      items: [
        {
          title: "Música",
          url: "#",
        },
        {
          title: "Filmes",
          url: "#",
        },
        {
          title: "Ao vivo",
          url: "#",
        },
        {
          title: "Jogos",
          url: "#",
        },
        {
          title: "Notícias",
          url: "#",
        },
        {
          title: "Esportes",
          url: "#",
        },
        {
          title: "Cursos",
          url: "#",
        },
        {
          title: "Podcasts",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Suporte",
      url: "#",
      icon: HelpCircleIcon,
    },
  ],
};
