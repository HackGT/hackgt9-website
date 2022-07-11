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
        <title>Template Event Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar anchors={links.components} />
      <section id="home">
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
        <EmergingTracks />
      </section>
      <section id="schedule">
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
