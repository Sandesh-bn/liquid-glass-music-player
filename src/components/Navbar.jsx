import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img onClick={()=>navigate(-1)} className="album-card w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} />
                    <img onClick={()=>navigate(+1)} className="album-card w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} />
                    <p className="bg-white text-black text-[13px] px-4 py-1 rounded-2xl">All</p>
                <p className="bg-[#242424] cursor-pointer glass-card text-[13px]  px-4 py-1 rounded-2xl">Music</p>
                <p className="bg-[#242424] cursor-pointer glass-card text-[13px]  px-4 py-1 rounded-2xl">Podcasts</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-black py-1 px-3 rounded-2xl  glass-card text-[13px] text-[15px]">Install App</p>
                    <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">U</p>
                </div>

            </div>
            {/* <div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-2xl">All</p>
                <p className="bg-[#242424] cursor-pointer  px-4 py-1 rounded-2xl">Music</p>
                <p className="bg-[#242424] cursor-pointer  px-4 py-1 rounded-2xl">Podcasts</p>
            </div> */}
        </>
    )
}