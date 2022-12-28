import Head from 'next/head'
// import Image from 'next/image'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei"
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { useRef } from 'react'


function Images() {

  const { height } = useThree((state) => state.viewport);
  const ref = useRef();
  const deta = useScroll();

  useFrame(()=>{
    ref.current.children[0].material.zoom = 1 +  deta.range(0, 1 / 3 ) / 3
  })

 return (
    <group ref = {ref}>
      <Image url = "./img1.png" alt = "drill" scale = {[2.6, 1.8, 1]} position = {[0, 0.5, 1]} />
      <Image url = "./img2.png" alt = "drill" scale = {[2.2, 2.8, 2]} position = {[-0.3, height -12, 2]}/>
      <Image url = "./img3.png" alt = "drill" scale = {[3, 2.2, 3]} position = {[0, -height -0.8, 1]} transparent opacity={0.7}/>
      <Image url = "./img4.png" alt = "drill" scale = {[1.6, 2, 4]} position = {[0, -height -2.2, 2]}  transparent opacity={0.7}/>
      <Image url = "./img5.png" alt = "drill" scale = {[2, 1.5, 5]} position = {[0.4, -height -3.8, 1.5]}  transparent opacity={0.7}/>
      <Image url = "./img6.png" alt = "drill" scale = {[2.8, 2, 6]} position = {[-0.1, -height -5.5, 1]}  transparent opacity={0.7}/>
      <Image url = "./img7.png" alt = "drill" scale = {[1, 0.8, 6]} position = {[-0.4, -height -6.6, 2]}  transparent opacity={0.7}/>
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
            <ScrollControls pages={3.22} damping={5}>

              <Scroll>
            <Images />
            </Scroll>

           <Scroll html className={styles.htmls}>
              <h2>
              <span className={styles.fvCopy}>
                  Whats the name <br/>
                  this work?
              </span>
              </h2>

              <span className={styles.scroll}></span>

              <h2>
              <span className={styles.sec2}>
                   Be immediately <br/>
                   identified
              </span>
              </h2>

              <h2>
              <span className={styles.sec3}>
                  Storage of<br/>
                 4,000+ items
              </span>
              </h2>

             <footer className={styles.footer}
             style={{ backgroundImage: "url(/footerBg.png)" }}>
              <p>
              Give it a try.
              </p>
              <button className={styles.footerScan}>
              Scan
              </button>
              <div className={styles.footerLogo}>
                <Link href="/">
                  <h2>A-galleria</h2>
                </Link>
              </div>
             </footer>

            </Scroll>
            
            </ScrollControls>
          </Canvas>
        </section>

      </main>

      
    </div>
  )
}
