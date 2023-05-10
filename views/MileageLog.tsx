import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { MileageTrackerModel } from "../models/MileageTrackerStore";
import { useStores } from "../models/root-store-context";

type MileageLogProps = {
  id: number;
  date: string;
  purpose: string;
  odoStart: number;
  odoEnd: number;
};

const mockData: MileageLogProps[] = [
  {
    id: 1,
    date: "2021-01-01",
    purpose: "purpose 1",
    odoStart: 10000,
    odoEnd: 10050,
  },
  {
    id: 2,
    date: "2021-01-02",
    purpose: "purpose 2",
    odoStart: 10050,
    odoEnd: 10100,
  },
  {
    id: 3,
    date: "2021-01-03",
    purpose: "purpose 3",
    odoStart: 10100,
    odoEnd: 10150,
  },
  {
    id: 4,
    date: "2021-01-04",
    purpose: "purpose 4",
    odoStart: 10150,
    odoEnd: 10200,
  },
  {
    id: 5,
    date: "2021-01-05",
    purpose: "purpose 5",
    odoStart: 10200,
    odoEnd: 10250,
  },
];

const ROOT = {
  flex: 1,
};

const ENTRY: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 20,
  marginLeft: 20,
};

const ENTRY_TEXT: TextStyle = {
  fontSize: 20,
};

const MileageLog = () => {
  const { mileageTrackerStore } = useStores();
  const mileageLog = mileageTrackerStore.mileageLog;
  console.log({ mileageTrackerStore });
  return (
    <ScrollView>
      <View>
        {mockData.map((entry, i) => (
          <Pressable
            key={i}
            style={ENTRY}
            onPress={() => console.log("test", entry.purpose)}
          >
            <Text style={ENTRY_TEXT}>
              {entry.date} {entry.purpose} {entry.odoStart} {entry.odoEnd}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default MileageLog;
