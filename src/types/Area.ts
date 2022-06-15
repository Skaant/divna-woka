import { Coords } from "./Coords";
import { Flora } from "./Flora";

export type Area = {
  id: string;
  name: string;
  coords: Coords[];
  flora?: Flora;
};
