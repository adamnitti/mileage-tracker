import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { MileageTrackerModel } from "./MileageTrackerStore";

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  mileageTrackerStore: types.optional(MileageTrackerModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
