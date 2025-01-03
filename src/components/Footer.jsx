import React from 'react'

const Footer = () => {
    return (
        <div className="bg-slate-800 text-white w-full relative bottom-0">
            <div className='logo font-bold'>
                <div className="flex items-center justify-center text-white">
                    <span className='text-white text-2xl'>Pass</span>
                    <span className='text-teal-500 text-2xl'>Lock</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="size-7" aria-labelledby="title"
                        aria-describedby="desc" role="img" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect data-name="layer3"
                            x="10" y="30" width="44" height="32" rx="6" ry="6" fill="#fbaa51"></rect>
                        <path data-name="layer2" d="M19 30V15A13 13 0 0 1 32 2a13 13 0 0 1 13 13v15h-4V15a9 9 0 0 0-18 0v15z"
                            fill="#aabfce"></path>
                        <path data-name="layer1" d="M34 49a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2 2 2 0 0 1 2 2z"
                            fill="#536897"></path>
                        <path data-name="opacity" d="M10 36v20a6 6 0 0 0 5 5.9V30.1a6 6 0 0 0-5 5.9z"
                            fill="#000028" opacity=".15"></path>
                        <path data-name="opacity" d="M49 30.1v31.8a6 6 0 0 0 5-5.9V36a6 6 0 0 0-5-5.9z"
                            fill="#fff" opacity=".25"></path>
                        <rect data-name="stroke" x="10" y="30" width="44" height="32" rx="6"
                            ry="6" fill="none" stroke="#2e4369" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2"></rect>
                        <path data-name="stroke" d="M19 30V15A13 13 0 0 1 32 2a13 13 0 0 1 13 13v15M34 49a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2 2 2 0 0 1 2 2z"
                            fill="none" stroke="#2e4369" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2"></path>
                        <path data-name="stroke" d="M23 30V15a9 9 0 0 1 18 0v15" fill="none"
                            stroke="#2e4369" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                Created with<img className='w-6 m-1' src="icons/heart.png" alt="heart" />by Bimal
            </div>
        </div>
    )
}

export default Footer