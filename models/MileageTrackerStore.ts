import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { createUniqueId } from "../utils/createUniqueId";

export const MileageEntryModel = types.model({
  entryId: types.identifier,
  createdAt: types.number,
});

/**
 * Model description here for TypeScript hints.
 */
export const MileageTrackerModel = types
  .model("MileageTracker")
  .props({
    mileageLog: types.map(MileageEntryModel),
    entryId: types.optional(types.string, createUniqueId()),
    date: types.optional(types.string, ""),
    purpose: types.optional(types.string, ""),
    odoStart: types.optional(types.number, 0),
    odoEnd: types.optional(types.number, 0),
  })
  .views((self) => ({
    get getMileageLog() {
      const log = Array.from(self.mileageLog.values()).sort((a, b) => {
        return a.createdAt - b.createdAt;
      });
      return log;
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setEntryId(value: string) {
      self.entryId = value;
    },
    setDate(value: any) {
      self.date = value;
    },
    setPurpose(value: string) {
      self.purpose = value;
    },
    setOdoStart(value: number) {
      self.odoStart = value;
    },
    setOdoEnd(value: number) {
      self.odoEnd = value;
    },
    addMileageEntry({
      date,
      purpose,
      odoStart,
      odoEnd,
    }: {
      date: string;
      purpose: string;
      odoStart: number;
      odoEnd: number;
    }) {
      const entryId = createUniqueId();
      const createdAt = Date.now();
      self.mileageLog.put({ entryId, createdAt });
      self.date = date;
      self.purpose = purpose;
      self.odoStart = odoStart;
      self.odoEnd = odoEnd;
    },

    reset() {
      self.date = "";
      self.purpose = "";
      self.odoStart = 0;
      self.odoEnd = 0;
    },
    replicate() {
      self.date = "";
      self.purpose = "";
      self.odoStart = 0;
      self.odoEnd = 0;
    },
  })); // eslint-disable-line @typescript-eslint/no-unused-vars

type MileageTrackerType = Instance<typeof MileageTrackerModel>;
export interface MileageTracker extends MileageTrackerType {}
type MileageTrackerSnapshotType = SnapshotOut<typeof MileageTrackerModel>;
export interface WwxdSnapshot extends MileageTrackerSnapshotType {}
export const createMileageTrackerDefaultModel = () =>
  types.optional(MileageTrackerModel, {});
