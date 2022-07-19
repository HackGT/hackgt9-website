import { Box, Collapse, Text, Image, HStack } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./Faq.module.scss";

const QA = () => {
  const [questionClicked, setQuestionClicked] = useState(false);

  return (
    <div className={styles.qa_shape}>
      <Box
        className={styles.clickable}
        onClick={() => {
          setQuestionClicked(!questionClicked);
        }}
      >
        <HStack>
          <Text className={`${styles.question} ${styles.both}`}>
            How does the admissions process work?
          </Text>
          {questionClicked ? (
            <Image
            className={styles.arrow}
            alt="arrow up"
            src="svg/faq/up_arrow.svg"
            />
            ) : (
            <Image alt="arrow down" className={styles.arrow} src="/svg/faq/down_arrow.svg" />
          )}
        </HStack>
      </Box>
      <Collapse in={questionClicked} animateOpacity>
        <Text className={`${styles.answer} ${styles.both}`}>
          If {"you're"} interested in our admissions process you can read more{" "}
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/thehackgt/hackgt-6-admissions-6d66f7d1c22c"
          >
            here
          </a>{" "}
          !
        </Text>
      </Collapse>
    </div>
  );
};

export default QA;