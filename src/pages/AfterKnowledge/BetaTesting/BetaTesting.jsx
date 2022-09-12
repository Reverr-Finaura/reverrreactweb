import React from "react";
import CourseContent from "../../../components/After knowledge/Course content/CourseContent";
import CourseIntro from "../../../components/After knowledge/Course Intro/CourseIntro";
import CourseReview from "../../../components/After knowledge/Course review/CourseReview";
import Hero from "../../../components/After knowledge/Hero-section/Hero";
import Header from "../../../components/Header/Header";
import Footer from "../../Footer/Footer";

const BetaTesting = () => {
  const courseDetails = {
    title: "Beta Testing-Learn from the basic level to the best",
    para: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop anywhere you like on your page.",
  };
  return (
    <>
      <Header theme="black" />
      <Hero
        imgUrl="betatesting.png"
        // heading="Idea validation and elevator pitch"
      />
      <CourseIntro url="/betatestingslides" courseDetails={courseDetails} />
      <CourseContent imgUrl="betaimg2.png" />
      <CourseReview />
      <Footer />
    </>
  );
};

export default BetaTesting;
