"use client";

import { motion, useScroll, useTransform } from 'framer-motion';

import React, { useRef } from 'react';
import { Word } from '..';

// import styles from './style.module.scss';



export default function Paragraph({paragraph}) {



  const container = useRef(null);

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ["start 0.9", "start 0.25"]

  })



  const words = paragraph.split(" ")

  return (

    <h2 

      ref={container}         

      className={'paragraph'}

    >

    {

      words.map( (word, i) => {

        const start = i / words.length

        const end = start + (1 / words.length)

        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>

      })

    }

    </h2>

  )

}

