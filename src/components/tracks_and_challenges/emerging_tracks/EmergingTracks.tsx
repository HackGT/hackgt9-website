import { Center, Text, VStack, Image } from "@chakra-ui/react";
import TD from "../TD";
import styles from "../TracksChallenges.module.scss";

import et from "./emerging_tracks.json";

const EmergingTracks = () => {
  return (
    <div id={styles.emerging_track_container}>
      <Image
        alt="pink circle thingie"
        src="/svg/emerging_track/giant_pink_ellipse.svg"
        id={styles.giant_pink_ellipse}
      />
      <Image
        alt="blue thingie"
        src="/svg/emerging_track/faint_blue_ellipse.svg"
        id={styles.faint_blue_ellipse}
      />
      <Image
        alt="yellow thing"
        src="/svg/emerging_track/yellow_streak.svg"
        id={styles.yellow_streak}
      />
      <Center>
        <VStack>
          <Text className={styles.subheader}>Emerging Tracks</Text>
        </VStack>
      </Center>
      <VStack spacing={"20px"}>
        {et.emerging_tracks.map((entry) => (
          <TD key={null} track={entry.name} description={entry.description} />
        ))}
      </VStack>
    </div>
  );
};

export default EmergingTracks;
