import { Center, Image, Text, VStack } from "@chakra-ui/react";
import QA from "./QA";
import styles from "./Faq.module.scss";

import qas from "./FAQ.json";
import HardwareQ from "./HardwareQ";
import AdmissionQ from "./AdmissionQ";

const Faq = () => {
  return (
    <div className={styles.container}>
      <Image
        draggable="false"
        id={styles.large_blue_ellipse}
        alt="giant blue ellipse"
        src="/svg/faq/large_blue_ellipse.svg"
      />
      <Image
        draggable="false"
        id={styles.giant_faint_pink_ellipse}
        alt="giant pink ellipse"
        src="/svg/tracks/giant_faint_pink_ellipse.svg"
      />
      <Image
        draggable="false"
        id={styles.giant_red_streak}
        alt="giant red streak"
        src="/svg/faq/giant_red_streak.svg"
      />
      <Center>
        <VStack className={styles.faq_box}>
          <Text className={styles.title}>FAQ</Text>
          <Image
            draggable="false"
            maxWidth={{ base: "250px", md: "400px", lg: "500px" }}
            objectFit="contain"
            id={styles.game_console}
            alt="game console"
            src="/svg/faq/game_console.svg"
          />
        </VStack>
      </Center>
      <VStack spacing={"20px"}>
        {qas.qas.map((entry) =>
          entry.question == "specialQs" ? (
            <div key="null">
              {/* look at this great css. there's got to be a way to store links in a uniform data format */}
              <AdmissionQ />
              <div id={styles.space} />
              <HardwareQ />
            </div>
          ) : (
            <QA key={entry.question} question={entry.question} answer={entry.answer} />
          )
        )}
      </VStack>
    </div>
  );
};

export default Faq;
