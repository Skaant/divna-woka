import { Point } from "./Point";
import { PLANTS } from "../data/plants/plants.enum";

export type Plant = Point & {
  species: PLANTS;
};
