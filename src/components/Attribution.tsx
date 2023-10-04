import Link from "next/link";

type CustomLinkProps = {
  label: string;
  href: string;
};

function CustomLink(props: CustomLinkProps) {
  return (
    <Link className="text-primary" href={props.href} target="__blank">
      {props.label}
    </Link>
  );
}

export default function Attribution() {
  return (
    <div className="absolute bottom-0 mb-5 p-2 text-center">
      Challange by{" "}
      <CustomLink
        label="Frontend Mentor."
        href="https://www.frontendmentor.io?ref=challenge"
      />{" "}
      Coded by{" "}
      <CustomLink label="Velo." href="https://github.com/VeloOFFICIAL" />
    </div>
  );
}
