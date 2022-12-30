import Head from 'next/head'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei"
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { useRef } from 'react'
import { motion } from "framer-motion";


function Images() {

  const { height } = useThree((state) => state.viewport);
  const ref = useRef();
  const deta = useScroll();

  useFrame(()=>{
    ref.current.children[0].material.zoom = 1 +  deta.range(0, 1 / 3 ) / 3
    ref.current.children[1].material.zoom = 1 +  deta.range(0, 1 / 3 ) / 4
  })

 return (
    <group ref = {ref}>
      <Image url = "./img1.png" alt = "drill" scale = {[2.6, 1.8, 1]} position = {[0, 0.5, 1]} />
      <Image url = "./img2.png" alt = "drill" scale = {[2.2, 2.8, 2]} position = {[-0.3, height -12, 2]}/>
      <Image url = "./img3.png" alt = "drill" scale = {[3, 2.2, 3]} position = {[0, -height -0.8, 1]} transparent opacity={0.8}/>
      <Image url = "./img4.png" alt = "drill" scale = {[1.6, 2, 4]} position = {[0, -height -2.2, 2]}  transparent opacity={0.8}/>
      <Image url = "./img5.png" alt = "drill" scale = {[2, 1.5, 5]} position = {[0.4, -height -3.8, 1.5]}  transparent opacity={0.8}/>
      <Image url = "./img6.png" alt = "drill" scale = {[2.8, 2, 6]} position = {[-0.1, -height -5.5, 1]}  transparent opacity={0.8}/>
      <Image url = "./img7.png" alt = "drill" scale = {[1, 0.8, 6]} position = {[-0.4, -height -6.6, 2]}  transparent opacity={0.8}/>
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

      <motion.header className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 50 }}
        transition={{  duration: 1, delay: 1, ease: "easeInOut" }}
        >
        <h1 className={styles.logoname}>
          A-galleria
        </h1>
         <button className={styles.scan}>
          <Link href="/scan">
            Scan
            </Link>
            </button>
      </motion.header>

      <main className={styles.main}>
        <motion.section className={styles.canvas}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{  duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          >
          <Canvas>
            <ScrollControls pages={3.22} damping={5}>

              <Scroll>
            <Images />
            </Scroll>

           <Scroll html className={styles.htmls}>
              <h2 className={styles.fvCopy}>
              <span>
                  Whats the name <br/>
                  this work?
              </span>
              </h2>

              <span className={styles.scroll}></span>

              <h2 className={styles.sec2}>
              <span>
                   Be immediately <br/>
                   identified
              </span>
              </h2>

              <h2 className={styles.sec3}>
              <span>
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
              <Link href="/scan">
            Scan
            </Link>
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
        </motion.section>

      </main>

      
    </div>
  )
}
