import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
      return (
            <header>
                  <div className="headerDiv">
                        <div className='topNav'>
                              <Image src={'/images/logo_black.png'} height={50} width={50} />
                              <nav>
                                    <img src="" alt="" />
                                    <ul>
                                          <li>
                                                <Link href="/events" passHref legacyBehavior>
                                                      Events
                                                </Link>

                                          </li>
                                          <li>
                                                <Link href="/" passHref legacyBehavior>Home  </Link>

                                          </li>
                                          <li>
                                                <Link href="/about" passHref legacyBehavior>About  </Link>


                                          </li>
                                    </ul>



                              </nav>

                        </div>
                        <h1 className='navHeader'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

                  </div>


            </header>
      )
}
