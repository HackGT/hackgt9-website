import { HStack, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./Faq.module.scss";

interface QuestionProps {
  question: string;
  open: boolean;
}

const Question = (qp: QuestionProps) => {
  const [arrowDirection, setArrowDirection] = useState(false);

  return (
    <HStack
      className={styles.clickable}
      onClick={() => {
        setArrowDirection(!arrowDirection);
      }}
    >
      <Text className={`${styles.question} ${styles.both}`}>{qp.question}</Text>
      {arrowDirection ? (
        <Image alt="arrow down" src="/icon/arrows/akar-icons_chevron-down.png" />
      ) : (
        <Image
          className={styles.flip}
          alt="arrow up"
          src="/icon/arrows/akar-icons_chevron-down.png"
        />
      )}
    </HStack>
  );
};

export default Question;
