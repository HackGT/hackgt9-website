import { Text } from "@chakra-ui/react";
import styles from "./Faq.module.scss";

interface QuestionProps {
  question: string;
  onClick: any;
}

const Question = (QuestionProps: any) => {
  return (
    <Text onClick={QuestionProps.onClick} className={styles.question}>
      {QuestionProps.question}
    </Text>
  );
};

export default Question;
