import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home_Page({ data }) {
      return (
            <div className='home_body'>



                  {data.map((ev) =>
                        <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior >
                              <a className='card' >
                                    <div className="image">
                                          <Image src={ev.image} alt={ev.title} height={300} width={500} />


                                    </div>

                                    <div className="content">
                                          <p>{ev.description}</p>
                                          <h2>{ev.title}</h2>



                                    </div>



                              </a>


                        </Link>






                  )}




            </div>
      )
}
