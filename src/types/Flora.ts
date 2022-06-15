import { PLANTS } from "../data/plants/plants.enum";

export type Flora = {
  [plant in PLANTS]?: number | "1..10" | "11..100" | "100+";
};
