import { Text, VStack } from "@chakra-ui/react";
import Answer from "./Answer";
import Question from "./Question";

interface QAProps {
  question: string;
  answer: string;
}

const QA = (QAProps: any) => {
  return (
    <div>
      <VStack>
        <Question question={QAProps.question} />
        <Answer answer={QAProps.answer} />
      </VStack>
    </div>
  );
};

export default QA;
