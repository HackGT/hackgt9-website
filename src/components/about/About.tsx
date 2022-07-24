import { Text, Image, Center, VStack } from "@chakra-ui/react";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.container}>
      <Center>
        <Center className={styles.mainBox}>
          <Image
            draggable="false"
            id={styles.tetris_blocks}
            alt="tetris block corner arrangement"
            src="/svg/about/tetris_blocks.svg"
          />
          <VStack>
            <Text className={styles.title}>About</Text>
            <Text className={styles.bodyText}>
              Level up at HackGT 9 from October 21st - 23rd! The ninth iteration of our flagship
              hackathon is bringing the retro arcade to all our HackGT players. This {"year's"}{" "}
              event will be back to an in-person experience, so get ready for a weekend packed with
              action! Buff your hacking stats, make incredible team-ups, and build your community
              among the 1,500+ passionate hackers we invite each year.
            </Text>
            <Text className={styles.subtitle}>What is HackGT?</Text>
            <Text className={styles.bodyText}>
              HackGT is {"HexLabs'"} free, 36-hour, annual hackathon where students from across the
              world come together for a weekend in the fall to create innovative projects that show
              off their creativity and passion for development. You have the freedom to choose any
              platform, programming language, or format to show how you build solutions.
              <br />
              <br />
              Participating in this event will widen your professional network, build your portfolio,
              and allow you to put your creativity into production! With tech talks and workshops,
              you will also have the opportunity to talk to and learn from professionals in various
              industries. We encourage everyone to be a part of our hacker community at HackGT 9
              regardless of location, major, or prior hacking experience.
            </Text>
            <Text className={styles.subtitle}>We {"can't"} wait to meet you in person!</Text>
            <Text className={styles.bodyText}>
              We are planning for HackGT 9 to be an entirely in-person event. We believe hackathons
              are best experienced in-person, and we expect our return to campus and the Klaus
              building will improve the quality of our event immensely. As the situation progresses,
              we may alter our plan to rely more on virtual mechanisms, but for now, we look forward
              to seeing you in person in October!
              <br />
              <br />
              Please check out our Covid guidelines in the FAQ for more about how we will be
              enforcing caution.
            </Text>
          </VStack>
        </Center>
      </Center>
    </div>
  );
};

export default About;
