interface AnswerProps {
  answer: string;
}

const Answer = (AnswerProps: any) => {
  return <div>{AnswerProps.answer}</div>;
};

export default Answer;
