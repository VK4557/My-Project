import React from "react";
import { Text } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";

function AppFormPicker({ lists, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        lists={lists}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <Text error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
