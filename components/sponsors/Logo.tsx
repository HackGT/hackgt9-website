import { Image } from "@chakra-ui/react";

import styles from "./Sponsors.module.scss";

interface LogoProps {
  key: null;
  url: string;
  name: string;
  tier: number;
  numTiers: number;
}

const Logo = (lp: LogoProps) => {
  return (
    <Image
      className={styles.border}
      boxSize={(lp.numTiers - lp.tier) * 13 + "vw"}
      objectFit="contain"
      alt={lp.name}
      src={lp.url}
    />
  );
};

export default Logo;
