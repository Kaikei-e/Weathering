import {Getter, Setter, WritableAtom} from "jotai";

export const adultSentenceAtom: WritableAtom<string, string[], string[]> = atom([""], [""]);
export const childSentenceAtom: WritableAtom<string, string[], string[]> = atom([""]);
export const parentSentenceAtom : WritableAtom<string, string[], string[]> = atom([""]);
export const moodSentenceAtom = atom([adultSentenceAtom, childSentenceAtom, parentSentenceAtom]);

function atom<Value, Update>(
    read: (get: Getter) => Value | Promise<Value>,
    write: (get: Getter, set: Setter, update: Update) => void | Promise<void>
): WritableAtom<Value,  Update>