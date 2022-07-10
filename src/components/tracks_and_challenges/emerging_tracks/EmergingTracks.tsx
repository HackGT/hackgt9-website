import { Center, Image, Text, VStack } from "@chakra-ui/react";
import TD from "../TD";
import styles from "./Faq.module.scss";

const Faq = () => {
  return (
    <div className={styles.container}>
      <Center>
        <VStack className={styles.faq_box}>
          <Text className={styles.title}>General Tracks</Text>
        </VStack>
      </Center>
      <VStack spacing={"20px"}>
        {qas.qas.map((entry) => (
          <QA key={entry.question} question={entry.question} answer={entry.answer} />
        ))}
      </VStack>
    </div>
  );
};

export default Faq;
