import { Coords } from "./Coords";
import { Flora } from "./Flora";
import { Shape } from "./unions/Shape";

export type Area = {
  id: string;
  name: string;
  coords: Coords[];
  flora?: Flora;
  contains?: Shape[];
};
