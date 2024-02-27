import React from "react";
import { useEffect } from "react";

export default function Sumarry(props) {
    const sommes = () => {
        let total = 0; 
        if (props.check) {
            total += props.pack.mensuel;
            props.option.forEach(element => {
                total += element.mensuel;
            });
        } else {
            total += props.pack.anuel;
            props.option.forEach(element => {
                total += element.anuel;
            });
        }
        return total;
    };
    
  return (
    <section className="w-[80%] ">
      <h1 className="text-[#032952ff] text-[35px] font-bold mt-5 ">
        Finishing up
      </h1>
      <h6 className="text-[#CDCDCDff] text-[14px] mb-8 ">
        Double-check everything looks OK before confirming.
      </h6>

      <div className="w-full h-fit bg-[#e5f0f3] rounded-2xl px-5 py-1 flex flex-col">
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
          <p className="text-[#032952ff] text-[14px] font-bold ">
            {props.check ? `$${props.pack.mensuel}/mo` : `$${props.pack.anuel}/yr`}
          </p>
        </div>
        <hr className="border-[#b7b4b4] my-4" />
        <div className="pb-5 leading-8">
        {props.option.map((element, id) => {
          return (
              <p key={id} className="flex justify-between text-[#b7b4b4] text-[14px]">
                {element.nom}
                <span className="text-[#032952ff] text-[14px] font-bold">
                  {props.check
                    ? `+$${element.mensuel}/mo`
                    : `+$${element.anuel}/yr`}
                </span>
              </p>
          );
        })}
        </div>
      </div>
      {props.check ? (
        <p className="flex justify-between px-5 mt-4 text-[#b7b4b4] text-[14px]">
          Total (per month) <span className="text-[#032952ff] text-[14px] font-bold">${sommes()}/mo </span>
        </p>
      ) : (
        <p className="flex justify-between px-5 mt-4 text-[#b7b4b4] text-[14px]">
          Total (per year) <span className="text-[#032952ff] text-[14px] font-bold">${sommes()}/yr</span>
        </p>
      )}
    </section>
  );
}
