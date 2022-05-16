import { Text } from "@chakra-ui/react";
import styles from "./Faq.module.scss";

interface AnswerProps {
  answer: string;
}

const Answer = (AnswerProps: any) => {
  return <Text className={`${styles.answer} ${styles.both}`}>{AnswerProps.answer}</Text>;
};

export default Answer;
