"use client";

import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { MotionDiv } from "@/components/motion-div";

const genres = [
  { name: 'Hip-Hop', imageUrl: 'https://picsum.photos/seed/hiphop/600/400', hint: 'urban microphone' },
  { name: 'Pop', imageUrl: 'https://picsum.photos/seed/pop/600/400', hint: 'colorful stage' },
  { name: 'R&B', imageUrl: 'https://picsum.photos/seed/rnb/600/400', hint: 'soulful singer' },
  { name: 'Drill', imageUrl: 'https://picsum.photos/seed/drill/600/400', hint: 'city night' },
  { name: 'Rock', imageUrl: 'https://picsum.photos/seed/rock/600/400', hint: 'electric guitar' },
  { name: 'Indie', imageUrl: 'https://picsum.photos/seed/indie/600/400', hint: 'vintage camera' },
  { name: 'Electronic', imageUrl: 'https://picsum.photos/seed/electronic/600/400', hint: 'dj console' },
  { name: 'Jazz', imageUrl: 'https://picsum.photos/seed/jazz/600/400', hint: 'saxophone player' },
]

const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut"
    }
  })
}

export default function SearchPage() {
  return (
    <>
      <PageHeader title="Search" description="Find your next favorite artist, album, or playlist." />
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="What do you want to listen to?" className="pl-10 h-12 text-lg" />
      </div>

      <section>
        <h2 className="text-2xl font-headline font-semibold tracking-tight mb-4">Browse All</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {genres.map((genre, i) => (
            <MotionDiv
              key={genre.name}
              variants={variants}
              initial="hidden"
              animate="visible"
              custom={i}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={genre.imageUrl}
                alt={`Cover for ${genre.name}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover aspect-video transition-transform group-hover:scale-110"
                data-ai-hint={genre.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute bottom-3 left-3 font-bold text-2xl text-foreground">
                {genre.name}
              </h3>
            </MotionDiv>
          ))}
        </div>
      </section>
    </>
  )
}
