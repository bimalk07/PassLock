import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()

        const parsedPasswords = passwords;
        console.log(parsedPasswords);
        setPasswordArray(parsedPasswords);

        // Initialize visibility state for each password        
        setIsPasswordVisible(new Array(parsedPasswords.length).fill(false));
    }

    //On starting the website, load the passwords
    useEffect(() => {
        getPasswords()
    }, [])

    //Toggle each password
    const togglePasswordVisibility = (index) => {
        setIsPasswordVisible(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    }

    const copyText = (text) => {
        toast.success('Text Copied', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text)
    }

    const showPassword = () => {
        passwordRef.current.type = "text"
        if (ref.current.src.includes('icons/hidden.png')) {
            ref.current.src = 'icons/eye.png'
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = 'icons/hidden.png'
            passwordRef.current.type = "text"
        }
    }

    //On saving the passwords
    const savePassword = async () => {
        if (form.site.length >= 1 && form.username.length >= 1 && form.password.length >= 1) {

            await fetch("http://localhost:3000/",
                { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            await fetch("http://localhost:3000/",
                { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })

            // localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))

            setform({ site: "", username: "", password: "" })
            toast.success('Successfully Saved', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            })
        }
        else {
            toast.error('Error: Invalid Length', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            })
        }
    }

    const editPassword = async (id) => {
        setform({ ...passwordArray.filter(item => item.id === id)[0], id: id })
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const deletePassword = async (id) => {
        let c = confirm("Are you sure want to delete ?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))

            let res = await fetch("http://localhost:3000/",
                { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })

            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))

            toast.success('Successfully Deleted', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    // const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // const togglePasswordVisibility = () => {
    //     setIsPasswordVisible(!isPasswordVisible);
    // }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="absolute inset-0 -z-10 h-full w-full bg-teal-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="p-3 md:mycontainer min-h-[88.2vh] ">
                <h1 className='flex text-4xl font-bold justify-center'>
                    <span>Pass</span>
                    <span className='text-teal-700'>Lock</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="size-9" aria-labelledby="title"
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
                </h1>

                <p className='text-teal-700 text-lg font-semibold text-center '>Secure your Secrets</p>

                <div className="flex flex-col text-black  items-center p-4 gap-4">
                    <input value={form.site} onChange={handleChange} name="site" id="site" placeholder='Website or URL' className='rounded-full border-2 border-teal-800 p-4 py-1 w-full focus:outline-none' type="text" />
                    <div className="flex flex-col md:flex-row w-full justify-center gap-4">
                        <input value={form.username} onChange={handleChange} name="username" id="username" placeholder='Username' className='rounded-full border-2 border-teal-800 p-4 py-1 w-full focus:outline-none' type="text" />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} name="password" id="password" onChange={handleChange} placeholder='Password' className='rounded-full border-2 border-teal-800 p-4 py-1 w-full focus:outline-none' type="password" />
                            <span onClick={showPassword} className="absolute right-[3px] top-[5px] cursor-pointer">
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>

                    <button onClick={savePassword} className='flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 rounded-full px-10 py-2 ring-white ring-2'>
                        <img width="30" height="50" src="https://img.icons8.com/external-anggara-glyph-anggara-putra/50/1A1A1A/external-add-to-list-media-anggara-glyph-anggara-putra.png"
                            alt="external-add-to-list-media-anggara-glyph-anggara-putra" />
                        <span className='font-semibold'>Save</span>
                    </button>
                </div>
                <div className="passwords">
                    <h3 className="font-bold text-2xl py-2">Saved Passwords</h3>
                    {passwordArray.length === 0 && <div> No passwords to display </div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full mb-6 rounded-md overflow-hidden">
                        <thead className='bg-teal-700 text-white'>
                            <tr>
                                <th className='py-2'>Website</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-teal-100'>
                            {passwordArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border border-white text-center w-32 py-2 font-semibold">
                                            <a href={item.site} target="_blank">{item.site}</a>
                                        </td>

                                        <td className="border border-white text-center w-32 py-2 font-semibold">
                                            <div className='flex justify-center items-center'>
                                                <span className='flex-1 text-center'>{item.username}</span>
                                                <div onClick={() => { copyText(item.username) }} className="copybtn mr-2 flex-shrink-0">
                                                    <button className='pt-2 pl-2'>
                                                        <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/50/1A1A1A/new-by-copy.png" alt="new-by-copy" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="border border-white text-center w-32 py-2 font-semibold">
                                            <div className='relative flex justify-center items-center'>
                                                <span className="mr-12 max-w-[calc(100%-3rem)]" style={{ wordBreak: 'break-word' }}>
                                                    {isPasswordVisible[index] ? item.password : '*****'}
                                                </span>

                                                {/* Eye icon to toggle password visibility */}
                                                <div className="absolute right-10 cursor-pointer" onClick={() => togglePasswordVisibility(index)}>
                                                    <img className='p-1' width={24}
                                                        src={isPasswordVisible ? "icons/hidden.png" : "icons/eye.png"} alt="eye" />
                                                </div>

                                                <div onClick={() => { copyText(item.password) }} className="copybtn absolute right-2">
                                                    <button className='pt-2 pl-2'>
                                                        <img width="24" height="50" src="https://img.icons8.com/fluency-systems-regular/50/1A1A1A/new-by-copy.png" alt="new-by-copy" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="border border-white text-center w-32">
                                            <span onClick={() => { editPassword(item.id) }} className='mx-3'>
                                                <button>
                                                    <img width="24" height="26" src="https://img.icons8.com/metro/26/1A1A1A/create-new.png" alt="create-new" />
                                                </button>
                                            </span>
                                            <span onClick={() => { deletePassword(item.id) }} className='mx-3'>
                                                <button>
                                                    <img width="24" height="26" src="https://img.icons8.com/material-rounded/24/1A1A1A/delete-forever.png" alt="delete-forever" />
                                                </button>
                                            </span>
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>}
                </div>
            </div >
        </>
    )
}


export default Manager

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0EA5E9" className="size-10" stroke="#e6e6e6">
                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                    </svg> */}

{/* <img src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlnsXlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EAdd Circle%3C/title%3E%3Cdesc%3EA line styled icon from Orion Icon Library.%3C/desc%3E%3Ccircle data-name='layer2' cx='32' cy='32' r='30' fill='none' stroke='%23202020' stroke-miterlimit='10' strokeWidth='2' strokeLinejoin='round' strokeLinecap='round'%3E%3C/circle%3E%3Cpath data-name='layer1' fill='none' stroke='%23202020' stroke-miterlimit='10' strokeWidth='2' d='M32 16v32m16-16H16' strokeLinejoin='round' strokeLinecap='round'%3E%3C/path%3E%3C/svg%3E" alt="Add Circle" /> */ }