import { CSSProperties } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps {
    children?: string,
    text: string,
    href: string
}

const activeLinkStyle: CSSProperties = {
    color: "#0070f3",
    textDecoration: "underline",
}

const ActiveLink: React.FC<ActiveLinkProps> = ({text, href}) => {

  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath === href ? activeLinkStyle : undefined}>{text}</Link>
  )
}

export default ActiveLink;