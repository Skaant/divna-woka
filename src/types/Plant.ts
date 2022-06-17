import { Point } from "./Point";
import { SPECIES } from "../data/species/species.enum";

export type Plant = Point & {
  species: SPECIES;
};
