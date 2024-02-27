import { useState } from "react";
import "./App.css";
import Sidebar from "./assets/components/Sidebar/Sidebar";
import Personal from "./assets/components/Personal/Personal";
import Plan from "./assets/components/Plan/Plan";
import Add_ons from "./assets/components/Add_ons/Add-ons";
import Sumarry from "./assets/components/Sumarry/Sumarry";
import Thankyou from "./assets/images/icon-thank-you.svg";

function App() {
  //Sidebar
  const [pages, setPages] = useState(0);

  //Personal
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //Plan
  const [pack, setPack] = useState("");
  const [check, setCheck] = useState(false); //Stock boolean pour vérifier anuel et mensuel dans add-ons
  //Add ons
  const [checkAdd, setCheckAdd] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [option, setOption] = useState([])

  const toggleCheckbox = (id, element) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));
  
    setOption((prevOption) => {
      if (prevOption.some((item) => item.id === id)) {
        return prevOption.filter((item) => item.id !== id);
      } else {
        return [...prevOption, element];
      }
    });
  };
  
  


  //Sidebar
  const nextPages = () => {
    if (!pack && pages === 1) {
      return;
    }
    setPages((pages) => (pages >= 4 ? 4 : pages + 1));
  };

  const previousPages = () => setPages((pages) => pages - 1);

  const infoPersoComplet =
    name.length <= 0 || phone.length <= 0 || email.length <= 0;

  const renderPage = () => {
    switch (pages) {
      case 0:
        return (
          <Personal
            setName={setName}
            name={name}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            pages={pages}
          />
        );
      case 1:
        return (
          <Plan
            setPack={setPack}
            pages={pages}
            check={check}
            setCheck={setCheck}
          />
        );
      case 2:
        return (
          <Add_ons
            pages={pages}
            checkAdd={checkAdd}
            setCheckAdd={setCheckAdd}
            check={check}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            toggleCheckbox={toggleCheckbox}
          />
        );
      case 3:
        return <Sumarry pages={pages} setPages={setPages} option={option} check={check} pack={pack} />;
      default:
        return (
          <div className="h-full flex flex-col justify-center items-center">
            <img src={Thankyou} alt="" />
            <h1 className="text-[40px] text-[#032952ff] font-bold">
              Thank you!
            </h1>
            <p className="text-center text-[#CDCDCDff]">
              Thanks for confirming your subscription! We hope you have
              <br />
              fun using our platform. If you ever need support, please
              <br />
              feel free to email us at support@loremgaming.com
            </p>
          </div>
        );
    }
  };


  return (
    <div className="bg-white h-fit p-2 rounded-2xl flex gap-4 relative">
      <div className="h-[500px] w-[260px] rounded-xl overflow-hidden">
        <Sidebar pages={pages} />
      </div>
      <div className="w-[590px] h-[500px] flex justify-center bg-white">
        {renderPage()}
      </div>
      {pages > 0 && (
        <button
          onClick={previousPages}
          className="absolute bottom-5 border-2 border-gray-500 rounded-xl right-[50%] px-6 p-3 text-[#032952ff] font-semibold"
        >
          Go back
        </button>
      )}
      {infoPersoComplet || (!pack && pages === 1) ? (
        <button
          className="bg-[#002551ff] text-white absolute right-16 bottom-5 px-6 py-3 rounded-xl cursor-not-allowed"
          disabled
        >
          Next Step
        </button>
      ) : (
        <button
          onClick={nextPages}
          className="bg-[#002551ff] text-white absolute right-16 bottom-5 px-6 py-3 rounded-xl"
        >
          {pages < 3 ? " Next Step" : "Confirm"}
        </button>
      )}
    </div>
  );
}

export default App;
