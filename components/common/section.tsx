import cn from "@/lib/cn";

interface SectionProps {
  children?: React.ReactNode;
  className?: React.ComponentProps<"section">["className"];
}

const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={cn("p-4 bg-white", className)}>{children}</section>
  );
};

export default Section;