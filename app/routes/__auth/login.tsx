import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import {
  useActionData,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";
import classNames from "classnames/bind";
import {
  useFormContext,
  ValidatedForm,
  validationError,
} from "remix-validated-form";
import { login, unauthenticatedRoute } from "~/utils/server/auth.server";
import loginValidation from "~/utils/validations/login.validation";

const inputClassName = `input input-bordered w-full`;
const submitBtnClass = classNames.bind({
  base: `btn`,
  loading: `loading`,
});

export const action: ActionFunction = async ({ request }) => {
  const result = await loginValidation.validate(await request.formData());
  if (result.error) return validationError(result.error);

  return await login(result.data);
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await unauthenticatedRoute(request);
  return {};
};

export default function Login() {
  const [searchParams] = useSearchParams();
  const { isSubmitting, fieldErrors } = useFormContext("login-form");
  const actionData = useActionData();
  return (
    <>
      <div className="flex justify-center items-center content-center ">
        <div className="lg:m-10 my-10 md:w-2/3 lg:w-1/2  font-bold px-5 py-6 rounded-md">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <ValidatedForm
                id="login-form"
                validator={loginValidation}
                noValidate
                method="post"
              >
                <h1 className="text-center text-2xl">Login</h1>
                <input
                  type="hidden"
                  name="redirectTo"
                  value={searchParams.get("redirectTo") ?? undefined}
                />
                <fieldset className="text-center ">
                  <legend className="sr-only">Login</legend>
                </fieldset>
                <div className="mb-6">
                  <label className="label">Email</label>
                  <input
                    type="text"
                    className={inputClassName}
                    name="email"
                    required
                    aria-invalid={Boolean(fieldErrors?.email)}
                    aria-errormessage={
                      fieldErrors?.email ? "email-error" : undefined
                    }
                  />
                  {fieldErrors?.email ? (
                    <p className="text-red-500" role="alert" id="email-error">
                      {fieldErrors.email}
                    </p>
                  ) : null}
                </div>
                <div className=" mb-6">
                  <div className="relative">
                    <label htmlFor="name" className="label">
                      Password
                    </label>
                    <input
                      name="password"
                      className={inputClassName}
                      required
                      type="password"
                      aria-invalid={Boolean(fieldErrors?.password) || undefined}
                      aria-errormessage={
                        fieldErrors?.password ? "password-error" : undefined
                      }
                    />
                  </div>
                  {fieldErrors?.password ? (
                    <p
                      className="text-red-500"
                      role="alert"
                      id="password-error"
                    >
                      {fieldErrors.password}
                    </p>
                  ) : null}
                </div>

                <div className=" mb-6">
                  <div className="relative">
                    <label className="cursor-pointer label">
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        name="remember"
                        value="1"
                      />
                      <span className="label-text">Remember me</span>
                    </label>
                  </div>
                  {fieldErrors?.remember ? (
                    <p
                      className="text-red-500"
                      role="alert"
                      id="remember-error"
                    >
                      {fieldErrors.remember}
                    </p>
                  ) : null}
                </div>

                <div className="mb-6">
                  <button
                    className={submitBtnClass({
                      base: true,
                      loading: isSubmitting,
                    })}
                    type="submit"
                  >
                    Login
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
        </div>
      </div>
    </>
  );
}
