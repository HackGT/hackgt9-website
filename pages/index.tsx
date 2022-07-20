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
        <About />
      </section>
      <section id="tracks_and_challenges">
        <TrackChallenge />
      </section>
      <section id="general_tracks">
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
        <EmergingTracks />
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
      <section id="faq">
        <Faq />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
