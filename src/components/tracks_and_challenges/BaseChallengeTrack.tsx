import { Text, HStack, Center, VStack, Wrap, Image, Box } from "@chakra-ui/react";
import BaseComponent from "./BaseComponent";

import styles from "./TracksChallenges.module.scss";

import tracks from "./tracks.json";

const ChallengeTrackBase = () => {
  return (
    <Center className={styles.container}>
      <VStack>
        <Text className={styles.header}>Tracks</Text>
        <Text className={styles.subtext}>
          Are you an experienced or a beginner player in the hackathon game? We have two modes for
          you to select from. Click each track to learn more.
        </Text>

        <Wrap justify={"center"} spacing={{ base: "0px", md: "7vw" }}>
          <VStack>
            <Image
              alt="blue console"
              src="/img/tracks/player_blue.png"
              boxSize={{ base: "60vw", md: "30vw", lg: "25vw" }}
              objectFit="contain"
            />

            <Box
              className={styles.track_container}
              width={{ base: "70vw", lg: "500px" }}
              minHeight={{ base: "none", md: "380px", lg: "500px" }}
            >
              <BaseComponent
                key={tracks.tracks[0].name}
                name={tracks.tracks[0].name}
                description={tracks.tracks[0].description}
                prize={null}
              />
            </Box>
          </VStack>
          <VStack>
            <Image
              alt="pink console"
              src="/img/tracks/player_pink.png"
              boxSize={{ base: "60vw", md: "30vw", lg: "25vw" }}
              objectFit="contain"
            />

            <Box
              className={styles.track_container}
              width={{ base: "70vw", lg: "500px" }}
              minHeight={{ base: "none", md: "470px", lg: "500px" }}
            >
              <BaseComponent
                key={tracks.tracks[1].name}
                name={tracks.tracks[1].name}
                description={tracks.tracks[1].description}
                prize={null}
              />
            </Box>
          </VStack>
        </Wrap>
      </VStack>
    </Center>
  );
};

export default ChallengeTrackBase;
