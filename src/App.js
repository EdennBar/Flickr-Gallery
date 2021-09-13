
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayImage from "./component/DisplayImage";
import Galleries from './component/Galleries';
import PhotoContext from './component/PhotoContext';
import React, { useContext, useState } from "react";

function App() {

  var [photo, setPhoto] = useState({})
  function onPhotoClicked(_photo) {
    setPhoto(_photo)
  }
  
  return (
    <div>
      <PhotoContext.Provider value={photo}>
        <Router>
          <Route exact path="/">
            <Galleries onClick={onPhotoClicked}></Galleries>
          </Route>

          <Switch>
            <Route path="/image" >

              <DisplayImage></DisplayImage>
            </Route>
          </Switch>
        </Router>
      </PhotoContext.Provider>
    </div>
  );
}

export default App;
