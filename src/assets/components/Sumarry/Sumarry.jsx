import React from "react";

export default function Sumarry(props) {
  return (
    <section className="w-[80%] ">
      <h1 className="text-[#032952ff] text-[35px] font-bold mt-5 ">
        Finishing up
      </h1>
      <h6 className="text-[#CDCDCDff] text-[14px] mb-8 ">
        Double-check everything looks OK before confirming.
      </h6>

      <div className="w-full h-fit bg-[#e5f0f3] px-5 py-1 flex flex-col">
        <div className="flex w-full h-fit items-center justify-between">
          <div className=" ">
            <h1 className="text-[#032952ff] text-[15px] font-bold mt-5">
              {props.pack.nom}
            </h1>
            <button
              onClick={() => {
                props.setPages(1);
              }}
              className="text-[#b7b4b4] text-[14px] underline "
            >
              Change
            </button>
          </div>
          <p className=" ">{props.check? `${props.pack.mensuel}` : `${props.pack.anuel}`}</p>
        </div>
        <hr className="border-[#b7b4b4] my-4" />
        {props.option.map((element, id) => {
          return (
            <div className="">
              <p key={id}
              className="flex justify-between">
                {element.nom}
                <span>
                  {props.check
                    ? `+$${element.mensuel}/mo`
                    : `+$${element.anuel}/yr`}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <p>
        Total per year <span>$120/yr</span>
      </p>
    </section>
  );
}
