import { Image } from "@chakra-ui/react";

interface LogoProps {
  key: null;
  url: string;
  name: string;
  tier: number;
  numTiers: number;
}

const Logo = (lp: LogoProps) => {
  return (
    <Image boxSize={(lp.numTiers - lp.tier) * 150} objectFit="contain" alt={lp.name} src={lp.url} />
  );
};

export default Logo;
