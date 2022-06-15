import { Coords } from "./Coords";

export type Point = Coords & {
  id: string;
  name: string;
};
