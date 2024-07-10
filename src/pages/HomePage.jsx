import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* You can put props inside a component like below */}
      {/* <Hero title='Prosper Mbuma' subtitle='Software Engineer | Cybersecurity Professional | Content Creator' /> */}
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
