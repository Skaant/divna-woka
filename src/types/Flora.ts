import { SPECIES } from "../data/species/species.enum";
import { Count } from "./Count";
import { Plant } from "./Plant";

export type Flora = {
  [species in SPECIES]?: {
    count?: Count;
    individuals?: Plant[];
  };
};
