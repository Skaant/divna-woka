import { PlantOmitSpecies } from "../types/Flora";
import { addFloraSpecies } from "./addFloraSpecies";

const SPECIES_INDIVIDUAL_1: PlantOmitSpecies = {
  id: "gentiane-tudor",
  name: "Tudor",
  coords: [44.51895, 5.676037],
};

const SPECIES_INDIVIDUAL_2: PlantOmitSpecies = {
  id: "gentiane-balavoine",
  name: "Balavoine",
  coords: [44.51897463860738, 5.675673376293029],
};

describe("addFloraSpecies", () => {
  test("aCount, aIndividuals, bCount, bIndividuals", () => {
    expect(
      addFloraSpecies(
        {
          count: [20, 40],
          individuals: [SPECIES_INDIVIDUAL_1],
        },
        {
          count: 35,
          individuals: [SPECIES_INDIVIDUAL_2],
        }
      )
    ).toEqual({
      count: [55, 75],
      individuals: [SPECIES_INDIVIDUAL_1, SPECIES_INDIVIDUAL_2],
    });
  });
  test("aCount, !aIndividuals, !bCount, bIndividuals", () => {
    expect(
      addFloraSpecies(
        {
          count: 6,
        },
        {
          individuals: [SPECIES_INDIVIDUAL_2],
        }
      )
    ).toEqual({
      count: 6,
      individuals: [SPECIES_INDIVIDUAL_2],
    });
  });
  test("!aCount, aIndividuals, bCount, !bIndividuals", () => {
    expect(
      addFloraSpecies(
        {
          individuals: [SPECIES_INDIVIDUAL_1],
        },
        {
          count: [23, 76],
        }
      )
    ).toEqual({
      count: [23, 76],
      individuals: [SPECIES_INDIVIDUAL_1],
    });
  });
  test("!aCount, !aIndividuals, !bCount, !bIndividuals", () => {
    expect(addFloraSpecies({}, {})).toEqual({});
  });
});

export {};
