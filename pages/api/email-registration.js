import path from "path"
import fs from "fs"
const buildPath = () => {
      return path.join(process.cwd(), "data", "data.json")
}
const extractData = async (filePath) => {
      const jsonData = await fs.readFileSync(filePath)
      // console.log(filePath)
      const data = JSON.parse(jsonData)
      return data

}


export default async function handler(req, res) {
      const filePath = buildPath()
      // console.log(await extractData(filePath))
      const { events_categories, allEvents } = await extractData(filePath)

      if (!allEvents) {
            return res.status(404).json({ message: "No Events" })
      }
      const { method } = req
      if (method === "POST") {


            const { email, eventId } = req.body
            const newAllEvents = allEvents.map((ev) => {
                  if (ev.id === eventId) {
                        if (ev.emails_registered.includes(email)) {
                              res.status(201).json({ message: `you have previously registered with ${email}` })
                              return ev





                        }
                        return {
                              ...ev, emails_registered: [...ev.emails_registered, email]
                        }

                  }
                  return ev


            }
            )

            await fs.writeFileSync(filePath, JSON.stringify({
                  events_categories,
                  allEvents: newAllEvents
            }))
            res.status(200).json({ message: `you have successfully registered with ${email}` })

      }
}