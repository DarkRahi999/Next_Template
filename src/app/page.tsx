"use client";

import { Button } from "@/components/ui/button";
import { SampleFeature } from "@/components/feature/sample-feature";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Next.js Starter Template
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A production-ready template with TypeScript, Tailwind CSS, and shadcn/ui
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="space-y-4 md:pt-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.h2 
              className="text-2xl font-semibold"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Getting Started
            </motion.h2>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Button asChild>
                <Link href="https://nextjs.org/docs" target="_blank">
                  Documentation
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://ui.shadcn.com/" target="_blank">
                  shadcn/ui
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <p className="text-sm text-muted-foreground">
                Edit this page in <code className="bg-muted px-1.5 py-0.5 rounded text-xs">src/app/page.tsx</code>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SampleFeature />
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.h2 
            className="text-xl font-semibold mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Features Included
          </motion.h2>
          <motion.ul 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-left text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            {[
              "Next.js 15+",
              "TypeScript",
              "Tailwind CSS v4",
              "shadcn/ui Components",
              "Dark Mode",
              "Responsive Design",
              "Path Aliases",
              "Pre-configured Fonts",
              "ESLint & Prettier",
              "Custom Screen Sizes"
            ].map((feature, index) => (
              <motion.li 
                key={feature}
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
              >
                <span className="mr-2">✓</span> {feature}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}