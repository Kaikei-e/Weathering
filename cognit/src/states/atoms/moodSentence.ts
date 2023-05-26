import {atom, Getter, Setter, WritableAtom} from "jotai";


export const sentenceAtom = atom([""])
export const adultSentenceAtom = atom(
    (get) => get(sentenceAtom),
    (get, set, newSentence) => {
        set(sentenceAtom, newSentence)
    }
)
export const childSentenceAtom: WritableAtom<string, string[], string[]> = atom([""]);
export const parentSentenceAtom : WritableAtom<string, string[], string[]> = atom([""]);
export const moodSentenceAtom = atom([adultSentenceAtom, childSentenceAtom, parentSentenceAtom]);

