import React from "react";

import Arcade from "./../../images/icon-arcade.svg";
import Advanced from "./../../images/icon-advanced.svg";
import Pro from "./../../images/icon-pro.svg";

export default function Plan(props) {
  const array = [
    { image: Arcade, nom: "Arcade", anuel: 90, mensuel: 9 },
    { image: Advanced, nom: "Advanced", anuel: 120, mensuel: 12 },
    { image: Pro, nom: "Pro", anuel: 150, mensuel: 15 },
  ];


  const achetez = (element) => {
    // Copie l'element dans pack
    props.setPack(element);
  };

  return (
    <div className="w-[80%]  ">
      <h1 className="text-[#032952ff] text-[35px] font-bold mt-5 ">
        Select your plan
      </h1>
      <h6 className="text-[#CDCDCDff] text-[14px] mb-8 ">
        You have the option of monthly or yearly billing
      </h6>
      <section className="w-[100%] h-[35%] flex justify-between ">
        {/* map pour créer les cartes  */}
        {array.map((element, id) => {
          return (
            <button
              onClick={() => achetez(element)}
              key={id}
              className="w-[31%] h-[92%] flex flex-col justify-between py-5 px-4 rounded-2xl border-2 focus:border-2  focus:border-purple-500  cursor-pointer focus:bg-[#f1efef] "
            >
              <img src={element.image} alt="" className="w-[40%] " />
              <p className="flex flex-col items-start text-[#032952ff] font-bold">
                {element.nom}
                {/* si 'check' est true, il montre le prix en mensuel sinon en anuel  */}
                {props.check ? (
                  <span className="text-[12px] text-gray-400 font-medium ">
                    ${element.mensuel}/mo
                  </span>
                ) : (
                  <span className="text-[12px] text-gray-400 font-medium ">
                    ${element.anuel}/yr
                  </span>
                )}
              </p>
            </button>
          );
        })}
      </section>
      <div className=" flex h-[10%] justify-around items-center bg-[#c9f5f1] ">
        <p
          style={{ color: `${props.check ? "#032952ff" : "gray"}` }}
          className="text-[17px] font-semibold "
        >
          Monthly
        </p>
        <input
        // le onclick change le boolean de valeur
          onClick={() => props.setCheck(!props.check)}
          type="checkbox"
          checked= {!props.check}
          className="toggle [--tglbg:#032952ff] hover:bg-white bg-white border-white"
          defaultChecked
        />
        <p
          style={{ color: `${!props.check ? "#032952ff" : "gray"}` }}
          className="text-[17px] font-semibold "
        >
          Yearly
        </p>
      </div>
    </div>
  );
}
