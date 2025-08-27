import Image from "next/image";
import { Clock, PlayCircle } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const playlist = {
  id: "1",
  name: "90s Hip-Hop Classics",
  description: "Legendary tracks from the golden era of hip-hop.",
  imageUrl: "https://picsum.photos/seed/90s/800/800",
  imageHint: "boombox graffiti",
  owner: "Aura Music",
  trackCount: 25,
  duration: "1 hr 45 min",
};

const tracks = [
  { id: 1, title: "C.R.E.A.M.", artist: "Wu-Tang Clan", album: "Enter the Wu-Tang (36 Chambers)", duration: "4:12" },
  { id: 2, title: "Nuthin' but a 'G' Thang", artist: "Dr. Dre, Snoop Dogg", album: "The Chronic", duration: "3:58" },
  { id: 3, title: "Juicy", artist: "The Notorious B.I.G.", album: "Ready to Die", duration: "5:02" },
  { id: 4, title: "California Love", artist: "2Pac, Dr. Dre, Roger Troutman", album: "All Eyez on Me", duration: "4:44" },
  { id: 5, title: "Shook Ones, Pt. II", artist: "Mobb Deep", album: "The Infamous", duration: "5:24" },
  { id: 6, title: "Regulate", artist: "Warren G, Nate Dogg", album: "Regulate...G Funk Era", duration: "4:08" },
  { id: 7, title: "It Was a Good Day", artist: "Ice Cube", album: "The Predator", duration: "4:19" },
];

export default function PlaylistPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8">
      <PageHeader className="items-end gap-6">
        <Image
          src={playlist.imageUrl}
          alt={`Cover for ${playlist.name}`}
          width={250}
          height={250}
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 aspect-square object-cover rounded-md shadow-2xl"
          data-ai-hint={playlist.imageHint}
        />
        <div className="space-y-3">
          <p className="text-sm font-semibold">Playlist</p>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter">
            {playlist.name}
          </h1>
          <p className="text-muted-foreground hidden md:block">{playlist.description}</p>
          <p className="text-sm">
            Created by <span className="font-semibold text-foreground">{playlist.owner}</span> • {playlist.trackCount} songs, about {playlist.duration}
          </p>
        </div>
      </PageHeader>
      
      <div className="space-y-4">
        <Button size="lg" className="rounded-full !h-14 !w-14 p-0">
          <PlayCircle className="h-10 w-10 fill-background" />
        </Button>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Album</TableHead>
              <TableHead className="text-right"><Clock className="inline-block h-4 w-4" /></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tracks.map((track, index) => (
              <TableRow key={track.id} className="group font-medium">
                <TableCell className="text-muted-foreground">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-base text-foreground group-hover:text-primary">{track.title}</span>
                    <span className="text-sm text-muted-foreground">{track.artist}</span>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{track.album}</TableCell>
                <TableCell className="text-muted-foreground text-right">{track.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
