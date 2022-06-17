import { PLANTS } from "../data/plants/plants.enum";
import { Count } from "./Count";
import { Plant } from "./Plant";

export type Flora = {
  [species in PLANTS]?: {
    count?: Count;
    individuals?: Plant[];
  };
};
