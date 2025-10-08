import { useContext } from "react"
import { assets } from "../assets/assets"
import AudioPlayer from "./AudioPlayer";
export function Player({ currentSong }) {
    console.log("PLayer");
    console.log(currentSong)
    return (
        <div className="h-[10%] flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-2">
                <img className="w-12" src={currentSong.image} alt="song_Data" />
                <div>
                    <p className="text-[14px] font-bold">{currentSong.name}</p>
                    <p className="text-[12px] font-bold">{currentSong.desc}</p>
                </div>
            </div>
            <div className="flex flex-col w-100 items-center gap-1 m-auto">
                <AudioPlayer currentSong={currentSong} />
            </div>

        </div>
    )
}