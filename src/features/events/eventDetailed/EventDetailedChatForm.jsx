import { Field, Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import { addEventchatComments } from "../../../app/firestore/firebaseService";
import { Loader } from "semantic-ui-react";
import * as Yup from "yup";

export default function EventDetailedChatForm({
  eventId,
  parentId,
  closeForm,
}) {
  return (
    <Formik
      initialValues={{ comments: "" }}
      validationSchema={Yup.object({
        comment: Yup.string().required(),
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          await addEventchatComments(eventId, { ...values, parentId });
          resetForm({});
          document.getElementById("txtArea").value = "";
        } catch (error) {
          toast.error(error.message);
        } finally {
          setSubmitting(false);
          closeForm({ open: false, commentId: null });
        }
      }}
    >
      {({ isSubmitting, handleSubmit, isValid }) => (
        <Form className="ui form">
          <Field name="comment">
            {({ field }) => (
              <div style={{ position: "relative" }}>
                <Loader active={isSubmitting} />
                <textarea
                  id="txtArea"
                  rows="2"
                  {...field}
                  placeholder="Enter Your Comment (Enter to submit, SHIFT + ENTER for new line)"
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && e.shiftKey) {
                      return;
                    }
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      isValid && handleSubmit();
                    }
                  }}
                ></textarea>
              </div>
            )}
          </Field>
        </Form>
      )}
    </Formik>
  );
}
