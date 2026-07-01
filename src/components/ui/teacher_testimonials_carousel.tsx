import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import {
  teacherTestimonials,
  type TeacherTestimonial,
} from "@/data/teacher-testimonials";

import { TeacherTestimonialCard } from "./teacher_testimonial_card";

export function TeacherTestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = () => {
    setDirection(1);

    setCurrent((prev) => (prev + 1) % teacherTestimonials.length);
  };

  const previous = () => {
    setDirection(-1);

    setCurrent((prev) =>
      prev === 0 ? teacherTestimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(next, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  const teacher: TeacherTestimonial = teacherTestimonials[current];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div
      className="relative mx-auto w-fit"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={teacher.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TeacherTestimonialCard {...teacher} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botão anterior */}

      <button
        onClick={previous}
        className="
          absolute
          left-[-28px]
          top-1/2
          -translate-y-1/2
            cursor-pointer
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full
          border
          border-border
          bg-background
          shadow-lg

          transition-all
          duration-300

          hover:bg-primary
          hover:text-white
          hover:scale-110
        "
      >
        <ChevronLeft size={22} />
      </button>

      {/* Próximo */}

      <button
        onClick={next}
        className="
          absolute
          cursor-pointer
          right-[-28px]
          top-1/2
          -translate-y-1/2

          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-full
          border
          border-border
          bg-background
          shadow-lg

          transition-all
          duration-300

          hover:bg-primary
          hover:text-white
          hover:scale-110
        "
      >
        <ChevronRight size={22} />
      </button>

      {/* Indicadores */}

      <div className="pt-6 flex justify-center gap-3">
        {teacherTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`
              h-3
              rounded-full
              transition-all
              duration-300
              ${
                current === index
                  ? "w-6 bg-primary"
                  : "w-3 bg-border hover:bg-primary/40"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}