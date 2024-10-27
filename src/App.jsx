import './App.css'
import Grid from "./Grid.jsx";
import {birds, fish, insects} from "./Data.js";
import Button from "./Button.jsx";
import React, {useEffect} from "react";

function App() {

  const [fishVisible, setFishVisible] = React.useState(false);
  const [birdsVisible, setBirdsVisible] = React.useState(false);
  const [insectsVisible, setInsectsVisible] = React.useState(false);
  const [menuVisible, setMenuVisible] = React.useState(true);

  useEffect(() => {
    if (fishVisible | birdsVisible | insectsVisible) {
      setMenuVisible(false);
    }
  }, [fishVisible, birdsVisible, insectsVisible]);

  useEffect(() => {
    if (menuVisible) {
      setFishVisible(false);
      setBirdsVisible(false);
      setInsectsVisible(false);
    }
  }, [menuVisible]);

  return (
    <div>
      { menuVisible && <div className="menu">
        <Button className="category" text="魚編" imageFilename="maguro.png" backgroundColor="#8da9d9" onClick={() => setFishVisible(true)} />
        <Button className="category" text="鳥編" imageFilename="toki.png" backgroundColor="#e6acba" onClick={() => setBirdsVisible(true)} />
        <Button className="category" text="虫編" imageFilename="semi.png" backgroundColor="#bae096" onClick={() => setInsectsVisible(true)} />
      </div> }
      <div className="contents">
        { !menuVisible && <div className="buttons">
          <Button className="back" text="戻る" backgroundColor="#e8e0c5" onClick={() => setMenuVisible(true)} />
        </div> }
        { fishVisible && <Grid items={fish} />}
        { birdsVisible && <Grid items={birds} /> }
        { insectsVisible && <Grid items={insects} /> }
        <div></div>
      </div>
    </div>
  )
}

export default App
