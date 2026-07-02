import Container from "@/components/layout/Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  children,
  id,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}