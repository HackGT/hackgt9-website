import { Box } from "@chakra-ui/react";
import Image from "next/image";

import styles from "./Sponsors.module.scss";

interface LogoProps {
  key: null;
  url: string;
  website: string;
  name: string;
  tier: number;
  numTiers: number;
}

const Logo = (lp: LogoProps) => {
  return (
    <a href={lp.website} target="_blank" rel="noreferrer">
      <Box
        className={styles.border}
        position="relative"
        boxSize={(lp.numTiers - lp.tier) * 13 + "vw"}
      >
        <Image objectFit="contain" alt={lp.name} src={lp.url} layout="fill" />
      </Box>
    </a>
  );
};

export default Logo;
