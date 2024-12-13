"use client"

// Library Import
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Image Import
import Flower from "../public/giphy.gif"

// Component Import
import { Button } from "@/components/ui/button";

// Icons Import
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      transition={{ duration: 1 }}
      className="flex flex-col items-center mt-12 px-4"
    > 
      <Image 
        src={Flower}
        alt="Flower"
        unoptimized
        height={256}
        width={256}
      />
      <div className="flex flex-col gap-y-8">
        <h1 className="text-2xl md:text-4xl text-gray-800 font-beanie">hi grace, <br /> i have something for you. ^_^</h1>
        <Link href={"/ask"} className="w-full flex justify-center">
          <Button className="flex gap-x-4 hover:gap-x-6 transition-all">
            See The Message <ArrowRight />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}