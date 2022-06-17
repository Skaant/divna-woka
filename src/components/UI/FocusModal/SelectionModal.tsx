import React, { Dispatch, SetStateAction } from "react";
import { addFlora } from "../../../helpers/addFlora";
import { Area } from "../../../types/Area";
import { Flora } from "../../../types/Flora";
import { Selection } from "../../../types/Selection";
import FocusModal from "./FocusModal";

function SelectionModal({
  selection,
  setSelection,
}: {
  selection: Selection;
  setSelection: Dispatch<SetStateAction<Selection>>;
}) {
  return selection ? (
    <FocusModal focus={selection}>
      <>
        {((selection as Area).flora || (selection as Area).contains) && (
          <div>
            <h3 style={{ marginLeft: "8px" }}>Liste des plantes</h3>
            <ul>
              {Object.entries(
                ((selection as Area).contains || []).reduce<Flora>(
                  (floraSum, shape) =>
                    (shape as Area).flora
                      ? addFlora(floraSum, (shape as Area).flora)
                      : floraSum,
                  (selection as Area).flora || {}
                )
              ).map(([plant, { count, individuals }]) => {
                return (
                  <li>
                    <>
                      {plant} :{" "}
                      {typeof count === "object" ? count.join("...") : count}
                      {count && individuals && individuals.length ? " et " : ""}
                      {individuals?.map(({ name }) => name).join(", ")}
                    </>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {(selection as Area).contains && (
          <div>
            <h3>Contient</h3>
            <ul>
              {(selection as Area).contains?.map((shape) => (
                <li style={{ fontWeight: "bold" }}>
                  <button onClick={() => setSelection(shape)}>
                    {shape.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    </FocusModal>
  ) : (
    <></>
  );
}

export default SelectionModal;
