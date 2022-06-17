import { CARTO_DATA } from "../data/carto.data";
import { Coords } from "../types/Coords";

const {
  LONG_MIN,
  LAT_MIN,
  MICRO_COORD_LONG_METERS,
  MICRO_COORD_LAT_METERS,
  PIXELS_BY_METER,
  WIDTH,
  HEIGHT,
  LAT_LONG_METERS_PERCENTS,
} = CARTO_DATA;

export function getLatLongToXY([lat, long]: Coords): [number, number] {
  return [
    (((long - LONG_MIN) * 1000000 * MICRO_COORD_LONG_METERS * PIXELS_BY_METER) /
      WIDTH) *
      100,
    LAT_LONG_METERS_PERCENTS -
      (((lat - LAT_MIN) * 1000000 * MICRO_COORD_LAT_METERS * PIXELS_BY_METER) /
        HEIGHT) *
        LAT_LONG_METERS_PERCENTS,
  ];
}
