import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

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
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: "",
      purpose: "",
      odoStart: "",
      odoEnd: "",
    },
  });
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Date"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="date"
      />
      {errors.date && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Purpose"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="purpose"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="numeric"
            placeholder="Odometer Start"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="odoStart"
      />
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType="numeric"
            placeholder="Odometer End"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="odoEnd"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default CreateEntry;
