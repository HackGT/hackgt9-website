import { Text, Box, Image, Grid, GridItem, HStack} from "@chakra-ui/react";
import styles from "./About.module.scss"
const About = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/about/radgrad1.png" alt="radius gradient" className={styles.radgrad1} ></Image>
      <Image src="/img/about/radgrad2.png" alt="radius gradient" className={styles.radgrad2} ></Image>
      <Box className={styles.mainBox}>
          <Text className={styles.title}>About</Text>
          <Text className={styles.bodyText}>Discover your craft this fall at HackGT 8 from October 22nd - 24th!
            {`We're`} back with the eighth iteration of our flagship event where we bring you to the HackGT 
            marketplace to support you as you hone your hacking skills and explore a weekend filled with 
            community and compassion.</Text>
            <Grid className={styles.tetris} templateAreas={`"a b c d e" "f g h i j" "k l m n o"`}>
              <GridItem  area={"k"}>
                <Image src="/img/about/tetris1.png" alt="tetris"></Image>
              </GridItem>
              <GridItem  area={"l"}>
                <Image src="/img/about/tetris1.png" alt="tetris"></Image>
              </GridItem>
              <GridItem  area={"m"}>
                <Image src="/img/about/tetris1.png" alt="tetris"></Image>
              </GridItem>
              <GridItem   area={"g"}>
                <Image src="/img/about/tetris1.png" alt="tetris"></Image>
              </GridItem>
              <GridItem  area={"e"}>
                <Image src="/img/about/tetris2.png" alt="tetris"></Image>
              </GridItem>
              <GridItem  area={"n"}>
                <Image src="/img/about/tetris2.png" alt="tetris"></Image>
              </GridItem>
              <GridItem area={"o"}>
                <Image src="/img/about/tetris2.png" alt="tetris"></Image>
              </GridItem>
              <GridItem area={"j"}>
                <Image src="/img/about/tetris2.png" alt="tetris"></Image>
              </GridItem>
            </Grid>
      </Box>
      <Image src="/img/about/radgrad4.png" alt="radius gradient" className={styles.radgrad3} ></Image>
      <Image src="/img/about/radgrad3.png" alt="radius gradient" className={styles.radgrad4} ></Image>
      
    </div>
  );
};

export default About;
