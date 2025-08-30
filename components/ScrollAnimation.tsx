"use client";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import {
  motion,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";
import React from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  initial?: TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  transition?: Transition;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.8, ease: "easeOut" },
  className = "",
}) => {
  const { ref, inView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : ({} as TargetAndTransition)}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
