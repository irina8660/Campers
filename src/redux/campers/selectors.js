export const selectCampers = (state) => state.campers.items;

export const selectCurrentCamper = (state) => state.campers.current;

export const selectVisibleCampers = (state) => state.campers.showItems;

export const selectPage = (state) => state.campers.page;
export const selectLimit = (state) => state.campers.limit;

export const selectError = (state) => state.campers.error;
