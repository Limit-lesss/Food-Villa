import { useState } from "react";

const Section = ({ title, desc, isVisible , setIsVisible, sectionName}) => {
  return (
    <div className="border border-slate-800 p-3 m-3">
      <h1 className="text-lg font-medium">{title}</h1>
      {isVisible ? (
        <>
        <button
          className="border p-2 px-4 bg-slate-200"
          onClick={(e) => setIsVisible("")}>
          Hide
        </button>
        <p>{desc}</p></>
      ) : (
        <button
          className="border p-2 px-4 bg-slate-200"
          onClick={(e) => setIsVisible(sectionName)}>
          Show
        </button>
      )}
      
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="pt-28 px-20">
      <h1 className="text-2xl font-bold">InstaMart</h1>
      <Section
        title="About"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero itaque eligendi, perferendis repellendus alias quaerat error dolores! Iusto ea, consequatur molestiae architecto vero a iste, dolores blanditiis aut, aliquid minus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero itaque eligendi, perferendis repellendus alias quaerat error dolores! Iusto ea, consequatur molestiae architecto vero a iste, dolores blanditiis aut, aliquid minus?"
        isVisible={visibleSection === "about"}
        sectionName="about"
        setIsVisible={(e) => setVisibleSection(e)}
      />
      <Section
        title="Team Insta"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero itaque eligendi, perferendis repellendus alias quaerat error dolores! Iusto ea, consequatur molestiae architecto vero a iste, dolores blanditiis aut, aliquid minus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero itaque eligendi, perferendis repellendus alias quaerat error dolores! Iusto ea, consequatur molestiae architecto vero a iste, dolores blanditiis aut, aliquid minus?"
        isVisible={visibleSection === "insta"}
        sectionName={"insta"}
        setIsVisible={(e) => setVisibleSection(e)}
      />
      <Section
        title="Career"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero itaque eligendi, perferendis repellendus alias quaerat error dolores! Iusto ea, consequatur molestiae architecto vero a iste, dolores blanditiis aut, aliquid minus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero itaque eligendi, perferendis repellendus alias quaerat error dolores! Iusto ea, consequatur molestiae architecto vero a iste, dolores blanditiis aut, aliquid minus?"
        isVisible={visibleSection === "career"}
        sectionName={"career"}
        setIsVisible={(e) => setVisibleSection(e)} 
      />
    </div>
  );
};
export default Instamart;
