import { Center, Grid, HStack, Image, Text, VStack, Wrap } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "./Logo";

import sponsors from "./sponsors.json";

import styles from "./Sponsors.module.scss";

const Sponsors = () => {
  const [tiers] = useState([1, 2, 3, 4]);

  return (
    <Center className={styles.container}>
      <VStack>
        <HStack>
          <Image
            draggable="false"
            boxSize={"25vw"}
            alt="left button"
            src="/svg/sponsors/left_buttons.svg"
            id={styles.left_button}
          />
          <Text className={styles.title}>Sponsors</Text>
          <Image
            draggable="false"
            boxSize={"25vw"}
            alt="right button"
            src="/svg/sponsors/right_buttons.svg"
            id={styles.right_button}
          />
        </HStack>
        {/* <Text className={styles.sub_header}>Coming Soon!</Text> */}
        <Image
          draggable="false"
          boxSize={"70vw"}
          objectFit="contain"
          alt="sponsors wooo!"
          src="/img/sponsors/logos.png"
          id={styles.logos}
        />
        {/* {tiers.map((tier) => (
          <div key={null}>
            <Wrap justify="center">
              {sponsors.sponsors
                .filter((e) => e.tier == tier)
                .map((sponsor) => (
                  <Logo
                    key={null}
                    url={sponsor.logo_url}
                    website={sponsor.website_url}
                    name={sponsor.name}
                    tier={sponsor.tier}
                    numTiers={tiers.length + 1}
                  />
                ))}
            </Wrap>
          </div>
        ))} */}
      </VStack>
    </Center>
  );
};

export default Sponsors;
