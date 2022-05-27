import { Text } from "@chakra-ui/react";
import NavbarComponent from "./NavBarComponent";

interface Anchor {
  name: string;
  id: string;
}

interface NavProps {
  anchors: Anchor[];
}

const Navbar = (np: NavProps) => {
  return (
    <div>
      {np.anchors.map((anchor) => (
        <NavbarComponent key={null} name={anchor.name} anchorLink={anchor.id} />
      ))}
    </div>
  );
};

export default Navbar;
