import { SPECIES } from "../data/species/species.enum";
import { Count } from "./Count";
import { Plant } from "./Plant";

export type PlantOmitSpecies = Omit<Plant, "species">;

export type FloraSpecies = {
  count?: Count;
  individuals?: PlantOmitSpecies[];
};

export type Flora = {
  [species in SPECIES]?: FloraSpecies;
};
