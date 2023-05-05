import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button } from "antd";
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Мінімальна довжина: 3 символи")
    .required("Поле є обов'язковим!"),
  lastName: Yup.string()
    .min(3, "Мінімальна довжина: 3 символи")
    .max(40, "Максимальна довжина: 40 символів")
    .required("Поле є обов'язковим!"),
  email: Yup.string().email("Пошта введена не коректно")
    .required("Поле є обов'язковим!"),
  password: Yup.string()
    .required("Поле є обов'язковим!")
    .matches(
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/,
      "Пароль має містити хоча б 1 букву верхнього регістру та 1 букву нижнього регістру латиниці, 1 число та 1 спеціальний символ"
    ),
});

const SignupForm = () => {
  const navigate = useNavigate();
  return (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert("Ви успішно зареєстровані");
        setSubmitting(false);   
        navigate("/");
      }, 400);
    }}
  > 
    {({ isSubmitting, touched, errors }) => (      
      <Form className="w-50 m-auto">
        <div className="m-4">
          <div className="my-3">
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              as={Input}
              className={`form-control ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="my-3">
            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              as={Input}
              className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="my-3">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              as={Input}
              className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="my-3">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              as={Input.Password}
              className={`form-control ${touched.password && errors.password ? "is-invalid" : ""}`}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="d-flex justify-content-center text-center">
             <SubmitButton className="my-3" disabled={isSubmitting}/>
          </div>
        </div>
      </Form>
    )}
  </Formik>
);
    };

export default SignupForm;