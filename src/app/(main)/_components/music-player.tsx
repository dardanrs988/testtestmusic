import Image from "next/image";
import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, ListMusic, Laptop2, Volume2, Maximize2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";


export function MusicPlayer() {
  return (
    <div className="grid grid-cols-3 h-24 px-4">
      <div className="flex items-center gap-4">
        <Image
          src="https://picsum.photos/seed/gkmc/200"
          alt="Album art for good kid, m.A.A.d city"
          width={64}
          height={64}
          className="rounded-md"
          data-ai-hint="compton story"
        />
        <div>
          <h3 className="font-semibold text-base truncate">Money Trees</h3>
          <p className="text-muted-foreground text-sm">Kendrick Lamar, Jay Rock</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Shuffle />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <SkipBack />
          </Button>
          <Button size="icon" className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90">
            <Play className="fill-primary-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <SkipForward />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
            <Repeat />
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-xs text-muted-foreground">1:24</span>
            <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
            <span className="text-xs text-muted-foreground">4:05</span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <Mic2 />
        </Button>
         <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <ListMusic />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <Laptop2 />
        </Button>
        <div className="flex items-center gap-2 w-32">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Volume2 />
            </Button>
            <Slider defaultValue={[50]} max={100} step={1} />
        </div>
         <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <Maximize2 />
        </Button>
      </div>
    </div>
  )
}
