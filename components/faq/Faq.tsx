import { Center, Text, VStack } from "@chakra-ui/react";
import QA from "./QA";
import styles from "./Faq.module.scss";

import qas from "./FAQ.json";

const Faq = () => {
  /* eventually get these from a json */
  const faqs = [
    [
      "Where do I go to check in?",
      "Probably Klaus, maybe the CULC, but definitely not the Clubhouse",
    ],
    ["When is the event again?", "I don't know :>"],
    ["What's the meaning of life?", "What's with all these questions?"],
  ];

  return (
    <div className={styles.container}>
      <Center>
        <Text className={styles.title}>Frequently Asked Questions</Text>
      </Center>
      <VStack spacing={"20px"}>
        {qas.qas.map((entry) => (
          <QA key={entry} question={entry.question} answer={entry.answer} />
        ))}
      </VStack>
    </div>
  );
};

export default Faq;
