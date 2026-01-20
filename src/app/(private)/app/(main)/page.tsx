import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/_components/ui/avatar";
import Link from "next/link";
import { videos } from "@/data/videos";

export default function Page() {
  return (
    <main className="px-4 py-8 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold">Vídeos em Destaque</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {videos.map((item) => (
          <Link href={`/app/watch/${item.id}`} key={item.id}>
            <Card className="group bg-background hover:shadow-primary/10 overflow-hidden rounded-2xl border-none py-0 transition-all hover:scale-[1.02] hover:shadow-lg">
              {/* Thumbnail com iframe */}
              <div className="relative aspect-video w-full overflow-hidden">
                <iframe
                  src={item.videoUrl}
                  className="pointer-events-none h-full w-full scale-110"
                  title={item.title}
                />
                {/* Overlay para interação */}
                <div className="absolute inset-0 bg-transparent transition-colors group-hover:bg-black/10" />
              </div>
              <CardContent className="px-3 py-4">
                <div className="flex gap-3">
                  <Avatar className="h-9 w-9 flex-shrink-0">
                    <AvatarImage
                      src={item.channelAvatar}
                      alt={item.channelName}
                    />
                    <AvatarFallback>
                      {item.channelName.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <h2 className="line-clamp-2 text-base leading-tight font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {item.channelName}
                    </p>
                    <div className="text-muted-foreground mt-0.5 flex items-center gap-1 text-xs">
                      <span>{item.views} visualizações</span>
                      <span>•</span>
                      <span>
                        {new Date(item.publishedAt).toLocaleDateString(
                          "pt-BR",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
