import VideoPlayer from "./_components/video-player";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return (
    <div>
      <VideoPlayer id={id} />
    </div>
  );
}
