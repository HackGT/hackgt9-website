import { Link, Text, Image, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

import styles from "../TracksChallenges.module.scss";

const Reimbursement = () => {
  const [buses, setBuses] = useState(false);
  const [reimbursements, setReimbursements] = useState(false);

  return (
    <div id={styles.reimbursement}>
      <Text className={styles.subheader} paddingBottom="15px">
        Travel Reimbursement
      </Text>
      <Text className={styles.subtext} paddingBottom="30px">
        All students seeking gas reimbursement or bus spots must register before September 22nd. We{" "}
        {"don't"} want anything to stop our hackers from being able to experience HackGT 9,
        including transportation! This year we will be bringing back travel aid in 2 ways: buses and
        reimbursements. Check out this{" "}
        <b>
          <a
            href="https://www.notion.so/hexlabs/HackGT-9-Travel-Assistance-7ec31612f80846189600028761147390"
            target="_blank"
            rel="noreferrer"
          >
            page
          </a>
        </b>{" "}
        for more information.
      </Text>
      <VStack spacing={"20px"}>
        <VStack spacing={"0px"} className={styles.td}>
          <div className={styles.td_question}>
            <HStack
              className={`${styles.track} ${styles.clickable}`}
              onClick={() => {
                setBuses(!buses);
              }}
            >
              <Text>Buses</Text>
              {buses ? (
                <Image
                  draggable="false"
                  className={styles.arrow}
                  alt="arrow down"
                  src="/icon/arrows/akar-icons_chevron-down.png"
                />
              ) : (
                <Image
                  draggable="false"
                  className={styles.arrow}
                  id={styles.down_arrow}
                  alt="arrow up"
                  src="/icon/arrows/akar-icons_chevron-down.png"
                />
              )}
            </HStack>
          </div>
          {buses ? (
            <Text className={styles.td_answer}>
              Buses help our players get to the arcade safely and at NO COST. Below is a list of
              schools we will be sending buses to:
              <ul>
                <li>University of Florida</li>
                <li>University of Central Florida</li>
                <li>University of South Florida</li>
              </ul>
            </Text>
          ) : (
            <div />
          )}
        </VStack>
        <VStack spacing={"0px"} className={styles.td}>
          <div className={styles.td_question}>
            <HStack
              className={`${styles.track} ${styles.clickable}`}
              onClick={() => {
                setReimbursements(!reimbursements);
              }}
            >
              <Text>Reimbursements</Text>
              {reimbursements ? (
                <Image
                  draggable="false"
                  className={styles.arrow}
                  alt="arrow down"
                  src="/icon/arrows/akar-icons_chevron-down.png"
                />
              ) : (
                <Image
                  draggable="false"
                  className={styles.arrow}
                  id={styles.down_arrow}
                  alt="arrow up"
                  src="/icon/arrows/akar-icons_chevron-down.png"
                />
              )}
            </HStack>
          </div>
          {reimbursements ? (
            <Text className={styles.td_answer}>
              If a bus is not coming to a university near you, you may be eligible for gas
              reimbursement. We will no longer be considering flight reimbursements. We have a
              limited number of spots for reimbursements which will be given on a
              first-come-first-served basis. Please register before September 22nd and indicate your
              reimbursement interest.
            </Text>
          ) : (
            <div />
          )}
        </VStack>
      </VStack>
    </div>
  );
};

export default Reimbursement;
