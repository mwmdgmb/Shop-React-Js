import { createSelector } from "reselect";

const direcSelector = state => state.directory;

export const selectDirecSection = createSelector(
  [direcSelector],
  directory => directory.sections
);
