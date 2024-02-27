import React from "react";
import bgSidebar from "./../../images/bg-sidebar-desktop.svg";

export default function Sidebar(props) {
  return (
    <div className="relative h-full w-full">
      <img src={bgSidebar} alt="" className="object-cover w-full h-full" />
      <section className="absolute z-10 top-5 left-8">
        <div className="flex items-center gap-4 my-7">
          <p
            className="size-10 rounded-full flex justify-center items-center text-white border-2"
            style={{
              backgroundColor: props.pages === 0 ? "#55bcb2" : "transparent",
            }}
          >
            1
          </p>{" "}
          <p className="flex flex-col text-[10px] text-white ">
            STEP 1<span className="text-[16px] font-semibold ">YOUR INFO</span>
          </p>
        </div>
        <div className="flex items-center gap-4 my-7">
          <p
            className="size-10 rounded-full flex justify-center items-center text-white border-2  "
            style={{
              backgroundColor: props.pages === 1 ? "#55bcb2" : "transparent",
            }}
          >
            2
          </p>
          <p className="flex flex-col text-[10px] text-white ">
            STEP 2
            <span className="text-[16px] font-semibold ">SELECT PLAN</span>
          </p>
        </div>
        <div className="flex items-center gap-4 my-7">
          <p
            className="size-10 rounded-full flex justify-center items-center text-white border-2  "
            style={{
              backgroundColor: props.pages === 2 ? "#55bcb2" : "transparent",
            }}
          >
            3
          </p>
          <p className="flex flex-col text-[10px] text-white ">
            STEP 3<span className="text-[16px] font-semibold ">ADD-ONS</span>
          </p>
        </div>
        <div className="flex items-center gap-4 my-7">
          <p
            className="size-10 rounded-full flex justify-center items-center text-white border-2  "
            style={{
              backgroundColor: props.pages === 3 ? "#55bcb2" : "transparent",
            }}
          >
            4
          </p>
          <p className="flex flex-col text-[10px] text-white ">
            STEP 4<span className="text-[16px] font-semibold ">SUMMARY</span>
          </p>
        </div>
      </section>
    </div>
  );
}
