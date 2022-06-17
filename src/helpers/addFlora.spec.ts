import { Flora, PlantOmitSpecies } from "../types/Flora";
import { addFlora } from "./addFlora";

const SPECIES_INDIVIDUAL_1: PlantOmitSpecies = {
  id: "pin-bobby",
  name: "Bobby",
  coords: [44.51891919823567, 5.676096628347375],
};

describe("addFlora", () => {
  test("1 species each, 1 species shared", () => {
    expect(
      addFlora(
        {
          APHYLLANTHES_MONSPELIENSIS: {
            count: 63,
          },
          PINUS_SYLVESTRIS: {
            individuals: [SPECIES_INDIVIDUAL_1],
          },
        },
        {
          PINUS_SYLVESTRIS: {
            count: 3,
          },
          CYTISUS_SCOPARIUS: {
            count: 58,
          },
        }
      )
    ).toEqual({
      APHYLLANTHES_MONSPELIENSIS: {
        count: 63,
      },
      PINUS_SYLVESTRIS: {
        count: 3,
        individuals: [SPECIES_INDIVIDUAL_1],
      },
      CYTISUS_SCOPARIUS: {
        count: 58,
      },
    } as Flora);
  });
});

export {};
