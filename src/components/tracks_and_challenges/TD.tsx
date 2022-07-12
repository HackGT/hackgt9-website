import { Collapse, HStack, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./TracksChallenges.module.scss";

interface TDProps {
  key: any;
  track: string;
  description: string;
}

/* Track and Description */
const TD = (tdp: TDProps) => {
  const [trackClicked, setTrackClicked] = useState(false);

  return (
    <div className={styles.td_container}>
      <HStack
        className={styles.track}
        onClick={() => {
          setTrackClicked(!trackClicked);
        }}
      >
        <Text>{tdp.track}</Text>
        {trackClicked ? (
          <Image
            className={styles.arrow}
            alt="arrow down"
            src="/icon/arrows/akar-icons_chevron-down.png"
          />
        ) : (
          <Image
            className={styles.arrow}
            id={styles.down_arrow}
            alt="arrow up"
            src="/icon/arrows/akar-icons_chevron-down.png"
          />
        )}
      </HStack>
      <Collapse in={trackClicked} animateOpacity>
        <Text className={styles.description}>{tdp.description}</Text>
      </Collapse>
    </div>
  );
};

export default TD;
