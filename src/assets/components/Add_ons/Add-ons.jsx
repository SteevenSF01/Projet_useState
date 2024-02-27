import React from "react";

export default function Add_ons(props) {
  const array = [
    {
      id: 1,
      nom: "Online service",
      description: "Access to multiplayer games",
      mensuel: 1,
      anuel: 10
    },
    {
      id: 2,
      nom: "Larger storage",
      description: "Extra 1TB of cloud save",
      mensuel: 2,
      anuel: 20
    },
    {
      id: 3,
      nom: "Customizable Profile",
      description: "Custom theme on your profile",
      mensuel: 2,
      anuel : 20
    },
  ];

  return (
    <div className="w-[80%] ">
      <h1 className="text-[#032952ff] text-[35px] font-bold mt-5 ">
        Pick add-ons
      </h1>
      <h6 className="text-[#CDCDCDff] text-[14px] mb-8 ">
        Add-ons help enhance your gaming experience.
      </h6>

      {array.map((element) => (
        <section
          key={element.id}
          className="flex items-center w-[100%] py-3 px-5 rounded-2xl border-2 border-purple-500 my-5 cursor-pointer"
          style={{ background: props.checkedItems[element.id] ? 'lightgray' : 'white' }}
          onClick={() => props.toggleCheckbox(element.id, element)}
        >
          <input
            type="checkbox"
            checked={props.checkedItems[element.id]}
            className="checkbox border-black checked:border-purple-500 [--chkbg:theme(colors.purple.500)] [--chkfg:white]"
          />
          <div className="ms-4">
            <h1 className="flex flex-col text-[#032952ff] text-[17px] font-bold ">
              {element.nom}
              <span className="text-[#b1aeae] text-[14px] font-normal ">
                {element.description}
              </span>
            </h1>
          </div>
          <p className="ms-auto text-purple-500 font-semibold text-[17px] ">
            {props.check ? `+$${element.mensuel}/mo` : `+$${element.anuel}/yr`}
          </p>
        </section>
      ))}
    </div>
  );
}
