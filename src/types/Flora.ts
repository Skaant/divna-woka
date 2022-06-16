import { PLANTS } from "../data/plants/plants.enum";
import { Plant } from "./Plant";
import { Range } from "./Range";

export type Flora = {
  [species in PLANTS]?: {
    count?: number | Range;
    individuals?: Plant[];
  };
};
