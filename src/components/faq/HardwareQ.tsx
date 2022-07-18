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
          <Text className={`${styles.question} ${styles.both}`}>Will hardware be provided?</Text>
          {questionClicked ? (
            <Image alt="arrow down" src="/icon/arrows/akar-icons_chevron-down.png" />
          ) : (
            <Image
              className={styles.flip}
              alt="arrow up"
              src="/icon/arrows/akar-icons_chevron-down.png"
            />
          )}
        </HStack>
      </Box>
      <Collapse in={questionClicked} animateOpacity>
        <Text className={`${styles.answer} ${styles.both}`}>
          We will provide hardware to any participant needing it for their project at our hardware
          desk! If {"you'd"} like to have a say in what type of hardware will be provided at the
          event, please fill out this{" "}
          <a
            className={styles.link}
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdnM-6WfRD-EygANcL0aSCbQBlwlmT_6l4kebUSb89GxpW7gg/viewform"
          >
            form
          </a>{" "}
          so our team knows what {"you're"} interested in.
        </Text>
      </Collapse>
    </div>
  );
};

export default QA;
