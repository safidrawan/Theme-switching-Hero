import React from "react";

const Hero = () => {
  return (
    <div className="isolate">
      <div className="absolute inset-0 w-1/2 h-1/2 rounded-full opacity-20 blur-3xl bg-amber-400 dark:bg-amber-500 top-0 -left-1/4 -z-10"></div>
      <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-32">
        <div className="flex flex-col items-center gap-8 lg:gap-12 xl:gap-16 lg:flex-row">
          <div className="flex-1 space-y-6 lg:space-y-7">
            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-center">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-amber-400 mr-2">
                  NEW
                </span>
                <h2 className="bg-indigo-900 text-amber-400 rounded-full px-3 backdrop-blur-sm border border-neutral-800/50 py-1.5 text-xs font-medium">
                  {" "}
                  <i className="bx bx-trending-up mr-1"></i> Next Generation
                  Design System
                </h2>
              </div>
              <h1 className="text-4xl md-text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50">
                <span className="block">Design</span>
                <span className="bg-clip-text bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-transparent">
                  Without Limits
                </span>
              </h1>
              <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-100 max-w-2xl ">
                Elevate your web projects with our streamlined design system
                powered by the latest Tailwind CSS v4. Create stunning user
                experiences with state-of-the-art theme switching.
              </p>
              <div className="flex gap-3 items-center">
                <div className="h-px w-12 bg-amber-500 dark:bg-neutral-700"></div>
                <p className="text-xs uppercase font-medium tracking-widest text-neutral-500 dark:text-neutral-400">
                  Transition Seamlessly
                </p>
              </div>
            </div>
            <div className="flex gap-3 lg:gap-4">
              <button className="bg-neutral-800 dark:bg-amber-500 hover:bg-amber-500 dark:hover:bg-amber-600 text-neutral-50 dark:text-amber-50 py-2 px-4 rounded-lg shadow-md shadow-neutral-900/20 dark:shadow-amber-500/20 flex items-center gap-2">
                {" "}
                <i className="bx bx-code-alt mr-1"></i> Button
              </button>

              <button className="flex items-center gap-2 ml-2 border border-neutral-400 rounded-lg px-4">
                {" "}
                <i className="bx bx-book-open mr-1"></i> Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
