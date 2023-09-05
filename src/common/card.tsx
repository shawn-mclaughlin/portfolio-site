interface CardProps {
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return <div className="h-fit overflow-hidden rounded-lg border shadow-lg">{props.children}</div>;
}
