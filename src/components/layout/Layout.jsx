import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function ({ children }) {
      return (
            <>

                  <Header />
                  <main>
                        {children}


                  </main>
                  <Footer />
            </>
      )
}
