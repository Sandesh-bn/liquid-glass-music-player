import { assets } from '../assets/assets.js';
import { useNavigate } from 'react-router-dom';

export function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="w-[20%] h-full p-2 flex-col gap-6 text-white hidden lg:flex">
            <div className="h-[25%]  flex flex-col justify-around">
                <div onClick={()=>navigate('/')} className="flex  glass-effect glass-diagonal-gradient  glass-button items-center gap-3 pl-8 cursor-pointer">
                    <img className='w-5' src={assets.home_icon} />
                    <p  className='text-[13px] font-bold'>Home</p>
                </div>
                <div className="flex glass-effect glass-button items-center gap-3 pl-8 cursor-pointer">
                    <img className='w-5' src={assets.search_icon} />
                    <p contentEditable={true} className='text-[13px] font-bold'>Search</p>
                    
                </div>
            </div>
            <div className='glass-effect glass-diagonal-gradient  glass-button h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.stack_icon} />
                        <p className='text-[13px] font-bold'>Your library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-4' src={assets.arrow_icon} />
                    </div>
                </div>
                <div className='glass-diagonal-gradient p-4 bg-[#242424] glass-card my-8 font-light flex flex-col items-start justify-start gap-1 pl-4'>
                    <p className='text-[13px]'>Create your first playlist</p>
                    <button className="px-4 py-1.5 bg-white text-[12px] text-black font-bold rounded-full mt-4">Create Playlist</button>
                </div>
                <div className="glass-diagonal-gradient p-4 bg-[#242424] glass-card my-8  font-light flex flex-col items-start justify-start gap-1 pl-4 mt-4">
                    <p className='text-[13px]'>Let's find some podcasts to follow</p>
                    <button className="px-4 py-1.5 bg-white text-[12px] text-black font-bold rounded-full mt-4">Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}