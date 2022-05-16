import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import Answer from "./Answer";
import Question from "./Question";

interface QAProps {
  question: string;
  answer: string;
}

const QA = (QAProps: any) => {
  const [questionClicked, setQuestionClicked] = useState(false);

  return (
    <div>
      <VStack>
        <Question
          onClick={() => {
            setQuestionClicked(!questionClicked);
          }}
          question={QAProps.question}
        />
        {questionClicked ? <Answer answer={QAProps.answer} /> : null}
      </VStack>
    </div>
  );
};

export default QA;
