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

  //Personal (State pour stocker les données du formulaire)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  //Plan
  const [pack, setPack] = useState(""); //Stock l'element dans le useState
  const [check, setCheck] = useState(false); //Stock boolean pour vérifier anuel et mensuel dans add-ons et summary
  //Add ons
  const [checkAdd, setCheckAdd] = useState(false);
  const [checkedItems, setCheckedItems] = useState({}); //Stock le true ou false des options choisit
  const [option, setOption] = useState([]); //Stock les options choisit

  //Function pour pour pouvoir cliquer independament, garce a l'id
  const toggleCheckbox = (id, element) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [id]: !prevCheckedItems[id],
    }));

    // Function qui permet de check les elements choisit et les enleve s'il sont décocher
    setOption((prevOption) => {
      if (prevOption.some((item) => item.id === id)) {
        return prevOption.filter((item) => item.id !== id);
      } else {
        return [...prevOption, element];
      }
    });
  };

  //Sidebar

  // Function qui permet de changer les pages avec des limites
  const nextPages = () => {
    if (!pack && pages === 1) {
      return;
    }
    setPages((pages) => (pages >= 4 ? 4 : pages + 1));
  };

  const previousPages = () => setPages((pages) => pages - 1);

  // Sert a voir si le formulaire est complet avant de passer a la page suivante
  const infoPersoComplet =
    name.length <= 0 || phone.length <= 0 || email.length <= 0;

  //Switch pour que selon le numéro de la page, le contenue change

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
        return (
          <Sumarry
            pages={pages}
            setPages={setPages}
            option={option}
            check={check}
            pack={pack}
          />
        );
      default:
        // Si la page depasse la limite, il affiche 'default'
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
        {/* on appelle la fonction pour le rendu de la page  */}
        {renderPage()}
      </div>
      {/* Apres la première page jusqu'à l'avant dernière on appelle le button 'go back'  */}
      {pages > 0 && pages < 4 && (
        <button
          onClick={previousPages}
          className="absolute bottom-5 border-2 border-gray-500 rounded-xl right-[50%] px-6 p-3 text-[#032952ff] font-semibold"
        >
          Go back
        </button>
      )}
      {/* si le formulaire n'est pas rempli ou dans la page 1, l'utilisateur n'a pas choisit de card, le button devient disable  */}
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
          // Apres la page 4, le button disparait
          style={{ display: `${pages == 4 ? "none" : "block"}` }}
        >
          {/* Apres la page 3 le contenue du button change  */}
          {pages < 3 ? " Next Step" : "Confirm"}
        </button>
      )}
    </div>
  );
}

export default App;
