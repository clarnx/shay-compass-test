interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-base-content">
      {title}
    </h2>
  );
}
