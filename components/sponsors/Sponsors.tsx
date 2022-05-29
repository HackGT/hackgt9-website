import { Center, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "./Logo";

import sponsors from "./sponsors.json";

import styles from "./Sponsors.module.scss";

const Sponsors = () => {
  const [tiers] = useState([1, 2, 3, 4]);

  return (
    <Center className={styles.container}>
      <VStack>
        <Text className={styles.title}>Sponsors</Text>
        {tiers.map((tier) => (
          <div key={null}>
            <Grid templateColumns={"repeat(" + (tier + 1) + ", 1fr)"}>
              {sponsors.sponsors
                .filter((e) => e.tier == tier)
                .map((sponsor) => (
                  <Logo
                    key={null}
                    url={sponsor.url}
                    name={sponsor.name}
                    tier={sponsor.tier}
                    numTiers={tiers.length + 1}
                  />
                ))}
            </Grid>
          </div>
        ))}
      </VStack>
    </Center>
  );
};

export default Sponsors;
