import { HStack, VStack, Text, Link, Image } from "@chakra-ui/react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <footer>
        <VStack className={styles.footer_content}>
          <HStack>
            <Link href="https://www.instagram.com/thehexlabs/">
              <Image src="/icon/insta.svg" alt="instagram" />
            </Link>
            <Link href="https://www.facebook.com/TheHexLabs">
              <Image src="/icon/fb.svg" alt="facebook" />
            </Link>
            <Link href="https://twitter.com/TheHexLabs">
              <Image src="/icon/twitter.svg" alt="twitter" />
            </Link>
            <Link href="https://github.com/HackGT">
              <Image src="/icon/github.svg" alt="github" />
            </Link>
            <Link href="https://hexlabs.org/">
              <Image src="/icon/web.svg" alt="hexlabs" />
            </Link>
          </HStack>
          <Text>With 💜 from the HexLabs team</Text>
        </VStack>
      </footer>
    </div>
  );
};

export default Footer;
