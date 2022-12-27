import Head from 'next/head'
// import Image from 'next/image'
import { Canvas, useThree } from '@react-three/fiber'
import { Image, Scroll, ScrollControls } from "@react-three/drei"
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
// import { useRef } from 'react'



function Images() {

  const { height } = useThree((state) => state.viewport);

 return (
    <group>
      <Image url = "./img1.png" alt = "drill" scale = {[2.6, 1.8, 1]} position = {[0, 0.5, 1]}/>
      <Image url = "./img2.png" alt = "drill" scale = {[2.2, 2.8, 2]} position = {[-0.3, height -12, 2]}/>
      <Image url = "./img3.png" alt = "drill" scale = {[3, 2.2, 3]} position = {[0, -height -0.8, 1]}/>
      <Image url = "./img4.png" alt = "drill" scale = {[1.6, 2, 4]} position = {[0, -height -2.2, 2]}/>
      <Image url = "./img5.png" alt = "drill" scale = {[2, 1.5, 5]} position = {[0.4, -height -3.8, 1.5]}/>
      <Image url = "./img6.png" alt = "drill" scale = {[2.8, 2, 6]} position = {[-0.1, -height -5.5, 1]}/>
      <Image url = "./img7.png" alt = "drill" scale = {[1, 0.8, 6]} position = {[-0.4, -height -6.6, 2]}/>
    </group>
  );
}


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A-galleria</title>
        <meta name="description" content="searching its art." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.logoname}>
          A-galleria
        </h1>
         <button className={styles.scan}>
            Scan
            </button>
      </header>

      <main className={styles.main}>
        <section className={styles.canvas}>
          <Canvas>
            <ScrollControls pages={3.2} damping={5}>
              <Scroll>
            <Images />
            </Scroll>
            <Scroll html>
              <h2>
              <span className={styles.fvCopy}>
                  What name <br/>
                  is this?
              </span>
              </h2>
            </Scroll>
            </ScrollControls>
          </Canvas>
        </section>

      </main>

      <footer className={styles.footer}>
        <p>
        this is documentsite <br/>
        that scanning <br/>
        pain-tart to don’t know<br/>
        it names ever.
        </p>

        <div className={styles.footerLogo}>
          <Link href="/">
            <h2>A-galleria</h2>
          </Link>
        </div>
      </footer>
    </div>
  )
}
