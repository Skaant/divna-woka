import { PLANTS } from "../data/plants/plants.enum";
import { Plant } from "./Plant";

export type Flora = {
  [species in PLANTS]?: {
    count?: number | Range;
    individuals?: Plant[];
  };
};
