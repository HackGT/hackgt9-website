import type { NextPage } from "next";
import Head from "next/head";
import About from "../src/components/about/About";
import Faq from "../src/components/faq/Faq";
import Main from "../src/components/main/Main";
import Sponsors from "../src/components/sponsors/Sponsors";
import TrackChallenge from "../src/components/tracks_and_challenges/BaseChallengeTrack";

import links from "../src/components/navbar/nav.json";
import Navbar from "../src/components/navbar/Navbar";
import ScheduleTab from "../src/components/schedule/ScheduleTab";
import Footer from "../src/components/footer/Footer";
import GeneralTracks from "../src/components/tracks_and_challenges/general_tracks/GeneralTracks";
import EmergingTracks from "../src/components/tracks_and_challenges/emerging_tracks/EmergingTracks";
import Reimbursement from "../src/components/tracks_and_challenges/reimbursement/Reimbursement";
import ImageWrapper from "../src/components/image/ImageWrapper";

// import Image from "@chakra-ui/react";

const Home: NextPage = (props) => {
  return (
    <div className="main">
      <Head>
        <title>HackGT 9: Retro Reset</title>
        <meta name="description" content="Time for a blast to the past" />
        <link rel="icon" type="image/png" href="/icon/logo/filled_in_hackgt9_logo.png" />
      </Head>
      <Navbar anchors={links.components} />

      <section id="home">
        <ImageWrapper
          alt="big big ellipse"
          src="/img/main/main_page_large_ellipse.png"
          id="main_large_ellipse"
        />
        <ImageWrapper
          id="main_small_ellipse"
          alt="little ellipse"
          src="/img/main/main_page_small_ellipse.png"
        />
        <ImageWrapper id="main_arc" alt="arc" src="/img/main/main_page_arc.png" />
        <Main toJump="#registration" />
      </section>
      <section id="about">
        <ImageWrapper
          id="about_blue_radgrad"
          alt="faint blue radgrad"
          src="/img/about/faint_blue_radgrad.png"
        />
        <ImageWrapper
          id="about_purple_radgrad"
          alt="faint purple radgrad"
          src="/img/about/faint_purple_radgrad.png"
        />
        <ImageWrapper id="about_orange_arc" alt="orange arc" src="/img/about/orange_arc.png" />
        <About />
        <ImageWrapper
          id="about_small_blue_radgrad"
          alt="small faint blue radgrad"
          src="img/about/small_faint_blue_radgrad.png"
        />
        <ImageWrapper
          id="about_purple_orange_radgrad"
          alt="purple orange radgrad"
          src="img/about/purple_orange_radgrad.png"
        />
      </section>
      <section id="tracks_and_challenges">
        <ImageWrapper
          id="tracks_giant_pink_ellipse"
          alt="giant pink ellipse"
          src="img/tracks/giant_faint_pink_ellipse.png"
        />
        <ImageWrapper
          id="tracks_teal_ellipse"
          alt="teal ellipse"
          src="img/tracks/teal_ellipse.png"
        />
        <TrackChallenge />
        <ImageWrapper
          id="tracks_blue_ellipse"
          alt="blue ellipse"
          src="img/tracks/faint_blue_ellipse.png"
        />
        <ImageWrapper
          id="tracks_pink_ellipse"
          alt="pink ellipse"
          src="img/tracks/pink_ellipse.png"
        />
      </section>
      <section id="general_tracks">
        <ImageWrapper
          id="general_pink_ellipse"
          alt="pink ellipse"
          src="img/general/pink_ellipse.png"
        />
        <ImageWrapper
          id="general_dark_blue_ellipse"
          alt="dark blue ellipse"
          src="img/general/dark_blue_ellipse.png"
        />
        <GeneralTracks />
      </section>
      <section id="emerging_tracks">
        <ImageWrapper
          alt="pink circle thingie"
          src="/img/emerging/giant_pink_ellipse.png"
          id="emerging_giant_pink_ellipse"
        />
        <ImageWrapper
          alt="blue thingie"
          src="/img/emerging/faint_blue_ellipse.png"
          id="emerging_faint_blue_ellipse"
        />
        <ImageWrapper
          alt="yellow thing"
          src="/img/emerging/yellow_streak.png"
          id="emerging_yellow_streak"
        />
        <ImageWrapper
          id="emerging_pink_ellipse"
          alt="pink ellipse"
          src="/img/emerging/pink_ellipse.png"
        />
        <EmergingTracks />
      </section>
      <section id="faq">
        <ImageWrapper
          id="faq_blue_ellipse"
          alt="blue ellipse"
          src="/img/faq/giant_blue_ellipse.png"
        />
        <ImageWrapper id="faq_red_streak" alt="red streak" src="/img/faq/red_streak.png" />
        <Faq />
        <Reimbursement />
      </section>
      <section id="schedule">
        <ImageWrapper
          id="schedule_dark_blue_ellipse"
          alt="blue ellipse thingy"
          src="/img/schedule/dark_blue_ellipse.png"
        />
        <ImageWrapper
          id="schedule_faint_blue_ellipse"
          alt="faint blue ellipse"
          src="/img/schedule/faint_blue_ellipse.png"
        />
        <ImageWrapper
          id="schedule_pink_streak"
          alt="pink thing"
          src="/img/schedule/pink_streak.png"
        />
        <ScheduleTab virtual={false} />
      </section>
      <section id="sponsors">
        <ImageWrapper
          id="sponsors_purple_blob"
          alt="purple blob"
          src="/img/sponsors/purple_blob.png"
        />
        <Sponsors />
        <ImageWrapper id="sponsors_pink_arc" alt="pink arc" src="/img/sponsors/pink_arc.png" />
        <ImageWrapper
          id="sponsors_pink_ellipse"
          alt="pink ellipse"
          src="/img/sponsors/pink_ellipse.png"
        />
        <ImageWrapper
          id="sponsors_blue_blob"
          alt="blue blob"
          src="/img/sponsors/light_blue_blob.png"
        />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
