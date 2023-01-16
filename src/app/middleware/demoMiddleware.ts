import { createListenerMiddleware } from '@reduxjs/toolkit';

import { decrement, increment } from '../slices/demoSlice';

const listenerDemoMiddleware = createListenerMiddleware();
// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
listenerDemoMiddleware.startListening({
  actionCreator: increment,
  effect: async (action, listenerApi) => {
    // Run whatever additional side-effect-y logic you want here
    console.log(listenerApi.getOriginalState());
    console.log(action);
    console.log(listenerApi.getState());
    console.log('Increment action dispatched');
    await listenerApi.delay(2000);
    console.log('Decreate action dispatched after 2s');
    listenerApi.dispatch(decrement());
    listenerApi.cancelActiveListeners();
  },
});

listenerDemoMiddleware.startListening({
  predicate: (decrement, currentState, previousState) => {
    console.log(decrement);
    console.log(currentState);
    console.log(previousState);
    return false;
  },
  effect: async (action, listenerApi) => {
    console.log(action);
  },
});
// listenerDemoMiddleware.startListening({
//   actionCreator: decrement,
//   effect: async (action, listenerApi) => {
//     // Run whatever additional side-effect-y logic you want here
//     console.log('Decrement action dispatched');
//     await listenerApi.delay(2000);
//     console.log('Increment action dispatched after 2s');
//     await listenerApi.dispatch(increment());
//     listenerApi.cancelActiveListeners();
//   },
// });

listenerDemoMiddleware.stopListening({
  actionCreator: increment,
  effect: async (action, listenerApi) => {},
  cancelActive: true,
});

// listenerDemoMiddleware.stopListening({
//   actionCreator: decrement,
//   effect: async (action, listenerApi) => {},
//   cancelActive: true,
// });
export default listenerDemoMiddleware;
