import { Center, Text, VStack } from "@chakra-ui/react";
import TD from "../TD";
import styles from "../TracksChallenges.module.scss";

import gt from "./general_tracks.json";

const GeneralTracks = () => {
  return (
    <div id={styles.general_track_container}>
      <Center>
        <VStack>
          <Text className={styles.subheader}>General Tracks</Text>
        </VStack>
      </Center>
      <VStack spacing={"20px"}>
        {gt.general_tracks.map((entry) => (
          <TD key={null} track={entry.name} description={entry.description} />
        ))}
      </VStack>
    </div>
  );
};

export default GeneralTracks;
