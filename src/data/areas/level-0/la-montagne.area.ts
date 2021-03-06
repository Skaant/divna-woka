import { Area } from "../../../types/Area";
import { AREAS } from "../areas.enum";
import { CASCADES_AUX_FLEURS_D_OR_AREA } from "../level-1/cascades-aux-fleurs-d-or.area";
import { TERRASSE_VERTU_DU_NORD_AREA } from "../level-2/terrasse-vertu-du-nord.area";

export const LA_MONTAGNE_AREA: Area = {
  id: AREAS.LA_MONTAGNE,
  name: "La Montagne",
  coords: [
    [44.518913, 5.67509],
    [44.519043, 5.675362],
    [44.519337, 5.675758],
    [44.519337, 5.675758],
    [44.519371, 5.675899],
    [44.519096, 5.676087],
    [44.518849, 5.676174],
    [44.518437, 5.676237],
    [44.518252, 5.676359],
    [44.517891, 5.676262],
    [44.517647, 5.676303],
    [44.517163, 5.676278],
    [44.516715, 5.676318],
    [44.516117, 5.676008],
    [44.515768, 5.675515],
    [44.515459, 5.675299],
    [44.51518, 5.675317],
    [44.514732, 5.67482],
    [44.51465, 5.674646],
    [44.514719, 5.674484],
    [44.515188, 5.674078],
    [44.515236, 5.673993],
    [44.515284, 5.673619],
    [44.516618, 5.675],
    [44.518304, 5.675611],
  ],
  contains: [CASCADES_AUX_FLEURS_D_OR_AREA, TERRASSE_VERTU_DU_NORD_AREA],
};
