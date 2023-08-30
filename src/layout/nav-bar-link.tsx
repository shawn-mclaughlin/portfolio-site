interface NavBarLinkProps {
  text: string;
  anchor: string;
  onClick: () => void;
}

export default function NavBarLink(props: NavBarLinkProps) {
  return (
    <a
      href={props.anchor}
      className="m-2 text-2xl font-bold text-white lg:text-opacity-70 lg:hover:text-opacity-100"
      onClick={props.onClick}
    >
      {props.text}
    </a>
  );
}
