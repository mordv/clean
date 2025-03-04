import { atom } from 'jotai';

const countAtom = atom(1);
export const countAtomApi = atom(
  (get) => get(countAtom),
  (_, set, action: 'inc' | 'dec') => {
    set(countAtom, (c) => c + (action === 'inc' ? 1 : -1));
  }
);
