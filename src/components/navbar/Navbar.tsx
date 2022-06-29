import NavbarComponent from "./NavbarComponent";

import styles from "./Navbar.module.scss";
import { HStack, Box, Menu, MenuButton, MenuItem, IconButton, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

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
      <Box className={styles.navbg}>.</Box>
      <Box className={styles.progressBar} id="myBar">
        .
      </Box>
      <HStack className={styles.container} spacing={"10vw"}>
        {np.anchors.map((anchor) => (
          <NavbarComponent key={null} name={anchor.name} anchorLink={anchor.id} />
        ))}
      </HStack>

      <div className={styles.menu}>
        <Menu id={"menu"}>
          <MenuButton
            className={styles.menuButton}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList className={styles.menuList}>
            {np.anchors.map((anchor) => (
              <MenuItem key={null} className={styles.menuItem}>
                <NavbarComponent key={null} name={anchor.name} anchorLink={anchor.id} />
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = 90 - (winScroll / height) * 90;
  // document.getElementById("myBar").style.width = 90 - scrolled + "%";
}

export default Navbar;
