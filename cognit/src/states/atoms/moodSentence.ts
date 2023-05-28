import { atom } from "jotai";

export const adultSentenceAtom = atom<string[]>([]);
export const childSentenceAtom = atom<string[]>([]);
export const parentSentenceAtom = atom<string[]>([]);
export const moodSentenceAtom = atom([
  adultSentenceAtom,
  childSentenceAtom,
  parentSentenceAtom,
]);
