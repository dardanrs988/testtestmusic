
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const playlists = [
  { name: '90s Hip-Hop Classics', description: '25 songs', imageUrl: 'https://picsum.photos/seed/90s/400/400', hint: 'boombox radio' },
  { name: 'Drill Essentials', description: '42 songs', imageUrl: 'https://picsum.photos/seed/drill/400/400', hint: 'dark alley' },
  { name: 'Rap Caviar', description: '100 songs', imageUrl: 'https://picsum.photos/seed/caviar/400/400', hint: 'gold chain' },
  { name: 'Lofi Beats', description: '120 songs', imageUrl: 'https://picsum.photos/seed/lofi/400/400', hint: 'rainy window' },
];

const artists = [
  { name: '2Pac', imageUrl: 'https://picsum.photos/seed/2pac/400/400', hint: 'rapper portrait' },
  { name: 'The Notorious B.I.G.', imageUrl: 'https://picsum.photos/seed/big/400/400', hint: 'king of new york' },
  { name: 'Kendrick Lamar', imageUrl: 'https://picsum.photos/seed/kendrick/400/400', hint: 'modern poet' },
  { name: 'J. Cole', imageUrl: 'https://picsum.photos/seed/jcole/400/400', hint: 'dreamville artist' },
]

const albums = [
  { name: 'All Eyez on Me', artist: '2Pac', imageUrl: 'https://picsum.photos/seed/alleyez/400/400', hint: 'tupac album' },
  { name: 'good kid, m.A.A.d city', artist: 'Kendrick Lamar', imageUrl: 'https://picsum.photos/seed/gkmc/400/400', hint: 'van cover' },
  { name: 'Ready to Die', artist: 'The Notorious B.I.G.', imageUrl: 'https://picsum.photos/seed/readytodie/400/400', hint: 'baby cover' },
  { name: '2014 Forest Hills Drive', artist: 'J. Cole', imageUrl: 'https://picsum.photos/seed/fhd/400/400', hint: 'rooftop photo' },
]

export default function LibraryPage() {
  return (
    <>
      <PageHeader title="Your Library" description="All your music in one place." />
      <Tabs defaultValue="playlists" className="space-y-8">
        <TabsList>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
        </TabsList>
        <TabsContent value="playlists">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {playlists.map((playlist) => (
              <Card key={playlist.name} className="group overflow-hidden">
                <CardContent className="p-0">
                  <Image src={playlist.imageUrl} alt={playlist.name} width={400} height={400} className="w-full h-auto aspect-square object-cover transition-transform group-hover:scale-110" data-ai-hint={playlist.hint} />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{playlist.name}</h3>
                    <p className="text-muted-foreground text-sm">{playlist.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="artists">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {artists.map((artist) => (
              <div key={artist.name} className="flex flex-col items-center gap-3 text-center">
                 <Image src={artist.imageUrl} alt={artist.name} width={400} height={400} className="w-32 h-32 aspect-square object-cover rounded-full shadow-lg" data-ai-hint={artist.hint} />
                 <h3 className="font-semibold">{artist.name}</h3>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="albums">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {albums.map((album) => (
              <div key={album.name} className="group">
                  <div className="flex flex-col gap-2">
                     <Image src={album.imageUrl} alt={album.name} width={400} height={400} className="w-full h-auto aspect-square object-cover rounded-md shadow-lg" data-ai-hint={album.hint} />
                      <div>
                        <h3 className="font-semibold text-base truncate">{album.name}</h3>
                        <p className="text-muted-foreground text-sm">{album.artist}</p>
                      </div>
                  </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
