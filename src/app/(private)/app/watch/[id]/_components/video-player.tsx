"use client";

import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { Separator } from "@/app/_components/ui/separator";
import {
  HeartIcon,
  Share2,
  Bookmark,
  Scissors,
  Download,
  MoreHorizontal,
  Eye,
  Calendar,
} from "lucide-react";
import { getVideoById, getRelatedVideos, Video } from "@/data/videos";
import { CommentsSection } from "./comments-section";

interface VideoPlayerProps {
  id: string;
}

export const VideoPlayer = ({ id }: VideoPlayerProps) => {
  const video = getVideoById(id);
  const relatedVideos = getRelatedVideos(id, 6);

  if (!video) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold">Vídeo não encontrado</h2>
          <p className="text-muted-foreground mt-2">
            O vídeo que você está procurando não existe.
          </p>
          <Link href="/app">
            <Button className="mt-4">Voltar para a página inicial</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8">
      {/* Seção Principal - Vídeo e Comentários */}
      <div className="flex w-full flex-col lg:w-2/3 xl:w-3/4">
        {/* Player do Vídeo */}
        <Card className="aspect-video w-full overflow-hidden rounded-2xl border-0 bg-black p-0">
          <iframe
            src={video.videoUrl}
            title={video.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Card>

        {/* Informações do Vídeo */}
        <div className="mt-4 w-full">
          <h1 className="text-xl leading-tight font-bold lg:text-2xl">
            {video.title}
          </h1>

          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Info do Canal */}
            <div className="flex items-center gap-3">
              <Avatar className="ring-offset-background h-10 w-10 ring-2 ring-offset-2">
                <AvatarImage src={video.channelAvatar} />
                <AvatarFallback>
                  {video.channelName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{video.channelName}</p>
                <p className="text-muted-foreground text-xs">
                  {video.subscribers} inscritos
                </p>
              </div>
              <Button className="ml-2 rounded-full" size="sm">
                Inscrever-se
              </Button>
            </div>

            {/* Ações do Vídeo */}
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="secondary" className="rounded-full" size="sm">
                <HeartIcon className="mr-1 h-4 w-4" />
                {video.likes}
              </Button>
              <Button variant="secondary" className="rounded-full" size="sm">
                <Share2 className="mr-1 h-4 w-4" />
                Compartilhar
              </Button>
              <Button variant="secondary" className="rounded-full" size="sm">
                <Bookmark className="mr-1 h-4 w-4" />
                Salvar
              </Button>
              <Button variant="secondary" className="rounded-full" size="sm">
                <Scissors className="mr-1 h-4 w-4" />
                Clipe
              </Button>
              <Button variant="secondary" className="rounded-full" size="sm">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="secondary" className="rounded-full" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Descrição */}
          <Card className="bg-secondary/50 mt-4 rounded-xl p-4">
            <div className="mb-2 flex flex-wrap items-center gap-3 text-sm font-medium">
              <span className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {video.views} visualizações
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(video.publishedAt).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {video.description}
            </p>
          </Card>

          <Separator className="my-6" />

          {/* Seção de Comentários */}
          <CommentsSection videoId={id} />
        </div>
      </div>

      {/* Sidebar - Vídeos Relacionados */}
      <aside className="w-full space-y-4 lg:w-1/3 xl:w-1/4">
        <h3 className="mb-4 text-lg font-semibold">Vídeos relacionados</h3>
        {relatedVideos.map((relatedVideo) => (
          <RelatedVideoCard key={relatedVideo.id} video={relatedVideo} />
        ))}
      </aside>
    </div>
  );
};

interface RelatedVideoCardProps {
  video: Video;
}

function RelatedVideoCard({ video }: RelatedVideoCardProps) {
  return (
    <Link
      href={`/app/watch/${video.id}`}
      className="group hover:bg-secondary/50 flex gap-3 rounded-xl p-2 transition-colors"
    >
      <div className="relative aspect-video h-24 flex-shrink-0 overflow-hidden rounded-lg">
        <iframe
          src={video.videoUrl}
          className="pointer-events-none h-full w-full scale-110"
          title={video.title}
        />
        <div className="absolute inset-0 bg-transparent transition-colors group-hover:bg-black/10" />
      </div>
      <div className="flex min-w-0 flex-col">
        <h4 className="group-hover:text-primary line-clamp-2 text-sm leading-tight font-medium transition-colors">
          {video.title}
        </h4>
        <p className="text-muted-foreground mt-1 text-xs">
          {video.channelName}
        </p>
        <div className="text-muted-foreground mt-0.5 flex items-center gap-1 text-xs">
          <span>{video.views} views</span>
          <span>•</span>
          <span>
            {new Date(video.publishedAt).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "short",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default VideoPlayer;
