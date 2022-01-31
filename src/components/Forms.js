import React from "react";
import { Formik, Form, useField, ErrorMessage, FieldArray } from "formik";
// import "./Forms.modules.css";
import * as Yup from "yup";

import { Container } from "./styles/Forms.styled";

// custom fields for formik -------------------------------------------------

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={meta.touched && meta.error ? "invalid" : ""}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const URLInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={meta.touched && meta.error ? "invalid" : ""}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Field = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={meta.touched && meta.error ? "invalid" : ""}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className={meta.touched && meta.error ? "invalid" : ""}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
// -----------------------------------------------------------------------------

const Forms = () => {
  const initialValues = {
    recipeName: "",
    url: "",
    ingredients: [
      {
        name: "",
      },
    ],
    description: "",
  };

  return (
    <>
      <Container>
        <h1>Recipe form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            recipeName: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
            url: Yup.string().url("Invalid URL").required("Required"),
            ingredients: Yup.array().of(
              Yup.object({
                name: Yup.string()
                  .max(50, "Must be 50 characters or less")
                  .required("Required"),
              })
            ),
            description: Yup.string().max(
              500,
              "Must be 500 characters or less"
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values }) => (
            <Form>
              <MyTextInput
                label="Recipe Name"
                name="recipeName"
                type="text"
                placeholder="Sushi"
              />

              <URLInput
                label="Recipe Image"
                name="url"
                type="url"
                placeholder="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2021_14/1698202/one-sheet-pineapple-chicken-te-main-210406.jpg"
              />

              <FieldArray name="ingredients">
                {({ remove, push }) => (
                  <div>
                    {values.ingredients.length > 0 &&
                      values.ingredients.map((ingredient, index) => (
                        <div className="row" key={index}>
                          <div>
                            <label>Ingredient</label>
                            <Field
                              name={`ingredients.${index}.name`}
                              placeholder="1 cup of rice"
                              type="text"
                            />
                            <button
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                            <ErrorMessage
                              name={`ingredients.${index}.name`}
                              component="div"
                              className={"error"}
                            />
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push({ name: "" })}
                    >
                      Add ingredient
                    </button>
                  </div>
                )}
              </FieldArray>

              <TextArea
                label="Recipe Description"
                name="description"
                type="text"
                placeholder="This is a description"
              />
              <div>
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default Forms;
