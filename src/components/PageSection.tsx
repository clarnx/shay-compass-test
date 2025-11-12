interface PageSectionProps {
  id: string;
  children: React.ReactNode;
  backgroundColor?: 'base-100' | 'base-200';
  maxWidth?: string;
}

export default function PageSection({
  id,
  children,
  backgroundColor = 'base-100',
  maxWidth = 'max-w-5xl'
}: PageSectionProps) {
  return (
    <section id={id} className={`bg-${backgroundColor} py-20 px-6`}>
      <div className={`${maxWidth} mx-auto`}>
        {children}
      </div>
    </section>
  );
}
