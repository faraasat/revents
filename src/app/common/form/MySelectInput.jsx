import { useField } from "formik";
import React from "react";
import { FormField, Label, Select } from "semantic-ui-react";

export default function MySelectInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      {/* by using !! we are casting error obj to bool and error will be highlighted when both fields are true */}
      {/* <Label>{label}</Label> */}
      <Select
        clearable
        value={field.value || null}
        onChange={(e, d) => helpers.setValue(d.value)}
        onBlur={() => helpers.setTouched(true)}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
