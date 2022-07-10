import { Collapse, Text } from "@chakra-ui/react";
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
      <Text
        className={styles.track}
        onClick={() => {
          setTrackClicked(!trackClicked);
        }}
      >
        {tdp.track}
      </Text>
      <Collapse in={trackClicked} animateOpacity>
        <Text className={styles.description}>{tdp.description}</Text>
      </Collapse>
    </div>
  );
};

export default TD;
