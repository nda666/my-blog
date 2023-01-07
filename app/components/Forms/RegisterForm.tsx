import { useActionData } from "@remix-run/react";
import classNames from "classnames/bind";
import { useFormContext, ValidatedForm } from "remix-validated-form";
import type { UserData } from "~/models/auth";
import { registerValidation } from "~/utils/validations";
import PasswordInput from "../PasswordInput";
import TextInput from "../TextInput";

const submitBtnClass = classNames.bind({
  base: `btn`,
  loading: `loading`,
});

export interface RegisterFormProps {
  user?: UserData;
}

export default function RegisterForm(props: RegisterFormProps) {
  const { isSubmitting, fieldErrors } = useFormContext("register-form");
  const actionData = useActionData();

  return (
    <>
      <div className="flex justify-center items-center content-center ">
        <div className="card w-full bg-base-100 shadow-xl">
          <ValidatedForm
            id="register-form"
            validator={registerValidation}
            noValidate
            method="post"
          >
            <h1 className="text-center text-2xl">Register</h1>

            <fieldset className="text-center ">
              <legend className="sr-only">Edit Register</legend>
            </fieldset>
            <TextInput
              label="Email:"
              name="email"
              autoComplete="off"
              required
              aria-invalid={Boolean(fieldErrors?.email)}
              aria-errormessage={fieldErrors?.email ? "email-error" : undefined}
              beforeInputNode={
                fieldErrors?.email ? (
                  <p className="text-red-500" role="alert" id="email-error">
                    {fieldErrors.email}
                  </p>
                ) : (
                  ""
                )
              }
            />

            <PasswordInput
              label="Password:"
              name="password"
              autoComplete="off"
              aria-invalid={Boolean(fieldErrors?.password)}
              aria-errormessage={
                fieldErrors?.password ? "password-error" : undefined
              }
              beforeInputNode={
                fieldErrors?.password ? (
                  <p className="text-red-500" role="alert" id="password-error">
                    {fieldErrors.password}
                  </p>
                ) : (
                  ""
                )
              }
            />

            <PasswordInput
              label="Retype Password:"
              name="passwordConfirm"
              autoComplete="off"
              aria-invalid={Boolean(fieldErrors?.passwordConfirm)}
              aria-errormessage={
                fieldErrors?.passwordConfirm
                  ? "passwordConfirm-error"
                  : undefined
              }
              beforeInputNode={
                fieldErrors?.passwordConfirm ? (
                  <p
                    className="text-red-500"
                    role="alert"
                    id="passwordConfirm-error"
                  >
                    {fieldErrors.passwordConfirm}
                  </p>
                ) : (
                  ""
                )
              }
            />
            <div className="mb-6">
              <button
                type="submit"
                className={submitBtnClass({
                  base: true,
                  loading: isSubmitting,
                })}
              >
                Submit
              </button>
            </div>
            {actionData?.error && !isSubmitting && (
              <div className="alert alert-error shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{actionData.error}</span>
                </div>
              </div>
            )}
          </ValidatedForm>
        </div>
      </div>
    </>
  );
}
