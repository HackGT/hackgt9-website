import { Collapse, HStack, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import styles from "./Faq.module.scss";

interface QAProps {
  key: string;
  question: string;
  answer: string;
}

const QA = (qap: QAProps) => {
  const [questionClicked, setQuestionClicked] = useState(false);

  return (
    <div className={styles.qa_shape}>
      <HStack
        className={styles.clickable}
        onClick={() => {
          setQuestionClicked(!questionClicked);
        }}
      >
        <Text className={styles.question}>{qap.question}</Text>
        {questionClicked ? (
          <Image
            className={styles.arrow}
            alt="arrow up"
            fontStyle="bold"
            src="/svg/faq/up_arrow.svg"
          />
        ) : (
          <Image className={styles.arrow} alt="arrow down" src="/svg/faq/down_arrow.svg" />
        )}
      </HStack>
      <Collapse in={questionClicked} animateOpacity>
        <Text className={styles.answer}>{qap.answer}</Text>
      </Collapse>
    </div>
  );
};

export default QA;
