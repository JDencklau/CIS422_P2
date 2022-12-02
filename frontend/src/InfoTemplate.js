import './App.css';
import Welcome from './Welcome';
import Tabs from "./FormsAndTabs/Tabs";
import GraphicOption from "./FormsAndTabs/GraphicOption";
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

const InfoTemplate = () => {
  const [activeTab, setActiveTab] = useState("tab1")
  {/*} Pull and Insert Members, or handle in another file {*/}
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Frank', lastName: 'Murphy'},
    { id: 2, firstName: 'Vic', lastName: 'Reynolds'},
    { id: 3, firstName: 'Gina', lastName: 'Jabowski'},
    { id: 4, firstName: 'Jessi', lastName: 'Glaser'},
    { id: 5, firstName: 'Jay', lastName: 'Bilzerian'}
]);

  return (
    <div>
      <Welcome />
      <br />
      <Link to="/">Back to homepage</Link>
      <div className="Tabs">
      <br />
      {/*} Pull and Insert Event Info Title {*/}
      <> Pull and Insert Event Graphic (in place)</>
      <br /> <> or </>
      <GraphicOption />
      <br /> 
      <> Members     </> 
      <button onClick={() =>  navigator.clipboard.writeText(window.location.href)}>
        Invite </button>
      <fieldset>
        {users && users.map(user =>
          <li key={user.id}>
            <>{user.firstName} {user.lastName}</>
          </li>
        )}
      </fieldset>
    </div>
    </div>
  );
}


export default InfoTemplate;
