import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'

export default function SingleEventPage({ data }) {
      const inputEmail = useRef()
      const router = useRouter()
      console.log(router.query)
      async function handleSubmit(e) {
            e.preventDefault()
            const email = inputEmail.current.value
            const eventId = router?.query.id
            const eventCity = router?.query.cat
            try {
                  const response = await fetch("/api/email-registration", {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                              "accept": "application/json",
                        },
                        body: JSON.stringify({
                              email,
                              eventId
                        })

                  })
                  if (!response.ok) {
                        const errorData = await response.json()
                        console.log(errorData)
                  }
                  const responseData = await response.json()
                  alert(responseData.message)

            } catch (error) {
                  console.log("Error", e)

            }

      }
      return (
            <div>
                  <h1>{data[0].title}</h1>

                  <Image src={data[0].image} alt={data[0].title} height={300} width={300} />
                  <p>{data[0].description}</p>
                  <form action="" onSubmit={handleSubmit}>
                        <input ref={inputEmail} type="email" name="" id="" required />
                        <button type="submit">Submit</button>



                  </form>


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


      // console.log(data)
      return {
            props: {
                  data

            }
      }

}


