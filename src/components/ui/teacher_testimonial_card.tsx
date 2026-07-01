import { Quote } from "lucide-react";

interface Props {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export function TeacherTestimonialCard({
  name,
  role,
  testimonial,
  image,
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* Badge */}
      <div
        className="
          absolute
          -top-6
          -right-30
          z-20

          rounded-2xl
          bg-primary

          px-5
          py-4

          shadow-xl
        "
      >
        <h3 className="font-bold text-primary-foreground">
          Criado por educadores
        </h3>

        <p className="text-sm text-primary-foreground/90">
          Para educadores reais.
        </p>
      </div>

      {/* Card */}
      <div
        className="
          overflow-hidden
          rounded-[32px]
          border
          border-border
          bg-muted
          shadow-xl
        "
      >
        <img
          src={image}
          alt={name}
          className="h-[320px] w-full object-cover"
        />

        <div className="bg-background px-6 py-5">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary">
              {name}
            </h2>

            <span className="text-md text-muted-foreground">
              {role}
            </span>
          </div>

          <Quote size={22} className="mb-2 text-primary" />

          <p className="text-[15px] leading-7 text-muted-foreground">
            "{testimonial}"
          </p>
        </div>
      </div>
    </div>
  );
}