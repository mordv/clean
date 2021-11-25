import create, { GetState, SetState, State, StateCreator, StoreApi } from 'zustand';
import produce from 'immer';
import { devtools } from 'zustand/middleware';
import { WritableDraft } from 'immer/dist/types/types-external';

export interface AppState extends State {
  counter: number;
  inc(): void;
  dec(): void;
}

const loggerMiddleware =
  (stateCreator: StateCreator<AppState>) =>
  (set: SetState<AppState>, ...rest: [GetState<AppState>, StoreApi<AppState>]) =>
    stateCreator((state) => {
      console.log(`update state: `, typeof state === `function` ? `function update` : state);
      set(state);
    }, ...rest);

export const useAppStore = create<AppState>(
  loggerMiddleware(
    devtools((set) => {
      const setMutable = (mutator: (draft: WritableDraft<AppState>) => void) => set(produce(mutator));

      return {
        counter: 0,
        inc: () => setMutable((state) => void state.counter++),
        dec: () => setMutable((state) => void state.counter--),
      };
    })
  )
);
