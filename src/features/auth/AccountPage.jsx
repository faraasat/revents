import { Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Label, Segment } from "semantic-ui-react";
import * as YUP from "yup";
import MyTextInput from "../../app/common/form/MyTextInput";
import { updateUserPassword } from "../../app/firestore/firebaseService";

export default function AccountPage() {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <Segment>
      <Header dividing size="large" content="Account" />
      {currentUser.providerId === "password" && (
        <>
          <Header color="teal" sub content="Change Password" />
          <p>Use this form to change the password</p>
          <Formik
            initialValues={{ newPassword1: "", newPassword2: "" }}
            validationSchema={YUP.object({
              newPassword1: YUP.string().required("Password is Required"),
              newPassword2: YUP.string().oneOf(
                [YUP.ref("newPassword1"), null],
                "Passwords do not Match"
              ),
            })}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              try {
                await updateUserPassword(values);
              } catch (error) {
                setErrors({ auth: error.message });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ errors, isSubmitting, isValid, dirty }) => (
              <Form className="ui form">
                <MyTextInput
                  name="newPassword1"
                  type="password"
                  placeholder="New Password"
                />
                <MyTextInput
                  name="newPassword2"
                  type="password"
                  placeholder="Confirm Password"
                />
                {errors.auth && (
                  <Label
                    basic
                    color="red"
                    style={{ marginBottom: 10 }}
                    content={errors.auth}
                  />
                )}
                <Button
                  style={{ display: "block" }}
                  type="submit"
                  disabled={!isValid || isSubmitting || !dirty}
                  loading={isSubmitting}
                  size="large"
                  positive
                  content="Update Password"
                />
              </Form>
            )}
          </Formik>
        </>
      )}
      {currentUser.providerId === "facebook" && (
        <>
          <Header color="teal" sub content="Facebook Account" />
          <p>Please Visit Facebook to Update Your Account</p>
          <Button
            icon="facebook"
            color="facebook"
            as={Link}
            to="https://facebook.com"
            content="Go to Facebook"
          />
        </>
      )}
      {currentUser.providerId === "google.com" && (
        <>
          <Header color="teal" sub content="Google Account" />
          <p>Please Visit Google to Update Your Account</p>
          <Button
            icon="google"
            color="google plus"
            as={Link}
            to="https://gmail.com"
            content="Go to Google"
          />
        </>
      )}
    </Segment>
  );
}
