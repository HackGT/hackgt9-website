import NavbarComponent from "./NavbarComponent";

import styles from "./Navbar.module.scss";
import {
  HStack,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Center, 
  Link,
} from "@chakra-ui/react";
import { useEffect } from "react";

interface Anchor {
  name: string;
  id: string;
}

interface NavProps {
  anchors: Anchor[];
}

const Navbar = (np: NavProps) => {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <div>
      <Box className={styles.navbarContainer}>.
          </Box>
      <Box className={styles.navbg}>`</Box>
      <Box className={styles.progressBar} id="myBar"></Box>
      <Center>
        <HStack draggable="false" className={styles.container} spacing={"8vw"}>
          {np.anchors.map((anchor) => (
            <NavbarComponent key={null} name={anchor.name} anchorLink={anchor.id} />
          ))}
        </HStack>
      </Center>

      <div className={styles.menu}>
        <Menu>
          <MenuButton>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5 18.1915H4.5" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M31.5 9H4.5" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M31.5 27.3829H4.5" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </MenuButton>
          <MenuList>
              <Link href="#home">
                <MenuItem>Home</MenuItem>
              </Link>
              <Link href="#about">
                <MenuItem>About</MenuItem>
              </Link>
              <Link href="#tracks_and_challenges">
                <MenuItem>Modes</MenuItem>
              </Link>
              <Link href="#schedule">
                <MenuItem>Schedule</MenuItem>
              </Link>
              <Link href="#faq">
                <MenuItem>FAQ</MenuItem>
              </Link>
              <Link href="#sponsors">
                <MenuItem>Sponsors</MenuItem>
              </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

function scrollFunction() {
  var winScroll = document.documentElement.scrollTop;
  const sections = document.querySelectorAll("section");
  let curr: string | null = "";
  let currSec = sections[1];
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY > sectionTop) {
      curr = section.getAttribute("id");
      currSec = section;
    }
  });
  var scrollable = 0;
  var width = 0;
  switch (curr) {
    case null:
      break;
    case "home":
      scrollable = currSec.clientHeight;
      width = 5 + 10 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "about":
      scrollable = currSec.clientHeight;
      width = 15 + 15 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "tracks_and_challenges":
      scrollable = currSec.clientHeight;
      width = 30 + 5 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "general_tracks":
      scrollable = currSec.clientHeight;
      width = 35 + 5 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "emerging_tracks":
      scrollable = currSec.clientHeight;
      width = 40 + 5 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "schedule":
      scrollable = currSec.clientHeight;
      width = 45 + 15 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "faq":
      scrollable = currSec.clientHeight;
      width = 60 + 15 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
    case "sponsors":
      scrollable = currSec.clientHeight;
      width = 75 + 40 * ((winScroll - currSec.offsetTop) / scrollable);
      break;
  }
  const bar = document.getElementById("myBar");
  if (bar) {
    bar.style.width = width + "%";
  }
}

export default Navbar;
