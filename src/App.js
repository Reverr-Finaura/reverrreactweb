import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { selectNewUser } from "./features/newUserSlice";
import { login, logout, selectUser } from "./features/userSlice";
import Card from "./pages/AfterSignUp/Cards/Card";
import Auth from "./pages/Auth/Auth";
import EnterOtp from "./pages/EnterOtp/EnterOtp";
import ForgotPassword from "./pages/Forgotpassword/ForgotPassword";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PasswordReset from "./pages/PasswordRecover/PasswordReset";
import Experience from "./pages/AfterSignUp/Experience/Experience";
import Industry from "./pages/AfterSignUp/Industry/Industry";
import Onboarding from "./pages/AfterSignUp/Onboarding/Onboarding";
import Education from "./pages/AfterSignUp/Education/Education";
import Gender from "./pages/AfterSignUp/Gender/Gender";
import Review from "./pages/AfterSignUp/Review page/Review";
import Confirmation from "./pages/AfterSignUp/Confirmation/Confirmation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import Verification from "./pages/AfterSignUp/Verification/Verification";
import { Toaster } from "react-hot-toast";
import Knowledge from "./pages/Knowledge/Knowledge";
import Mentors from "./pages/Mentors/Mentors";
import BetaTesting from "./pages/AfterKnowledge/BetaTesting/BetaTesting";
import IdeaValidation from "./pages/AfterKnowledge/Idea Validation & EP/IdeaValidation";
import BusinessPlanning from "./pages/AfterKnowledge/BusinessPlanning/BusinessPlanning";
import Newsletter from "./pages/AfterKnowledge/Newsletter/Newsletter";
import BuildAudience from "./pages/AfterKnowledge/BuildAudience/BuildAudience";
import BusinessModal from "./pages/AfterKnowledge/BusinessModal/BusinessModal";
import ESOP from "./pages/AfterKnowledge/ESOP/ESOP";
import FounderAgreement from "./pages/AfterKnowledge/Founder Agreement/FounderAgreement";
import EquityAndEverything from "./pages/AfterKnowledge/EquityAndEverything/EquityAndEverything";
import IV_Slides from "./pages/AfterKnowledge/Idea Validation & EP/IV_Slides";
import ESOP_Slides from "./pages/AfterKnowledge/ESOP/ESOP_Slides";
import FA_Slides from "./pages/AfterKnowledge/Founder Agreement/FA_Slides";
import Slide from "./components/After knowledge/Slide Format/Slide";
import BetaSlide from "./pages/AfterKnowledge/BetaTesting/BetaSlide";
import FundraisingSlides from "./pages/AfterKnowledge/FundraisingAndMeans/FundraisingSlides";
import FundraisingAndMeans from "./pages/AfterKnowledge/FundraisingAndMeans/FundraisingAndMeans";
import MentorForm from "./pages/MentorForm/MentorForm";
import MentorMoreDetails from "./pages/MentorForm/MentorMoreDetails";
import Mentor from "./pages/Mentor/Mentor";
import Funding from "./pages/Funding/FundingPage/Funding";
import FundingForm from "./pages/Funding/FundingForm";
import MentorProfile from "./pages/MentorProfile/MentorProfile";
import Community from "./pages/Community/Community";
import Schedule from "./pages/Schedule/Schedule";
import ReachingOutSlides from "./pages/AfterKnowledge/ReachingOutToInvestor/ReachingOutSlides";
import BusinessPlanningSlides from "./pages/AfterKnowledge/BusinessPlanning/BusinessPlanningSlides";
import EESlides from "./pages/AfterKnowledge/EquityAndEverything/EESlides";
import FinanceforStartupSlides from "./pages/AfterKnowledge/FinanceForStartup/FinanceforStartupSlides";
import FInanceForStartup from "./pages/AfterKnowledge/FinanceForStartup/FInanceForStartup";
import ReachingOutToInvestor from "./pages/AfterKnowledge/ReachingOutToInvestor/ReachingOutToInvestor";
import SocialMediaSlides from "./pages/AfterKnowledge/SocialMedia/SocialMediaSlides";
import SocialMedia from "./pages/AfterKnowledge/SocialMedia/SocialMedia";
import NotFound from "./pages/NotFound/NotFound";
import BuildAudienceSlides from "./pages/AfterKnowledge/BuildAudience/BuildAudienceSlides";
import BusinessModalSlides from "./pages/AfterKnowledge/BusinessModal/BusinessModalSlides.jsx";
import CompetitorAnalysis from "./pages/AfterKnowledge/CompetitorAnalysis/CompetitorAnalysis";
import CompetitorAnalysisSlides from "./pages/AfterKnowledge/CompetitorAnalysis/CompetitorAnalysisSlides";
import ProductDevelopment from "./pages/AfterKnowledge/ProductDevelopment/ProductDevelopment";
import ProductDevelopmentSlide from "./pages/AfterKnowledge/ProductDevelopment/ProductDevelopmentSlide";
import ThinkingOfStartup from "./pages/AfterKnowledge/ThinkingOfStartup/ThinkingOfStartup";
import ThinkingOfStartupSlide from "./pages/AfterKnowledge/ThinkingOfStartup/ThinkingOfStartupSlide";
import Dashboard from "./pages/Dashboard/Dashboard";
import Payment from "./pages/Payment/Payment";
import ThankYou from "./pages/ThankYou/ThankYou";
import ScrollToTop from "react-scroll-to-top";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { selectMentor } from "./features/scheduleSlice";
import { ColorRing } from "react-loader-spinner";
import Loading from "./pages/Loading/Loading";

function App() {
  var data = [];
  const [userArray, setUserArray] = useState([]);
  const user = useSelector(selectUser);
  const newUser = useSelector(selectNewUser);
  const dispatch = useDispatch();
  const mentor = useSelector(selectMentor);
  const navigate = useNavigate();
  const data2 = [];
  const [mentorsArray, setMentorsArray] = useState([]);

  useEffect(() => {
    async function fetchMentors() {
      const usersRef = collection(db, "Users");
      const q = query(
        usersRef,
        where("userType", "==", "Mentor"),
        where("industry", "==", "IT Services"),
        limit(2)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data2.push(doc.data());
      });
      setMentorsArray(data2);
    }

    fetchMentors();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL,
          })
        );

        async function checkUser() {
          const q = query(
            collection(db, "Users"),
            where("email", "==", user.email)
          );
          const querySnapshot = await getDocs(q);
          // console.log(querySnapshot);
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });

          setUserArray(data);
        }

        checkUser()
          .then(() => {
            // navigate("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        dispatch(logout());
      }
    });
  }, []);

  // console.log(userArray[0]);

  return (
    <>
      <Toaster />
      <ScrollToTop smooth />
      <Routes>
        <Route path="/" element={<Home />} />
        {!user ? (
          <>
            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : null}
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/password-reset" element={<PasswordReset />} />
        {newUser ? (
          <Route path="enterotp" element={<EnterOtp />}></Route>
        ) : null}
        {user ? (
          <>
            <Route path="/startup-list" element={<Card />} />
            <Route path="/industry" element={<Industry />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/gender" element={<Gender />} />
            <Route path="/startup-confirm" element={<Confirmation />} />
            <Route path="/startup-onboarding" element={<Onboarding />} />
            <Route path="/startup-review" element={<Review />} />{" "}
            {userArray.length > 0 ? (
              <>
                {userArray[0]?.isVerified === true ? (
                  <>
                    <Route
                      path="/startup-verification"
                      element={<Verification />}
                    />
                    <Route path="/knowledge" element={<Knowledge />}></Route>
                    <Route path="/mentors" element={<Mentors />}></Route>
                    <Route
                      path="/mentor/:clickedOn/:type"
                      element={<Mentor />}
                    ></Route>
                    <Route path="/funding" element={<Funding />}></Route>
                    <Route
                      path="/fundingform"
                      element={<FundingForm />}
                    ></Route>
                    <Route
                      path="/mentor-profile/:email"
                      element={<MentorProfile />}
                    ></Route>
                    <Route path="/community" element={<Community />}></Route>
                    <Route
                      path="/schedule/:mentorEmail"
                      element={<Schedule />}
                    ></Route>
                    <Route
                      path="/thankyou/:mentorEmail"
                      element={<ThankYou />}
                    ></Route>
                    {/* {userArray[0]?.mentors?.includes(mentor?.email) ? (
                      <>
                        <Route
                          path="/schedule/:mentorEmail"
                          element={<Schedule />}
                        ></Route>
                        <Route
                          path="/thankyou/:mentorEmail"
                          element={<ThankYou />}
                        ></Route>
                      </>
                    ) : (
                      <Route path="*" element={<Loading />} />
                    )} */}
                    <Route
                      path="/dashboard"
                      element={
                        <Dashboard
                          userInfo={userArray[0]}
                          mentors={mentorsArray}
                        />
                      }
                    ></Route>
                    <Route path="/betaslide" element={<BetaSlide />}></Route>
                    <Route path="/eeslides" element={<EESlides />}></Route>
                    <Route
                      path="/equityandeverything"
                      element={<EquityAndEverything />}
                    ></Route>
                    <Route
                      path="/financeforstartup"
                      element={<FInanceForStartup />}
                    ></Route>
                    <Route
                      path="/financeforstartupslides"
                      element={<FinanceforStartupSlides />}
                    ></Route>
                    <Route
                      path="/betatesting"
                      element={<BetaTesting />}
                    ></Route>
                    <Route
                      path="/betatestingslides"
                      element={<BetaSlide />}
                    ></Route>

                    <Route
                      path="/buildingaudience"
                      element={<BuildAudience />}
                    ></Route>
                    <Route
                      path="/buildingaudienceslides"
                      element={<BuildAudienceSlides />}
                    ></Route>

                    <Route
                      path="/businessmodal"
                      element={<BusinessModal />}
                    ></Route>
                    <Route
                      path="/businessmodalslides"
                      element={<BusinessModalSlides />}
                    ></Route>

                    <Route
                      path="/businessplanning"
                      element={<BusinessPlanning />}
                    ></Route>
                    <Route
                      path="/businessplanningslides"
                      element={<BusinessPlanningSlides />}
                    ></Route>

                    <Route
                      path="/competitoranalysis"
                      element={<CompetitorAnalysis />}
                    ></Route>
                    <Route
                      path="/competitoranalysisslides"
                      element={<CompetitorAnalysisSlides />}
                    ></Route>

                    <Route
                      path="/productdevelopment"
                      element={<ProductDevelopment />}
                    ></Route>
                    <Route
                      path="/productdevelopmentslides"
                      element={<ProductDevelopmentSlide />}
                    ></Route>

                    <Route
                      path="/thinkingofstartup"
                      element={<ThinkingOfStartup />}
                    ></Route>
                    <Route
                      path="/thinkingofstartupslides"
                      element={<ThinkingOfStartupSlide />}
                    ></Route>

                    <Route path="/esop" element={<ESOP />}></Route>
                    <Route
                      path="/esop-slides"
                      element={<ESOP_Slides />}
                    ></Route>
                    <Route
                      path="/idea-validation"
                      element={<IdeaValidation />}
                    ></Route>
                    <Route
                      path="/idea-validation-slides"
                      element={<IV_Slides />}
                    ></Route>
                    <Route
                      path="/fundraising-and-means"
                      element={<FundraisingAndMeans />}
                    ></Route>
                    <Route
                      path="/fundraising-and-means-slides"
                      element={<FundraisingSlides />}
                    ></Route>
                    <Route
                      path="/reaching-out-to-investor"
                      element={<ReachingOutToInvestor />}
                    ></Route>
                    <Route
                      path="/reaching-out-to-investor-slides"
                      element={<ReachingOutSlides />}
                    ></Route>
                    <Route
                      path="/social-media"
                      element={<SocialMedia />}
                    ></Route>
                    <Route
                      path="/social-media-slides"
                      element={<SocialMediaSlides />}
                    ></Route>
                    <Route path="/payment/:mentorEmail" element={<Payment />} />
                  </>
                ) : (
                  <Route path="*" element={<Loading />} />
                )}
                <Route path="/mentorform" element={<MentorForm />}></Route>
                <Route
                  path="/mentordetails"
                  element={<MentorMoreDetails />}
                ></Route>
              </>
            ) : (
              <Route path="*" element={<Loading />} />
            )}
          </>
        ) : null}

        <Route path="*" element={<NotFound />}></Route>
        <Route path="/loading" element={<Loading />} />
        {/* <Route path="/thankyou/:mentorEmail" element={<ThankYou />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
