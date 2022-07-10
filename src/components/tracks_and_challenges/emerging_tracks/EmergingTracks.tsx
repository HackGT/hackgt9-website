import { Center, Text, VStack } from "@chakra-ui/react";
import TD from "../TD";
import styles from "../TracksChallenges.module.scss";

import et from "./emerging_tracks.json";

const EmergingTracks = () => {
  return (
    <div id={styles.general_track_container}>
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
