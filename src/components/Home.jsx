import { albumsData, songsData } from "../assets/assets";
import { AlbumCard } from "./AlbumCard";
import { Navbar } from "./Navbar";
import { SongCard } from "./SongCard";

export function Home({ updateSong}) {
    return (
        <>
            <Navbar />
            <div className="my-2 blurred-box p-5">
                <h1 className="mt-8 font-semibold text-2xl">Feature Charts</h1>
                <div className="flex overflow-auto mb-20">
                    {albumsData.map((album, index) => (
                        <AlbumCard key={index} id={index} image={album.image} name={album.name} desc={album.desc} />
                    ))}
                </div>

                <h1 className="my-2 font-bold text-2xl">Today's Most Popular Songs</h1>
                <div className="flex overflow-auto mb-20">
                    {songsData.map((album, index) => (
                        <SongCard updateSong={updateSong} key={index} id={index} image={album.image} name={album.name} desc={album.desc} />
                    ))}
                </div>
            </div>
        </>
    )
}