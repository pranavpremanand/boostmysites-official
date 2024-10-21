import React, { useState } from "react";
import bannerImg from "../../../assets/home/home-page-banner.jpg";
import arrowIcon from "../../../assets/home/arrow-down-big.png.png";
import TypeIt from "typeit-react";
import StartYourBusiness from "../../../components/StartYourBusiness";
import imgArrow from "../../../assets/home/arw2.png.png";
import imgArrow2 from "../../../assets/home/arw3.png";
import imgArrow3 from "../../../assets/home/arw4.png";
import grid1Img from "../../../assets/home/04.jpg.png";
import grid2Img from "../../../assets/home/04.jpg (1).png";
import grid3Img from "../../../assets/home/grid-3.png";
import arrowToBR from "../../../assets/home/arw0.png.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import teamImg1 from "../../../assets/home/team1.jpg.png";
import teamImg2 from "../../../assets/home/team2.jpg.png";
import teamImg3 from "../../../assets/home/team3.jpg.png";
import teamImg4 from "../../../assets/home/team4.jpg.jpg";
import teamImg5 from "../../../assets/home/team5.jpg.jpg";
import teamImg6 from "../../../assets/home/team6.jpg.jpg";
import teamImg7 from "../../../assets/home/team7.jpg";
import teamVid from "../../../assets/videos/our-team-vid.mp4";
import teamVidThumb from "../../../assets/videos/our-team-vid-thumbnail.png";
import ReactPlayer from "react-player";
import quotesIcon from "../../../assets/home/quotes.png";
import { BiPlay } from "react-icons/bi";
import LeadForm from "../../../components/LeadForm";
import FeaturedIn from "../../../components/FeaturedIn";
import OurOffices from "../../../components/OurOffices";

const Home = () => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="bg-tertiary text-white">
      <div
        className="bg-cover bg-tertiary md:min-h-[130vh] flex flex-col justify-center w-full relative"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "40% 55%",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <div className="md:-translate-y-[15vh] wrapper grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 w-full z-30 pt-[10rem] md:pt-[17rem] lg:pt-[20rem] pb-[4rem]">
          <div className="flex flex-col items-start">
            <h2
              data-aos="fade-right"
              className="text-[2.6rem] leading-tight sm:text-7xl xl:text-[5.5rem]"
            >
              Welcome to
            </h2>
            <h2
              data-aos="fade-right"
              className="text-[2.6rem] font-extrabold leading-tight sm:text-7xl xl:text-[5.5rem] text-primary1"
            >
              BOOSTMYSITES.
            </h2>
            <img
              data-aos="fade-down"
              src={arrowIcon}
              alt="arrow"
              className="hidden lg:block h-[6rem] object-contain mt-10 ml-5"
            />
          </div>
          <div data-aos="zoom-in" className="flex flex-col max-w-[22rem]">
            <h5 className="text-xl font-medium">
              We are an <br />
              <TypeIt options={{ loop: true, speed: 70, html: true }}>
                <span className="text-primary1">
                  IT & Software Development Service
                </span>
              </TypeIt>
              <br />
              Company
            </h5>
            <p className="mt-2 text-wrap">
              Your one-stop solution for AI and IT development, business
              infrastructure, and consultancy. At Boostmysites, we not only
              provide expert support but also develop the right technology
              tailored to your business needs. We also empower entrepreneurs
              launch and scale with reduced risk, time, and investment, ensuring
              long-term success with cutting-edge solutions.
            </p>
          </div>
          <div className="lg:col-span-2 flex justify-between lg:justify-end lg:-translate-x-[15%] lg:-translate-y-5">
            <div data-aos="fade-left" className="flex flex-col gap-6">
              <div className="flex flex-col gap-3 w-fit">
                <h4 className="text-3xl font-bold">2k+</h4>
                <p className="text-sm">
                  Projects completed <br />
                  <span className="text-primary1">successfully</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 w-fit">
                <h4 className="text-3xl font-bold">500+</h4>
                <p className="text-sm">
                  Businesses Launched <br />
                  <span className="text-primary1">successfully</span>
                </p>
              </div>
            </div>
            <img
              data-aos="fade-down"
              src={arrowIcon}
              alt="arrow"
              className="h-[6rem] object-contain mt-10 ml-5"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <StartYourBusiness
          styles={"text-tertiary text-stroke"}
          slides={[
            "Expert IT development Solutions",
            "Innovative AI Driven Development Solutions",
          ]}
        />
      </div>
      <section className="relative pt-[2rem] lg:pt-[7rem]">
        <div className="blurred-red-circle left-[-10rem] top-[-5rem] hidden md:block"></div>
        <div className="blurred-red-circle right-[-10rem] top-[35%] block"></div>
        <div className="flex flex-col">
          <div className="my-[5rem] wrapper grid grid-cols lg:grid-cols-3 gap-5 lg:gap-10 mx-auto">
            <div
              data-aos="fade-right"
              className="lg:min-h-[20rem] flex flex-col gap-10 justify-between"
            >
              <img
                src={imgArrow}
                className="w-[20rem] aspect-square object-contain"
                alt=""
              />
              <div className="px-[1rem] pt-[1rem] border-t border-white/20 hidden lg:grid grid-cols-[auto_3rem] items-end">
                <div className="flex flex-col">
                  <h6 className="text-2xl font-bold">100%</h6>
                  <p className="uppercase text-sm font-light">
                    Clients satisfaction
                  </p>
                </div>
                <img
                  src={arrowToBR}
                  className="h-[2rem] object-contain"
                  alt="arrow"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="lg:min-h-[20rem] flex flex-col gap-10 justify-between z-10"
            >
              <div className="flex flex-col gap-4">
                <h4 className="text-3xl text-primary1 font-medium">
                  AI & IT Development Solutions
                </h4>
                <p className="text-sm font-light">
                  We deliver cutting-edge AI solutions, harnessing advanced
                  technologies to meet diverse needs. Our services optimize
                  processes, enhance productivity, and pave the way for
                  innovation, ensuring clients stay ahead in today’s competitive
                  landscape
                </p>
                <Link
                  to="https://dev.boostmysites.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-md flex items-center gap-2 text-primary1 underline w-fit"
                >
                  Know More <MdArrowOutward className="text-lg -mt-1" />
                </Link>
              </div>
              <div className="px-[1rem] pt-[1rem] border-t border-white/20 lg:hidden grid grid-cols-[auto_3rem] items-end">
                <div className="flex flex-col">
                  <h6 className="text-2xl font-bold">100%</h6>
                  <p className="uppercase text-sm font-light">
                    Clients satisfaction
                  </p>
                </div>
                <img
                  src={arrowToBR}
                  className="h-[2rem] object-contain"
                  alt="arrow"
                />
              </div>
              <div className="px-[1rem] pt-[1rem] border-t border-white/20 grid grid-cols-[auto_3rem] items-end">
                <div className="flex flex-col">
                  <h6 className="text-2xl font-bold">2000+</h6>
                  <p className="uppercase text-sm font-light">
                    Projects Completed
                  </p>
                </div>
                <img
                  src={arrowToBR}
                  className="h-[2rem] object-contain"
                  alt="arrow"
                />
              </div>
            </div>
            <img
              data-aos="fade-left"
              src={grid1Img}
              alt="grid"
              className="hidden lg:block h-full object-cover z-10"
            />
          </div>
          <StartYourBusiness
            styles={"text-[#D9D9D9]"}
            slides={[
              "START YOUR BUSINESS WITH IAAS",
              "START YOUR BUSINESS WITH IAAS",
            ]}
          />
          <div className="my-[1rem] md:my-[5rem] wrapper flex flex-col-reverse lg:grid grid-cols-3 lg:items-center gap-5 lg:gap-10 mx-auto z-10">
            <div
              data-aos="fade-right"
              className="lg:min-h-[20rem] h-full flex flex-col gap-10 justify-between z-10"
            >
              <img
                src={grid2Img}
                className="hidden lg:block h-full object-center object-cover"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              className="lg:min-h-[20rem] flex flex-col gap-10 justify-between z-10"
            >
              <div className="flex flex-col gap-4">
                <h4 className="text-3xl text-primary1 font-medium">
                  Start Your Own AI Company - AI EXPERT SUBSCRIPTION
                </h4>
                <p className="text-sm font-light">
                  No need for any coding skills or a huge investment. With
                  Boostmysites Infrasturcture as a service (IAAS) subscription
                  model, you'll have access to a marketing professional, client
                  manager for day to day operation, expert support and
                  professional developers who will be yours to use for project
                  acquisition, development and delivery. They'll help you
                  provide 23 different AI and IT services to clients worldwide.
                  We will handle the everything while you focus on growing your
                  business
                </p>
                <Link
                  to="/ai-expert"
                  target="_blank"
                  rel="noreferrer"
                  className="text-md flex items-center gap-2 text-primary1 underline w-fit"
                >
                  Know More <MdArrowOutward className="text-lg -mt-1" />
                </Link>
              </div>
            </div>
            <img
              data-aos="fade-left"
              src={imgArrow2}
              alt="arrow"
              className="w-[20rem] aspect-square h-full object-contain z-10"
            />
          </div>
        </div>
        <div className="bg-[#121212] py-[2rem] lg:py-[7rem]">
          <div className="wrapper">
            <div className="grid grid-cols lg:grid-cols-3 items-center gap-5 lg:gap-10 mx-auto">
              <img
                data-aos="fade-right"
                src={imgArrow3}
                alt="arrow"
                className="block h-full object-contain"
              />
              <div
                data-aos="fade-up"
                className="lg:min-h-[20rem] flex flex-col gap-10 justify-between"
              >
                <div className="flex flex-col gap-4">
                  <h4 className="text-3xl text-primary1 font-medium">
                    Start Your E-Commerce Business - E-COM SUBSCRIPTION
                  </h4>
                  <p className="text-sm font-light">
                    With Boostmysites infrastructure as a service (IAAS)
                    subscription model, allows you to focus solely on selecting
                    your products and to do sales for it. We focus on inventory
                    based e-commerce rather than drop shipping. We will handle
                    all backend operations like product sourcing, shipping,
                    custom clearance, customer logistics. You’ll also have
                    access to marketing, branding, website development
                    professional and even a client manager for day to day
                    operations. We do the heavy lifting, allowing you to
                    concentrate on running and growing your e-commerce business
                  </p>
                  <Link
                    to="https://boostmysites.store"
                    target="_blank"
                    rel="noreferrer"
                    className="text-md flex items-center gap-2 text-primary1 underline w-fit"
                  >
                    Know More <MdArrowOutward className="text-lg -mt-1" />
                  </Link>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="lg:min-h-[20rem] h-full flex flex-col gap-10 justify-between"
              >
                <img
                  src={grid3Img}
                  className="h-full hidden lg:block object-center object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[5rem] lg:py-[10rem]">
        <div className="wrapper">
          <div className="flex sm:flex-row flex-col justify-between gap-5 items-center">
            <div data-aos="fade-right" className="flex flex-col gap-1">
              {/* <p className="text-sm text-primary1 uppercase">our team</p> */}
              <h4 className="text-[2.10rem] sm:text-4xl uppercase">
                <span className="font-semibold">
                our team
                </span>
              </h4>
            </div>
            {/* <div data-aos="fade-left" className="flex items-center gap-2">
              <Link className="font-medium uppercase text-[.8rem] cursor-pointer bg-black hover:shadow-white/20 hover:shadow-large hover:bg-white hover:text-black text-white border border-white py-2 px-3 rounded-full transition-all duration-300 flex items-center gap-1">
                join us <MdArrowOutward className="text-lg -mt-1" />
              </Link>
            </div> */}
          </div>
          <div
            data-aos="fade-up"
            className="py-[2rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <div className="h-[30rem] w-full relative">
              <img
                src={teamImg1}
                className="h-[30rem] w-full object-cover mx-auto rounded-lg"
                alt="team"
              />
              <div className="absolute bottom-0 left-0 w-full h-fit bg-black/60 p-4">
                <h6 className="text-xl font-semibold w-fit">Mahin BS</h6>
                <p className="text-sm text-primary1 w-fit">
                  Founder & Chairman
                </p>
              </div>
            </div>
            <div className="h-[30rem] w-full relative">
              <img
                src={teamImg2}
                className="h-[30rem] w-full object-cover mx-auto rounded-lg"
                alt="team"
              />
              <div className="absolute bottom-0 left-0 w-full h-fit bg-black/60 p-4">
                <h6 className="text-xl font-semibold w-fit">Reshab</h6>
                <p className="text-sm text-primary1 w-fit">CEO</p>
              </div>
            </div>
            <div className="h-[30rem] w-full relative">
              <img
                src={teamImg5}
                className="h-[30rem] w-full object-cover mx-auto rounded-lg"
                alt="team"
              />
              <div className="absolute bottom-0 left-0 w-full h-fit bg-black/60 p-4">
                <h6 className="text-xl font-semibold w-fit">Supreeth Girish</h6>
                <p className="text-sm text-primary1 w-fit">CTO</p>
              </div>
            </div>
            <div className="h-[30rem] w-full relative">
              <img
                src={teamImg6}
                className="h-[30rem] w-full object-cover mx-auto rounded-lg"
                alt="team"
              />
              <div className="absolute bottom-0 left-0 w-full h-fit bg-black/60 p-4">
                <h6 className="text-xl font-semibold w-fit">
                  Darshan R Krishnan
                </h6>
                <p className="text-sm text-primary1 w-fit">COO</p>
              </div>
            </div>
            <div className="h-[30rem] w-full relative">
              <img
                src={teamImg4}
                className="h-[30rem] w-full object-cover mx-auto rounded-lg"
                alt="team"
              />
              <div className="absolute bottom-0 left-0 w-full h-fit bg-black/60 p-4">
                <h6 className="text-xl font-semibold w-fit">Merlin Joy</h6>
                <p className="text-sm text-primary1 w-fit">Associate Partner</p>
              </div>
            </div>
            <div className="h-[30rem] w-full relative">
              <img
                src={teamImg3}
                className="h-[30rem] w-full object-cover mx-auto rounded-lg"
                alt="team"
              />
              <div className="absolute bottom-0 left-0 w-full h-fit bg-black/60 p-4">
                <h6 className="text-xl font-semibold w-fit">Kavya R</h6>
                <p className="text-sm text-primary1 w-fit">Associate Partner</p>
              </div>
            </div>
            <div className="h-[30rem] w-full relative">
              <img
                src={teamImg7}
                className="h-[30rem] w-full object-cover mx-auto rounded-lg"
                alt="team"
              />
              <div className="absolute bottom-0 left-0 w-full h-fit bg-black/60 p-4">
                <h6 className="text-xl font-semibold w-fit">Vidhya Naidu</h6>
                <p className="text-sm text-primary1 w-fit">Associate Partner</p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="bg-[#FFFFFF03] backdrop-blur-[500rem] grid gap-[1rem] sm:gap-0 pt-[1rem] sm:pt-0 sm:grid-cols-[35%_65%] md:grid-cols-[40%_60%] lg:grid-cols-[30%_70%] mt-[3rem]"
          >
            <div className="w-full flex justify-center items-center">
              <div
                onClick={() => setIsPlaying(!isPlaying)}
                className="h-[60vh] md:h-[70] relative w-full"
              >
                {isVideoLoading && (
                  <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[70] flex justify-center items-center">
                    <img src={teamVidThumb} className="rounded-lg" alt="" />
                  </div>
                )}
                <div className="w-[90%] mx-auto sm:w-full h-[60vh] md:h-[70] relative">
                  {!isPlaying && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    >
                      <BiPlay className="text-[3rem] text-black" />
                    </button>
                  )}
                  <ReactPlayer
                    className="h-full w-full z-0 absolute video-cover"
                    url={teamVid}
                    playing={isPlaying}
                    width="100%"
                    height="100%"
                    pip={false}
                    playsinline={true}
                    onReady={() => setIsVideoLoading(false)}
                    config={{
                      file: {
                        attributes: {
                          preload: "auto",
                          controlsList: "nodownload noplaybackrate",
                          disablePictureInPicture: true,
                          playsinline: true,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="h-full relative z-10">
              <div className="sm-blurred-red-circle absolute top-[-1rem] left-[3rem] -z-10 opacity-50"></div>
              <div className="px-5 md:px-[3rem] flex flex-col justify-between h-full gap-5 items-start">
                <div className="flex flex-col gap-8">
                  <img src={quotesIcon} className="w-[7rem]" alt="" />
                  <p className="text-lg font-extralight lg:max-w-[80%]">
                    I have been hiring people in this space for a number of
                    years and I have never seen this level of professionalism.
                    It really feels like you are working with a team that can
                    get the job done.
                  </p>
                </div>
                <div className="py-[2rem] border-t border-white/20 w-full flex items-center justify-between gap-5">
                  <div className="flex items-center gap-5">
                    <img
                      src={teamImg2}
                      alt=""
                      className="rounded-full w-[5rem] object-cover aspect-square"
                    />
                    <div className="flex flex-col gap-1">
                      <h6 className="text-xl font-semibold">Reshab</h6>
                      <p className="text-sm text-primary1">CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadForm />
      <section className="py-[5rem]">
        <FeaturedIn />
      </section>
      <section
        data-aos="fade-up"
        className="wrapper flex flex-col items-center pb-[5rem]"
      >
        <h6 className="text-center text-sm px-5 py-2 border border-white/30 rounded-full w-fit mb-14">
          More than 500+ companies trusted us worldwide
        </h6>
        <OurOffices />
      </section>
    </div>
  );
};

export default Home;
