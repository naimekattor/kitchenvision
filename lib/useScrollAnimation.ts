"use client";
import { useInView } from "react-intersection-observer";

interface UseScrollAnimationProps {
  threshold?: number; // % of element visible to trigger
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.2,
  triggerOnce = false,
}: UseScrollAnimationProps = {}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
};
