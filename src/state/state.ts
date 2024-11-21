import { create, StateCreator, StoreApi } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';
import { ObjectTyped, PickFunctions } from '@mordv/utils';
import { shallow } from 'zustand/shallow';

export interface AppState {
  counter: number;

  inc(): void;

  dec(): void;
}

const loggerMiddleware =
  (stateCreator: StateCreator<AppState>) =>
  (
    set: StoreApi<AppState>['setState'],
    get: StoreApi<AppState>['getState'],
    api: StoreApi<AppState>
  ) =>
    stateCreator(
      (state) => {
        console.log(typeof state === `function` ? state(get()) : state);
        set(state);
      },
      get,
      api
    );

export const useAppStore = create<AppState>()(
  devtools(
    loggerMiddleware((set) => {
      const setMutable = (mutator: (draft: AppState) => void) =>
        set(produce(mutator));

      return {
        counter: 0,
        inc: () => setMutable((state) => void state.counter++),
        dec: () => setMutable((state) => void state.counter--),
      };
    })
  )
);

export const useActions = (): PickFunctions<AppState> =>
  useAppStore(
    (state: AppState) =>
      Object.fromEntries(
        ObjectTyped.entries(state).filter(
          ([, value]) => typeof value === `function`
        )
      ) as PickFunctions<AppState>,
    shallow
  );
