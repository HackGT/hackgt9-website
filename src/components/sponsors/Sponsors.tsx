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
          <Image src='/svg/sponsors/purple_blob.svg' alt="purple blob" className={styles.purple_blob}></Image>
        <HStack>
          <Image
            boxSize={"25vw"}
            alt="left button"
            src="/svg/sponsors/left_buttons.svg"
            id={styles.left_button}
          />
          <Text className={styles.title}>Sponsors</Text>
          <Image
            boxSize={"25vw"}
            alt="right button"
            src="/svg/sponsors/right_buttons.svg"
            id={styles.right_button}
          />
        </HStack>
        {/* <Text className={styles.sub_header}>Coming Soon!</Text> */}
        <Text className={styles.sub_text}>
          If {"you'd"} like to sponsor our event, please contact sponsorship@hexlabs.org
        </Text>
        <Image src='/svg/sponsors/pink_arc.svg' alt="pink arc" className={styles.pink_arc}></Image>
        <Image src='/svg/sponsors/pink_ellipse.svg' alt="pink ellipse" className={styles.pink_ellipse}></Image>
        <Image src="/svg/sponsors/light_blue_blob.svg" alt="light blue blob" className={styles.light_blue_blob}></Image>
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
