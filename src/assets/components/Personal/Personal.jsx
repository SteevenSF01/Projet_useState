import React from "react";

export default function Personal(props) {


  const changeValue = (set, event) => {
    //Function pour changer la valeur de l'input
    set(event.target.value.trim());
  };

  return (
    <div className="w-[80%] ">
      <h1 className="text-[#032952ff] text-[35px] font-bold mt-5 ">
        Personal info
      </h1>
      <h6 className="text-[#CDCDCDff] text-[14px] mb-8 ">
        Please provide your name, email address, and phone number.
      </h6>
      <form action="">
        <div>
          <p className="py-1 text-[#032952ff] font-semibold ">Your name is : {props.name} </p>
          <input
            type="text"
            onChange={(e) => changeValue(props.setName, e)}
            placeholder="Vingt-Six"
            className="border-2 w-full px-3 py-3 rounded-xl mb-2 hover  focus:outline-purple-600 focus:outline-2 "
          />
        </div>
        <div>
          <p className="py-1 text-[#032952ff] font-semibold">Your email is : {props.email} </p>
          <input
            onChange={(e) => changeValue(props.setEmail, e)}
            type="email"
            placeholder="Vingt_Six@email.com"
            className="border-2 w-full px-3 py-3 rounded-xl mb-2 focus:outline-purple-600 focus:outline-2 "
          />
        </div>
        <div>
          <p className="py-1 text-[#032952ff] font-semibold">Your phone number is : {props.phone} </p>
          <input
            onChange={(e) => changeValue(props.setPhone, e)}
            type="text"
            placeholder="e.g.+1 234 567 890"
            className="border-2 w-full px-3 py-3 rounded-xl mb-2 focus:outline-purple-600 focus:outline-2"
          />
        </div>
      </form>
    </div>
  );
}
