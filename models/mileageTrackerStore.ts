import { makeObservable, observable, action } from "mobx";

class MileageTrackerStore {
  mileageEntries = [];

  addMileageEntry(date, purpose, odoStart, odoEnd) {
    this.mileageEntries.push({
      date,
      purpose,
      odoStart,
      odoEnd,
    });
  }

  editMileageEntry(index, date, purpose, odoStart, odoEnd) {
    const entry = this.mileageEntries[index];
    if (entry) {
      entry.date = date;
      entry.purpose = purpose;
      entry.odoStart = odoStart;
      entry.odoEnd = odoEnd;
    }
  }

  constructor() {
    makeObservable(this, {
      mileageEntries: observable,
      addMileageEntry: action,
      editMileageEntry: action,
    });
  }
}

const mileageTrackerStore = new MileageTrackerStore();
export default mileageTrackerStore;
