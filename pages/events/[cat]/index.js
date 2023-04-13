import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function EventsCategoryPage({ data, city }) {
      return (
            <div>
                  <h2>Events in {city}</h2>
                  {
                        data.map((e) =>
                              <>
                                    <Link key={e.id} href={`/events/${e.city}/${e.id}`} passHref legacyBehavior>
                                          <a >
                                                <Image src={e.image} height={300} width={300} alt={e.description} />
                                                <h2>{e.title}</h2>
                                                <p>{e.description}</p>


                                          </a>

                                    </Link>


                              </>



                        )
                  }

            </div>
      )
}

export async function getStaticPaths() {
      const { events_categories } = await import("../../../data/data.json")
      const allPaths = events_categories.map((e) => {
            return {
                  params: {
                        cat: e.id.toString()
                  }

            }
      })
      console.log(allPaths)
      return {
            paths: allPaths,
            fallback: false
      }
}

export async function getStaticProps(context) {
      const id = context?.params.cat
      const { allEvents } = await import("../../../data/data.json")
      const data = allEvents.filter((e) => e.city === id)


      console.log(data)
      return {
            props: {
                  data,
                  city: id
            }
      }

}

