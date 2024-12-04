import ForBuyers from "./ForBuyers";
import ForSellers from "./ForSellers";

function TabbedComponent({activeTab,active}) {
  
  
  return (
    <div className="mt-10 ">
      {activeTab==="buyers" ? <ForBuyers activeTab={activeTab} active={active}/>: <ForSellers active={active}/> }
      
    </div>
  );
}

export default TabbedComponent;
