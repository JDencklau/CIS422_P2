import './App.css';
import Welcome from './Welcome';
import Tabs from "./FormsAndTabs/Tabs";
import InfoTemplate from "./InfoTemplate";
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

{/*} The following 'PersonPage' is a broken example of pulling data from another site. 
Using our own pull methods, we should be able to mimic it's functionality in dynamic url creation (further below) {*/}

const PersonPage = ({ match }) => {
  const {
    params: { personId },
  } = match;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${personId}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log(`https://swapi.dev/api/people/${personId}`);
      })
      .catch((error) => console.log(error));
  }, [personId]);

  return (
    <>
    <Link to="/">Back to homepage</Link>
      {!isLoading && (
        <>
          <h1>Name: {data.name}</h1>
          <h2>Birth Year: {data.birth_year}</h2>
          <h2>Gender: {data.gender}</h2>
        </>
      )}
    </>
  );
};


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  {/*} We may be able to swap this fetch behavior with our own.  
  It seems to populate the list at the bottom of the page - which we obv. do not need {*/}
  useEffect(() => {
    fetch("https://swapi.dev/api/people/", {})
      .then((res) => res.json())
      .then((response) => {
        setData(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <Welcome />
      <br />
      {/*} The following link can be made/place anywhere provided the methods are imported, 
      to include being attached to the 'onSubmit' of the forms. I didn't place it there yet,
      as we probably want to do some more FE-BE hookup prior to generating the unique page - 
      rather than redirect to the template {*/}
      <Link to="/InfoTemplate"> To The Template! </Link>
      <Tabs />
      <br />
      <> The following links are broken/notional as they attempt to make calls which are nonfunctional. </>
      <br />
      <> They exist to demonstrate that we can create unique urls after pulling data from a source. </>
      <br /> 
      <> Please, remove these links following development / prior to submission. </>
      {!isLoading &&
        data.map((person, index) => {
          return (
            <h5 key={index}>
              {/*} Note how we are setting the variable here, and calling it in the 'App' section {*/}
              <Link to={`/person/${index + 1}`}>{person.name}'s Page</Link>
            </h5>
          );
        })}
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/InfoTemplate" element={<InfoTemplate />} />

          <Route exact path="/person/:personId" element={<PersonPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
