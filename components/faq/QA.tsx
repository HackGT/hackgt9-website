import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import styles from "./Faq.module.scss";

interface QAProps {
  question: string;
  answer: string;
}

const QA = (QAProps: any) => {
  const [questionClicked, setQuestionClicked] = useState(false);

  return (
    <VStack className={styles.qa_shape}>
      <Question
        onClick={() => {
          setQuestionClicked(!questionClicked);
        }}
        question={QAProps.question}
      />
      {questionClicked ? <Answer answer={QAProps.answer} /> : null}
    </VStack>
  );
};

export default QA;
