import React from "react";
import "../index.css";
import img from "../assets/img.png";
import share from "../assets/share.png";
import slack from "../assets/slack.png";
import share1 from "../assets/share1.png";
import github from "../assets/github.png";
import Footer from "../components/footer";


const Home = () => {
  return (
    <div>
      <div className="px-4 lg:px-36">
        <div className="relative mt-16">
          <div className="flex justify-end">
            <img
              src={share1}
              className="hidden -top-5 absolute md:block mr-52"
              alt="share"
            />
            <img
              src={share}
              className="-top-5 absolute md:hidden"
              alt="share"
            />
          </div>
          <div className="flex justify-center ">
            <img src={img} alt="profile image" width="88px" id="profile__img" />
          </div>
        </div>
        <p className="text-center my-6 lg:mb-8 font-bold text-lg" id="twitter">
          thegeorgeanya
        </p>
        <p className="hidden" id="slack">
          georgeanya4real
        </p>
        <div className="flex flex-col">
          <a
            className="text-center py-6 border border-[#EAECF0] my-3 no-underline bg-[#EAECF0] rounded-lg text-sm font-medium  "
            href="https://twitter.com/thegeorgeanya"
            id="twitter_link"
          >
            Twitter Link
          </a>
          <a
            className="text-center py-6 border border-[#EAECF0] my-3 no-underline bg-[#EAECF0] rounded-lg text-sm font-medium"
            id="btn__zuri"
            href="https://training.zuri.team/"
          >
            Zuri Team
          </a>
          <a
            className="text-center py-6 border border-[#EAECF0] my-3 no-underline bg-[#EAECF0] rounded-lg text-sm font-medium  "
            href="https://books.zuri.team/"
            id="books"
          >
            Zuri Books
          </a>
          <a
            className="text-center py-6 border border-[#EAECF0] my-3 no-underline bg-[#EAECF0] rounded-lg text-sm font-medium  "
            href="https://books.zuri.team/"
            id="book__python"
          >
            Python Books
          </a>
          <a
            className="text-center py-6 border border-[#EAECF0] my-3 no-underline bg-[#EAECF0] rounded-lg text-sm font-medium  "
            href="https://background.zuri.team"
            id="pitch"
          >
            Background Check for Coders
          </a>
          <a
            className="text-center py-6 border border-[#EAECF0] my-3 no-underline bg-[#EAECF0] rounded-lg text-sm font-medium  "
            href="https://books.zuri.team/design-rules"
            id="book__design"
          >
            Design Books
          </a>
          <a
            className="text-center py-6 border border-[#EAECF0] my-3 no-underline bg-[#EAECF0] rounded-lg text-sm font-medium  "
            href="/contact"
            id="book__design"
          >
            Contact Me
          </a>
        </div>
        <div className="flex justify-center my-4">
          <img src={slack} alt="" className="mx-2" />
          <img src={github} alt="" className="mx-2" />
        </div>
      </div>
      <div className="px-4 lg:px-28">
        <hr className="mt-16" />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
