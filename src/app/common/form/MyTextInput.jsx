import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && !!meta.error}>
      {/* by using !! we are casting error obj to bool and error will be highlighted when both fields are true */}
      {/* <Label>{label}</Label> */}
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic color="red">
          {meta.error}
        </Label>
      ) : null}
    </FormField>
  );
}
