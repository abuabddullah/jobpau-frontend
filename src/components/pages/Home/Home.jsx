/* import React from "react";
import img2 from "../../../assets/hero-02.jpg";

const Home = () => {
  const keywords = [
    "Web Developer",
    "Web Designer",
    "Writer",
    "Fullstack",
    "Senior",
    "Team Lead",
    "Administration",
    "SQA",
    "Tester",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-orange-50 p-10">
      <div className="container mx-auto grid grid-cols-2 items-center ">
        <div className="sectL">
          <h1 className="text-5xl font-bold">Come and Job পাও 👌</h1>
          <form onSubmit={handleSubmit} className="my-10">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700 mb-1">
                Search for your dream job
              </span>
              <input
                className="py-2 px-3 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-none inputBox"
                placeholder="job tittle or keyword"
              />
              <input
                type="submit"
                className="rounded-r-lg py-2 px-8 border-2 bg-slate-600 hover:bg-white hover:text-black text-white ease-in-out duration-300 cursor-pointer"
                value="Search"
              />
              <div className="my-10">
                <h4 className="mb-2">Popular searches :</h4>
                <ul className="flex flex-wrap w-1/2">
                  {keywords.map((keyword, index) => (
                    <li
                      key={index}
                      className="m-1 cursor-pointer text-gray-400 mr-1 px-2 bg-sky-50"
                    >
                      #{keyword}
                    </li>
                  ))}
                </ul>
              </div>
            </label>
          </form>
        </div>
        <div className="sectR">
          <aside>
            <img src={img2} alt="" className="rounded-full" />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Home;
 */

import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import ParallexMouse from "../../shared/ParallexMouse";
import RactCarousel from "../../shared/RactCarousel";

const Home = () => {
  const keywords = [
    "Web Developer",
    "Web Designer",
    "Writer",
    "Fullstack",
    "Senior",
    "Team Lead",
    "Administration",
    "SQA",
    "Tester",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="h-screen">
      <div className="container mx-auto grid grid-cols-2 items-center my-10">
        <div className="sectL">
          <h1 id="hero-title" className="heroElement font-bold text-6xl">
            Come, Find <br /> And <br /> Job পাও
            <div className="absolute top-[235px] left-[265px] h-[600px] w-[600px] bg-no-repeat bg-cover bg-center z-0 hidden md:block overflow-hidden ms-3">
              <ParallexMouse />
            </div>
          </h1>
          <p id="hero-subtitle" className="mt-5 text-lg">
            Search your career opportunity through 12,800 jobs
          </p>

          <form
            onSubmit={handleSubmit}
            id="search-container"
            className="bg-white rounded-full p-3 flex w-full max-w-xl overflow-hidden mt-5  shadow-lg"
          >
            <input
              className="flex-auto text-lg p-1 border-none outline-none focus:ring-0"
              type="text"
              name="search"
              id="search"
              placeholder="Job title or Keyword"
            />
            <button
              id="search-button"
              className="p-2 rounded-full bg-primary  h-14 w-14 grid place-items-center bg-slate-600"
            >
              <BiSearchAlt size="23" color="white" />
            </button>
          </form>

          <div className="mt-16">
            <h2 className="badge-container">Popular Search</h2>
            <div className="mt-3 max-w-xl flex flex-wrap  gap-3">
              {keywords.map((item) => (
                <div
                  key={item}
                  className={`bg-primary/10 font-light w-fit px-2 py-1 rounded-full text-primary text-sm badge`}
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sectR">
          <RactCarousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
