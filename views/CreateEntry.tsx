import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dispatch, useEffect, useState } from "react";
import mileageTrackerStore from "../models/mileageTrackerStore";

type Inputs = {
  date: string;
  purpose: string;
  odoStart: number;
  odoEnd: number;
};

const CreateEntry = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: "",
      purpose: "",
      odoStart: 0,
      odoEnd: 0,
    },
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: Inputs) => {
    console.log({ data });
    mileageTrackerStore.addMileageEntry(data);
    console.log("store", mileageTrackerStore.mileageEntries);
    navigation.navigate("Mileage Log");
    // const inputString = data.date;
    // console.log({ inputString });
    // const date = new Date(inputString).toDateString();
    // console.log({ date });
    // const formattedDate = `${
    //   date.getMonth() + 1
    // }/${date.getDate()}/${date.getFullYear()}`;
    // console.log({ formattedDate });
  };

  return (
    <ScrollView>
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <>
            <Pressable onPress={() => setShowDatePicker(true)}>
              <Text>Enter Date</Text>
            </Pressable>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={value ? new Date(value) : new Date()} // Convert value to Date object
                mode={"date"}
                is24Hour={true}
                onChange={(event: any, selectedDate: Date | undefined) => {
                  onChange(selectedDate);
                  setShowDatePicker(false);
                }}
              />
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="purpose"
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            placeholder="Purpose:"
            value={value}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
          />
        )}
      />
      <Controller
        control={control}
        name="odoStart"
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="numeric"
            placeholder="Odometer Start"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value ? String(value) : ""}
          />
        )}
      />
      <Controller
        control={control}
        name="odoEnd"
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="numeric"
            placeholder="Odometer End"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value ? String(value) : ""}
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

export default CreateEntry;
