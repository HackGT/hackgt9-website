import { Text, HStack, Center, VStack, Wrap } from "@chakra-ui/react";
import BaseComponent from "./ChallengeTrackComponent";

import styles from "./TracksChallenges.module.scss";

import tracks from "./tracks.json";
import challenges from "./challenges.json";

const ChallengeTrackBase = () => {
  return (
    <Center className={styles.container}>
      <VStack>
        <Text className={styles.header}>Tracks and Challenges</Text>
        <Text className={styles.header}>Tracks</Text>
        <Wrap spacing={"10vw"} justify={"center"}>
          {tracks.tracks.map((track) => (
            <BaseComponent
              key={track.name}
              name={track.name}
              description={track.description}
              prize={null}
            />
          ))}
        </Wrap>
        <Text className={styles.header}>Challenges</Text>
        <Wrap spacing={"10vw"} justify={"center"}>
          {challenges.challenges.map((challenge) => (
            <BaseComponent
              key={challenge.name}
              name={challenge.name}
              description={challenge.description}
              prize={challenge.prize}
            />
          ))}
        </Wrap>
      </VStack>
    </Center>
  );
};

export default ChallengeTrackBase;
