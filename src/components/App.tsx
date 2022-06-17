import { useState } from "react";
import Carto from "./Carto/Carto";
import { Selection } from "../types/Selection";
import UI from "./UI/UI";

function App() {
  const [hover, setHover] = useState<Selection>(undefined);
  const [selection, setSelection] = useState<Selection>(undefined);
  return (
    <div>
      <>
        <Carto
          hover={hover}
          setHover={setHover}
          selection={selection}
          setSelection={setSelection}
        />
        <UI hover={hover} selection={selection} setSelection={setSelection} />
      </>
    </div>
  );
}

export default App;
