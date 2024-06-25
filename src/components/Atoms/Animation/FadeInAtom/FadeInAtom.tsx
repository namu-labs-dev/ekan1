import { type PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  duration?: number;
  delay?: number;
} & PropsWithChildren;

export function FadeInAtom({
  className,
  duration = 2,
  delay = 0,
  children,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "linear", duration, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
