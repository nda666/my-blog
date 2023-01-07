import {
  ActionFunction,
  DataFunctionArgs,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import {
  Link,
  useActionData,
  useLoaderData,
  useMatches,
  useSearchParams,
} from "@remix-run/react";
import classNames from "classnames/bind";
import { RiErrorWarningLine, RiInformationLine } from "react-icons/ri";
import { AuthenticityTokenInput, verifyAuthenticityToken } from "remix-utils";
import {
  useFormContext,
  ValidatedForm,
  validationError,
} from "remix-validated-form";
import FlashMessage from "~/components/FlashMessage";
import { isAnyUserExist, login, unauthenticatedRoute } from "~/models/auth";
import { RootLoader } from "~/root";
import { commitSession, getSession } from "~/session.server";
import { FlashMessageType } from "~/types/session";
import { loginValidation } from "~/utils/validations";

const inputClassName = `input input-bordered w-full`;
const submitBtnClass = classNames.bind({
  base: `btn`,
  loading: `loading`,
});

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request);
  await verifyAuthenticityToken(request, session);
  const result = await loginValidation.validate(await request.formData());
  if (result.error) return validationError(result.error);

  return await login(result.data);
};

export const loader = async ({ request }: DataFunctionArgs) => {
  const user = await unauthenticatedRoute(request);
  const isUserExist = await isAnyUserExist();
  if (!isUserExist) {
    const session = await getSession(request);
    session.set("message", "Create a new admin user");
    throw redirect("/register", {
      headers: {
        "set-cookie": await session.commit(),
      },
    });
  }

  return null;
};

export default function Login() {
  const matches = useMatches();
  const rootData = matches.find((match) => match.id === "root")?.data as
    | RootLoader
    | undefined;
  const [searchParams] = useSearchParams();
  const { isSubmitting, fieldErrors } = useFormContext("login-form");
  const actionData = useActionData();
  return (
    <>
      <div className="card w-full shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-center text-2xl">Login</h1>
          <ValidatedForm
            id="login-form"
            validator={loginValidation}
            noValidate
            method="post"
          >
            <AuthenticityTokenInput />
            <FlashMessage />
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
                <p className="text-red-500" role="alert" id="password-error">
                  {fieldErrors.password}
                </p>
              ) : null}
            </div>

            <div className="mb-6">
              <div className="relative">
                <label className="cursor-pointer label flex justify-start gap-4 ">
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
                <p className="text-red-500" role="alert" id="remember-error">
                  {fieldErrors.remember}
                </p>
              ) : null}
            </div>

            <div className="mb-6">
              <div className="flex w-full justify-between">
                <button
                  className={submitBtnClass({
                    base: true,
                    loading: isSubmitting,
                  })}
                  type="submit"
                >
                  Login
                </button>
                <Link
                  className="btn btn-link text-white normal-case"
                  to="/login"
                >
                  I Forgot My Password
                </Link>
              </div>
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
