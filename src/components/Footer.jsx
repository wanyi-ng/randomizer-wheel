import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-indigo-700 p-8">
      <div className="container mx-auto w-full flex items-center justify-between">
        <p className="text-white text-center xl:text-left">
          &copy; 2023 Randomizer Wheel. All Rights Reserved.
        </p>
        <NavLink to="https://github.com/wanyi-ng" className="underline">
          Github
        </NavLink>
      </div>
    </footer>
  );
}
