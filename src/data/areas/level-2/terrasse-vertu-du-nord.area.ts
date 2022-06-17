import { Area } from "../../../types/Area";
import { SPECIES } from "../../species/species.enum";
import { AREAS } from "../areas.enum";

export const TERRASSE_VERTU_DU_NORD_AREA: Area = {
  id: AREAS.TERRASSE_VERTU_DU_NORD,
  name: "Terrasse Vertu du Nord",
  coords: [
    [44.518626, 5.675948],
    [44.518695, 5.676074],
    [44.518606, 5.676122],
    [44.518552, 5.676041],
  ],
  flora: {
    LAVANDULA_ANGUSTIFOLIA: {
      count: [20, 40],
    },
    PINUS_SYLVESTRIS: {
      individuals: [
        {
          id: "pinda",
          name: "Pinda",
          coords: [44.519191, 5.676146],
        },
        {
          id: "pingwu",
          name: "Pingwu",
          coords: [44.518611, 5.676131],
        },
      ],
    },
  },
};
