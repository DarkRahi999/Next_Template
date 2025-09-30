"use client";

import { fadeUp } from "@/lib/utils";
import { motion } from "motion/react";

export default function Page() {
    return (
        <motion.div
            // // animate={{
            // //     x: [300, 800, 800, 300, 300],
            // //     y: [30, 30, 400, 400, 30],
            // //     rotate: [360, 0, -360, 0, 360]
            // // }}
            // // transition={{
            // //     duration: 5,
            // //     delay: 0.5,
            // //     ease: "anticipate",
            // //     repeat: Infinity
            // // }}
            // // whileHover={{
            // //     backgroundColor: "green"
            // // }}
            // // whileTap={{
            // //     scale: 0.8
            // // }}
            // // drag
            dragConstraints={{
                top: 0,
                left: 0,
                right: 1100,
                bottom: 450
            }}
            whileDrag={{
                scale: 0.8
            }}
            // // dragDirectionLock
            className="bg-red-600 border-2 hover:bg-red-700 border-gray-100 h-[180px] w-[180px] flex justify-center items-center rounded-full"
        >
            <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={0}
                viewport={{ once: false, amount: 0.2 }}
                className="text-4xl font-bold text-center"
            >
                Welcome
            </motion.h1>
        </motion.div>
    )
}
