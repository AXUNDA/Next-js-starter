import React from 'react'

export default function SingleEventPage({ data }) {
      console.log(data)
      return (
            <div>
                  <h1>{data[0].title}</h1>

            </div>
      )
}

export async function getStaticPaths() {
      const { allEvents } = await import("../../../data/data.json")
      const allPaths = allEvents.map((e) => {
            return {
                  params: {
                        id: e.id.toString(),
                        cat: e.city.toString()
                  }

            }
      })
      return {
            paths: allPaths,
            fallback: false, // can also be true or 'blocking'
      }
}

export async function getStaticProps(context) {
      const { id, cat } = context?.params
      const { allEvents } = await import("../../../data/data.json")


      const data = allEvents.filter((e) => e.city === cat && e.id === id)


      console.log(data)
      return {
            props: {
                  data

            }
      }

}


