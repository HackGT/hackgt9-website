interface QuestionProps {
  question: string;
}

const Question = (QuestionProps: any) => {
  return <div>{QuestionProps.question}</div>;
};

export default Question;
