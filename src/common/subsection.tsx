import React from "react";

interface SubsectionProps {
  id: string;
  heading?: string;
  children: React.ReactNode;
}

export default function Subsection(props: SubsectionProps) {
  const { id, heading, children } = props;

  // TODO Refactor heading to use composition pattern
  return (
    <section id={id} className="mx-4 mb-8 mt-4 scroll-mt-20">
      {heading ? <h1 className="mb-2 text-4xl">{heading}</h1> : null}
      {children}
    </section>
  );
}
