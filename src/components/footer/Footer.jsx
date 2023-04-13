import Link from 'next/link'
import React from 'react'
import styles from "./footer.module.css"

export default function Footer() {
      return (
            <footer className={styles.footer}>
                  2023
                  <Link href="/"> Charles Emmanuel Azunda</Link>
            </footer>
      )
}
