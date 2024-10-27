import './App.css'
import Grid from "./Grid.jsx";
import {birds, fish} from "./Data.js";
import Button from "./Button.jsx";
import React, {useEffect} from "react";

function App() {

  const [fishVisible, setFishVisible] = React.useState(false);
  const [birdsVisible, setBirdsVisible] = React.useState(false);
  const [menuVisible, setMenuVisible] = React.useState(true);

  useEffect(() => {
    if (fishVisible | birdsVisible) {
      setMenuVisible(false);
    }
  }, [fishVisible, birdsVisible]);

  useEffect(() => {
    if (menuVisible) {
      setFishVisible(false);
      setBirdsVisible(false);
    }
  }, [menuVisible]);

  return (
    <>
      { menuVisible && <div className="menu">
        <Button className="category" text="魚編" imageFilename="maguro.png" backgroundColor="#8da9d9" onClick={() => setFishVisible(true)} />
        <Button className="category" text="鳥編" imageFilename="toki.png" backgroundColor="#e6acba" onClick={() => setBirdsVisible(true)} />
      </div> }
      <div className="contents">
        { !menuVisible && <div className="buttons">
          <Button className="back" text="戻る" backgroundColor="#e8e0c5" onClick={() => setMenuVisible(true)} />
          <Button className="font" text="フォント" backgroundColor="#c5e8de" onClick={() => setMenuVisible(true)} />
        </div> }
        { fishVisible && <Grid items={fish} />}
        { birdsVisible && <Grid items={birds} /> }
        <div></div>
      </div>
    </>
  )
}

export default App
