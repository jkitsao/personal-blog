import React from "react";
import Link from "next/link";
import Navbar from "../../../currentuser/navbar/Navbar";
function Hero() {
  return (
    <main className="main_hero">
      {/* <Navbar /> */}
      <div className="lg:w-1/2 mx-auto pt-32 text-center px-3">
        <h2 className="text-white font-semibold font-mono text-xl sm:text-2xl xl:text-5xl sm:text-center">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          enim deleniti at deserunt accusamus nam officia dolorum illum
          voluptate ea. */}
          A place to share tips,code,stories,new about web development and
          programming in General
        </h2>
        <div className="lg:w-1/4 mx-auto text-center pt-6">
          <button className="px-6 py-3 rounded bg-blue-600 font-semibold text-white">
            <Link href="/auth/login">
              <a className="text-white">start now</a>
            </Link>
          </button>
        </div>
      </div>
      {/* <span className="mx-2 my-2 text-sm bg-gray-200"> */}
      <span className="absolute bottom-0 opacity-50 left-0 mx-2 my-2 p-2 rounded text-xs sm:text-sm bg-gray-700 text-gray-300 ">
        Photo by{" "}
        <a
          href="https://unsplash.com/@sam_truong?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          className="text-blue-400"
        >
          Sam Dan Truong
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com/s/photos/tip-jar?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
          className="text-blue-400"
        >
          Unsplash
        </a>
      </span>
      {/* </span> */}
    </main>
  );
}

export default Hero;