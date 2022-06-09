import { Coords } from "../../types/Coords";
import { STATIONS } from "../stations.data";

export const STATIONS_SHAPES_DATA: { [station in STATIONS]: Coords[] } = {
  TERRASSE_VERTU_DU_NORD: [
    [44.518626, 5.675948],
    [44.518695, 5.676074],
    [44.518606, 5.676122],
    [44.518552, 5.676041],
  ],
  PLAT_MANUTENTION: [
    [44.518653, 5.676458],
    [44.518631, 5.676397],
    [44.518581, 5.676397],
    [44.518575, 5.676474],
  ],
  CASCADES_FLEURS_D_OR: [
    [44.518504, 5.676153],
    [44.518523, 5.676188],
    [44.518482, 5.676201],
    [44.518458, 5.676216],
    [44.518437, 5.676145],
    [44.518387, 5.676187],
    [44.518386, 5.676155],
    [44.51843, 5.67612],
    [44.518414, 5.676053],
    [44.518322, 5.676069],
    [44.51832, 5.676032],
    [44.51835, 5.675999],
    [44.518416, 5.675901],
    [44.518445, 5.67582],
    [44.518496, 5.676009],
    [44.518459, 5.676107],
  ],
};
