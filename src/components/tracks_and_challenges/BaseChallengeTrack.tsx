import { Text, HStack, Center, VStack, Wrap, Image, Box, Link } from "@chakra-ui/react";
import BaseComponent from "./BaseComponent";

import styles from "./TracksChallenges.module.scss";

import tracks from "./tracks.json";
import Reimbursement from "./reimbursement/Reimbursement";

const ChallengeTrackBase = () => {
  return (
    <Center className={styles.container}>
      <VStack>
        <Text className={styles.header}>Modes</Text>
        <Text className={styles.subtext}>
          Are you an experienced or a beginner player in the hackathon game? We have two modes for
          you to select from. Click each mode to learn more.
        </Text>
        <Wrap margin={"0px"} justify={"center"} spacing={{ base: "0px" }}>
          <div id={styles.general}>
            <VStack>
              <Link className="noSelect" href={tracks.tracks[0].id}>
                <Image
                  draggable="false"
                  className={styles.not_background}
                  alt="blue console"
                  src="/img/tracks/player_blue.png"
                  boxSize={{ base: "60vw", md: "30vw", lg: "25vw" }}
                  objectFit="contain"
                />
              </Link>
              <Link
                className="noSelect"
                href={tracks.tracks[0].id}
                style={{ textDecoration: "none" }}
              >
                <Box
                  className={styles.track_container}
                  width={{ base: "70vw", lg: "500px" }}
                  minHeight={{ base: "none", md: "330px" }}
                >
                  <BaseComponent
                    key={tracks.tracks[0].name}
                    name={tracks.tracks[0].name}
                    description={tracks.tracks[0].description}
                    prize={null}
                  />
                </Box>
              </Link>
            </VStack>
          </div>
          <div id={styles.emerging}>
            <VStack>
              <Link className="noSelect" href={tracks.tracks[1].id}>
                <Image
                  draggable="false"
                  className={styles.not_background}
                  alt="pink console"
                  src="/img/tracks/player_pink.png"
                  boxSize={{ base: "60vw", md: "30vw", lg: "25vw" }}
                  objectFit="contain"
                />
              </Link>
              <Link
                className="noSelect"
                href={tracks.tracks[1].id}
                style={{ textDecoration: "none" }}
              >
                <Box
                  className={styles.track_container}
                  width={{ base: "70vw", lg: "500px" }}
                  minHeight={{ base: "none", md: "330px" }}
                >
                  <BaseComponent
                    key={tracks.tracks[1].name}
                    name={tracks.tracks[1].name}
                    description={tracks.tracks[1].description}
                    prize={null}
                  />
                </Box>
              </Link>
            </VStack>
          </div>
        </Wrap>
        <div id={styles.only_one_mode}>
          <Text className={styles.subtextQuestion}>Which mode should I apply to?</Text>
          <Text className={styles.subtext}>
            You may only apply to one mode. We will be limiting the number of Emerging hackers to
            ensure we have enough resources to offer all participants a great experience. We
            recommend you apply to the one that suits you the most!
          </Text>
          <Text className={styles.eligibility}>
            You are eligible to apply to Emerging if you meet ONE of these criteria:
          </Text>
          <Text className={styles.eligibility}>👾 1st or 2nd year in college 👾</Text>
          <Text className={styles.eligibility}>🕹️ Have attended 0 or 1 hackathon before 🕹️</Text>
          <Text className={styles.eligibility}>
            🎮 Have little to no previous technical experience 🎮
          </Text>
        </div>
      </VStack>
    </Center>
  );
};

export default ChallengeTrackBase;
