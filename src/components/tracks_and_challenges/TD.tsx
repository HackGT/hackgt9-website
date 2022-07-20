import { Collapse, HStack, Text, Image, VStack } from "@chakra-ui/react";
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
    <VStack spacing={"0px"} className={styles.td}>
      <div className={styles.td_question}>
        <HStack
          className={styles.track}
          onClick={() => {
            setTrackClicked(!trackClicked);
          }}
        >
          <Text>{tdp.track}</Text>
          {trackClicked ? (
            <Image
              draggable="false"
              className={styles.arrow}
              alt="arrow down"
              src="/icon/arrows/akar-icons_chevron-down.png"
            />
          ) : (
            <Image
              draggable="false"
              className={styles.arrow}
              id={styles.down_arrow}
              alt="arrow up"
              src="/icon/arrows/akar-icons_chevron-down.png"
            />
          )}
        </HStack>
      </div>
      {trackClicked ? <Text className={styles.td_answer}>{tdp.description}</Text> : <div />}
    </VStack>
  );
};

export default TD;
