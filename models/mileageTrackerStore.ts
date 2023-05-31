import { makeObservable, observable, action } from "mobx";

class MileageTrackerStore {
  mileageEntries = [];

  addMileageEntry(data: {
    date: string;
    purpose: string;
    odoStart: number;
    odoEnd: number;
  }) {
    this.mileageEntries.push({
      date: data.date,
      purpose: data.purpose,
      odoStart: data.odoStart,
      odoEnd: data.odoEnd,
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
