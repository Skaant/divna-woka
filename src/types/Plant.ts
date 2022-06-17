import { Point } from "./Point";
import { SPECIES } from "../data/species/species.enum";
import { Count } from "./Count";

export type Plant = Point & {
  species: SPECIES;
  age?: Count;
  /** Date, month, year of apparition */
  apparition?: string;
  status?: "performing" | "challenged";
};
