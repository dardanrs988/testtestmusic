"use client";

import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionDiv } from "@/components/motion-div";

const playlists = [
  { name: '90s Hip-Hop Classics', description: 'Legendary tracks from the golden era.', imageUrl: 'https://picsum.photos/400/400?random=10', hint: 'hiphop graffiti' },
  { name: 'Drill Essentials', description: 'The hardest tracks from the drill scene.', imageUrl: 'https://picsum.photos/400/400?random=11', hint: 'drill music' },
  { name: 'West Coast Hits', description: 'Iconic anthems from the Westside.', imageUrl: 'https://picsum.photos/400/400?random=12', hint: 'california coast' },
  { name: 'Rap Caviar', description: 'The latest and greatest in modern rap.', imageUrl: 'https://picsum.photos/400/400?random=13', hint: 'luxury lifestyle' },
]

const recentlyPlayed = [
  { name: 'All Eyez on Me', artist: '2Pac', imageUrl: 'https://picsum.photos/seed/alleyez/400/400', hint: 'tupac portrait' },
  { name: 'The Voice', artist: 'Lil Durk', imageUrl: 'https://picsum.photos/seed/thevoice/400/400', hint: 'chicago artist' },
  { name: 'good kid, m.A.A.d city', artist: 'Kendrick Lamar', imageUrl: 'https://picsum.photos/seed/gkmc/400/400', hint: 'compton story' },
  { name: 'Ready to Die', artist: 'The Notorious B.I.G.', imageUrl: 'https://picsum.photos/seed/readvtodie/400/400', hint: 'brooklyn rap' },
  { name: 'Get Rich or Die Tryin\'', artist: '50 Cent', imageUrl: 'https://picsum.photos/seed/getrich/400/400', hint: 'ny classic' },
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
        description="Your daily dose of hip-hop."
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
