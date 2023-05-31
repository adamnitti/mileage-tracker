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
import { Dispatch, useState } from "react";

type Inputs = {
  date: string;
  purpose: string;
  odoStart: string;
  odoEnd: string;
};

const CreateEntry = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: "",
      purpose: "",
      odoStart: "",
      odoEnd: "",
    },
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [mode, setMode] = useState("date");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onSubmit = (data: Inputs) => {
    console.log({ data });
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
            value={value}
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
            value={value}
          />
        )}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

export default CreateEntry;
