export const selectCampers = (state) => state.campers.items;

export const selectCurrentCamper = (state) => state.campers.current;

export const selectPage = (state) => state.campers.page;

export const selectLimit = (state) => state.campers.limit;

export const selectHasNextPage = (state) => state.campers.hasNextPage;

export const selectError = (state) => state.campers.error;

export const selectIsLoading = (state) => state.campers.isLoading;
