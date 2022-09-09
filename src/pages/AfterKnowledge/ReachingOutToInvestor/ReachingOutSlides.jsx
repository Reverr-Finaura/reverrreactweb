import React, { useState } from "react";
import Slide from "../../../components/After knowledge/Slide Format/Slide";

const ReachingOutSlides = () => {
  const obj = [
    {
      title: "How the Pitch Process Works",
      para: "Like many, you have probably never been through a funding program before (why not?) So we will give you a full tour. We will take you through every step of the way to raising the voice from the First Email Presentations to the Investor Conversations to the Last Term Sheet and then closing and give you advice on how to deal with each step.",
      img: "roi1.png",
    },
    {
      title: "Introduction to Investors",
      para: "Chances are that you don't know any investors directly, but that doesn't mean you can't find ways to make different types of personal connections back to investors. We will start with how we can find communication between investors and work on other interventions that include similar interests that can make the difference between a cold introduction and a warm introduction that keeps the conversation going.",
      img: "roi2.png",
    },
    {
      title: "The Email Pitch",
      para: "Creating a complete email pitch is about breaking down the features of your entire voice into just a few sentences of choice. We will split each line of the pitch to give you a deliberate outline you can create your own pitch against it to hit each high point right in the nose.",
      img: "roi3.png",
    },
    {
      title:
        "Email Introductions\nRequirements: Elevator Pitch, Email Pitch Template",
      para: "Once you've got your list of investors ready, first step is to reach out to them with a very well-crafted email. Your introduction should include both your Elevator Pitch and all of the elements of the perfect Email Pitch Template. The goal of the email introduction isn't to convince investors to write a check - it's to get them interested enough to want to learn more about you. You're hoping they will do a little homework on your company, and if they like what they see, they will ask you for more information on the company.",
      img: "roi4.png",
    },
    {
      title: "Investor is asking:",
      para: "How do I know this person? (Personal connection to Founder)\n\
            Do I understand the problem this company is trying to solve?\n\
            Do I care about the solution?\n\
            Is this a big enough market for me to get a good return on my investment?\n\
             Does this sound feasible enough to spend more of my time?\n\
        ",
      img: "roi4.png",
    },
    {
      title: "Contacting Investors",
      para: "Once you've done your homework, it's time to connect with investors. We will show you how to take baby steps regarding contacting investors so you can reach out, collect feedback, improve your approach, and contact more investors. The more you improve and improve your voice as you go, the more effective you will be at scoring points.",
      img: "roi5.png",
    },
    {
      title: "How the Pitch process works: -\nInvestor researches team",
      para: "A quick email describing the company, hopefully presented in a friendly connection.",
      img: "roi6.png",
    },
    {
      title: "Requirements: LinkedIn Profile, Social Media",
      para: `Depending on how you’re introduced (through a warm introduction or a cold email) an investor is going to want to know a bit about you personally. Ultimately, they want to know “is this person credible?” You can have an amazing idea but if you aren’t a credible Founder, their confidence that you can pull of the idea is fairly low.
Investors also realize there are lots of great ideas, but finding credible Founders is a harder search. Therefore, you want to make sure what they do find about you is your best foot forward.
The most likely source of information is going to be your LinkedIn profile since most people maintain this as a primary source of their business resume. Within the profile make sure you add your resume to highlight any experience you have that relates to this startup.
Beyond LinkedIn, also consider what else shows up in a Google search for your name. if you have specific references that you’d like people to find, like a blog or Twitter account, do yourself a favor and point directly to those links in your outbound communications.
Last, if you have press that you’ve received that in any way either relates to this business or perhaps a meaningful past success, don’t be afraid to include that as well. That will help establish some 3rd party validation that you’ve done something meaningful.
`,
      img: "roi7.png",
    },
    {
      title: "Investor is asking:",
      para: `Are the Founders credible? 
What have the Founders done that makes them capable of solving this problem 
What does their social media and personal Web presence say about them?
Can I cross-reference their credibility with a 3rd party source? 
`,
      img: "roi8.png",
    },
  ];

  var totalLen = Object.keys(obj).length;
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <>
      {obj.map((slide, index) => (
        <div
          key={index}
          style={{ display: currIndex === index ? "block" : "none" }}
        >
          <Slide
            content={slide}
            setCurrIndex={setCurrIndex}
            currIndex={currIndex}
            size={totalLen}
          />
        </div>
      ))}
    </>
  );
};

export default ReachingOutSlides;
