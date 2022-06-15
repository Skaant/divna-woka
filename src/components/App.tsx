import { useState } from "react";
import Carto from "./Carto/Carto";
import { Selection } from "../types/Selection";
import UI from "./UI/UI";

function App() {
  const [selection, setSelection] = useState<Selection>(undefined);
  return (
    <div>
      <>
        <Carto selection={selection} setSelection={setSelection} />
        <UI selection={selection} />
      </>
    </div>
  );
}

export default App;
