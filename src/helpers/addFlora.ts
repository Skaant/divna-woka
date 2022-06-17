import { SPECIES } from "../data/species/species.enum";
import { Flora } from "../types/Flora";
import { addFloraSpecies } from "./addFloraSpecies";

export function addFlora(a: Flora = {}, b: Flora = {}): Flora {
  const aSpecies = Object.keys(a) as SPECIES[];
  const bSpecies = Object.keys(b) as SPECIES[];
  const allSpecies = bSpecies.reduce(
    (allSpecies, species) =>
      allSpecies.includes(species) ? allSpecies : [...allSpecies, species],
    aSpecies
  );
  return allSpecies.reduce<Flora>(
    (flora, species) => ({
      ...flora,
      [species]: addFloraSpecies(a[species] || {}, b[species] || {}),
    }),
    {}
  );
}
