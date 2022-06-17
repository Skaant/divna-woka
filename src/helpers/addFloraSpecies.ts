import { FloraSpecies } from "../types/Flora";
import { addCount } from "./addCount";

export function addFloraSpecies(
  { count: aCount, individuals: aIndividuals }: FloraSpecies,
  { count: bCount, individuals: bIndividuals }: FloraSpecies
): FloraSpecies {
  return {
    count: aCount
      ? bCount
        ? addCount(aCount, bCount)
        : aCount
      : bCount || undefined,
    individuals:
      aIndividuals || bIndividuals
        ? [...(aIndividuals || []), ...(bIndividuals || [])]
        : undefined,
  };
}
