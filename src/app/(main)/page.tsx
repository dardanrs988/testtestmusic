"use client";

import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionDiv } from "@/components/motion-div";

const playlists = [
  { name: 'Lo-fi Beats', description: 'Chill beats to relax, study, and focus.', imageUrl: 'https://picsum.photos/400/400?random=1', hint: 'lofi study' },
  { name: 'Ambient Electronic', description: 'Deep, atmospheric soundscapes.', imageUrl: 'https://picsum.photos/400/400?random=2', hint: 'ambient space' },
  { name: 'Indie Rock Road Trip', description: 'Upbeat tracks for the open road.', imageUrl: 'https://picsum.photos/400/400?random=3', hint: 'indie roadtrip' },
  { name: 'Jazz in the Background', description: 'Smooth jazz for a sophisticated vibe.', imageUrl: 'https://picsum.photos/400/400?random=4', hint: 'jazz cafe' },
]

const recentlyPlayed = [
  { name: 'Midnight City', artist: 'M83', imageUrl: 'https://picsum.photos/400/400?random=5', hint: 'synthwave album' },
  { name: 'Reflektor', artist: 'Arcade Fire', imageUrl: 'https://picsum.photos/400/400?random=6', hint: 'indie album' },
  { name: 'Discovery', artist: 'Daft Punk', imageUrl: 'https://picsum.photos/400/400?random=7', hint: 'electronic album' },
  { name: 'Currents', artist: 'Tame Impala', imageUrl: 'https://picsum.photos/400/400?random=8', hint: 'psychedelic rock' },
  { name: 'Bon Iver', artist: 'Bon Iver', imageUrl: 'https://picsum.photos/400/400?random=9', hint: 'folk album' },
]

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export default function HomePage() {
  return (
    <>
      <PageHeader
        title="Welcome Back"
        description="Here's what's new in your world of music."
      />
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-headline font-semibold tracking-tight mb-4">Made for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {playlists.map((playlist, i) => (
               <MotionDiv
                key={playlist.name}
                variants={variants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={playlist.imageUrl}
                      alt={`Cover for ${playlist.name}`}
                      width={400}
                      height={400}
                      className="w-full h-auto aspect-square object-cover transition-transform group-hover:scale-110"
                      data-ai-hint={playlist.hint}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{playlist.name}</h3>
                      <p className="text-muted-foreground text-sm">{playlist.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-semibold tracking-tight mb-4">Recently Played</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
             {recentlyPlayed.map((album, i) => (
               <MotionDiv
                key={album.name}
                variants={variants}
                initial="hidden"
                animate="visible"
                custom={i + playlists.length}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                  <div className="flex flex-col gap-2">
                     <Image
                        src={album.imageUrl}
                        alt={`Album art for ${album.name}`}
                        width={400}
                        height={400}
                        className="w-full h-auto aspect-square object-cover rounded-md shadow-lg"
                        data-ai-hint={album.hint}
                      />
                      <div>
                        <h3 className="font-semibold text-base truncate">{album.name}</h3>
                        <p className="text-muted-foreground text-sm">{album.artist}</p>
                      </div>
                  </div>
              </MotionDiv>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
