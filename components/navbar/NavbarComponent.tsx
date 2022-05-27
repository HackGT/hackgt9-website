import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavbarComponentProps {
  name: string;
  key: null;
  anchorLink: string;
}

const NavbarComponent = (ncp: NavbarComponentProps) => {
  return (
    <div>
      <Link href={ncp.anchorLink}>{ncp.name}</Link>
    </div>
  );
};

export default NavbarComponent;
