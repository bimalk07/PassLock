const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>

            <div className='mycontainer flex justify-between items-center px-3 py-5 h-14'>
                <div className='logo font-bold'>
                    <div className="flex text-white">
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

                <button className="bg-teal-700 text-white my-5 px-3 py-1 rounded-full flex gap-1 items-center ring-2 ring-white">
                    <span className="font-bold">Github</span>
                    <img className="invert w-8 p-1" src="icons/github.png" alt="github" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0EA5E9" className="size-5 mt-1" stroke="#cccccc">
                            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                        </svg> */}