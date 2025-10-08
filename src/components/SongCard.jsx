import { useContext } from "react"

export function SongCard({ name, image, desc, id, updateSong}){
    return(
        <div onClick={()=>updateSong(id)} className="min-w-[180px] p-2 px-3 rounded cursor-pointer song-card">
            <img className="rounded" src={image}/>
            <p className="font-bold text-[13px]  mt-2 mb-1">{name}</p>
            <p className="text-slate-200 font-bold text-[11px]">{desc}</p>
        </div>
    )
}