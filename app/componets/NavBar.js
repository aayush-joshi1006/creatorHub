"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useEffect } from 'react'
import { BsThreeDots } from "react-icons/bs";

const NavBar = () => {

  const { data: session } = useSession()
  // const [showdropdown, setShowdropdown] = useState(false)
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }

  useEffect(() => {
    const dropdownButton = document.getElementById('dropdownDelayButton')
    const dropdownMenu = document.getElementById('dropdownDelay')
    let timer

    if (dropdownButton && dropdownMenu) {
    dropdownButton.addEventListener('mouseenter', () => {
      timer = setTimeout(() => {
        dropdownMenu.classList.remove('hidden')
      }, 500)
    })

    dropdownButton.addEventListener('mouseleave', () => {
      timer = setTimeout(() => {
        dropdownMenu.classList.add('hidden')
      }, 500)
    })

    dropdownMenu.addEventListener('mouseenter', () => {
      clearTimeout(timer)
    })

    dropdownMenu.addEventListener('mouseleave', () => {
      dropdownMenu.classList.add('hidden')
    })
  }
  })

  return (
    <div className="bg-white px-3 py-1 md:py-0">
      <nav className="container text-xl h-16 m-auto flex justify-between items-center">
        <Link href="/">
          {" "}
          <div className="cursor-pointer border-4 border-black py-2 px-3 rounded-full">
            <span className="font-bold">Creator</span>
            <span>Hub</span>
          </div>{" "}
        </Link>
        <ul className="flex justify-center items-center gap-1">
          {session && (
            <>
              <span className="font-extralight text-lg">
                <i>Welcome, {session.user.name}</i>
              </span>
              {/* <Link href='/dashboard'><li><button className='hover:underline'>Dashboard</button></li></Link>
            <li><button className='button-style' onClick={() => signOut()}>LogOut</button></li></>} */}

              <div className="relative">
                <button
                  id="dropdownDelayButton"
                  className="rounded-full p-2 text-2xl hover:bg-gray-200"
                  type="button"
                >
                  <BsThreeDots />
                </button>

                <div
                  id="dropdownDelay"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32 absolute -bottom-48 -left-24"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 text-right"
                    aria-labelledby="dropdownDelayButton"
                  >
                    <li>
                      <Link
                        href="/"
                        className="block px-4 py-2 hover:bg-gray-300"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 hover:bg-gray-300"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/${session?.user?.name || "default-user"}`}
                        className="block px-4 py-2 hover:bg-gray-300"
                      >
                        Your Page
                      </Link>
                    </li>
                    <li>
                      <span
                        onClick={() => signOut()}
                        className="block px-4 py-2 hover:bg-gray-300"
                      >
                        LogOut
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {!session && (
            <Link href="/login">
              <li>
                <button className="button-style">LogIn</button>
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar
