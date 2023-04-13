import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AllEventsPage({ data }) {
      return (
            <div>
                  {data.map((ev) =>
                        <Link key={ev.id} href={`/events/${ev.id}`} passHref legacyBehavior>
                              <a  >
                                    <h2>{ev.title}</h2>

                                    <Image src={ev.image} alt={ev.title} height={300} width={300} />
                                    {/* <p>{ev.description}</p> */}



                              </a>


                        </Link>





                  )}


            </div>
      )
}
export async function getStaticProps() {
      const { events_categories } = await import("../../data/data.json")


      return {
            props: {
                  data: events_categories

            }
      }

}



