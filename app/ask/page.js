"use client"

// Library Import
import Image from "next/image";
import { motion } from "framer-motion";

// Image Import
import Cat from "../../public/cat.gif"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AskPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      transition={{ duration: 1 }}
      className="flex flex-col items-center mt-12 gap-y-8 px-4"
    > 
      <Image 
        src={Cat}
        alt="Flower"
        unoptimized
        height={256}
        width={256}
      />
      <div className="flex flex-col p-4">
        <p className="text-xl md:text-3xl text-gray-800 font-beanie">hi, i just wanted to say i think you're really cute</p>
        <p className="text-xl md:text-3xl text-gray-800 font-beanie">would you like to hang out sometime?</p>
        <p className="text-xl md:text-3xl text-gray-800 font-beanie">i'd love to get to know you better</p>
        <div className="mt-4 w-full flex justify-center gap-x-6">
          <Button>
            Yes :)
          </Button>
          <Button variant={"outline"}>
            No :(
          </Button>
        </div>
      </div>
      <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/track/5mtTAScDytxMMqZj14NmlN?utm_source=generator" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </motion.div>
  )
}

export default AskPage