import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
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

const Home: NextPage = (props) => {
  return (
    <div className="main">
      <Head>
        <title>HackGT 9: Retro Reset</title>
        <meta name="description" content="Time for a blast to the past" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar anchors={links.components} />
      <div id="home">
        <Main toJump="#registration" />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="tracks_and_challenges">
        <TrackChallenge />
      </div>
      <div id="general_tracks">
        <GeneralTracks />
      </div>
      <div id="emerging_tracks">
        <EmergingTracks />
      </div>
      <div id="schedule">
        <ScheduleTab virtual={false} />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
