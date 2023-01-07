import type { ActionFunction, DataFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import RegisterForm from "~/components/Forms/RegisterForm";
import { isAnyUserExist, register, unauthenticatedRoute } from "~/models";
import { registerValidation } from "~/utils/validations";

export const action: ActionFunction = async ({ request }) => {
  const result = await registerValidation.validate(await request.formData());

  if (result.error) return validationError(result.error);

  const response = await register(
    {
      email: result.data.email,
      password: result.data.password,
    },
    request
  );

  return response;
};

export const loader = async ({ request }: DataFunctionArgs) => {
  const user = await unauthenticatedRoute(request);
  const isUserExist = await isAnyUserExist();
  if (isUserExist) {
    throw redirect("/login");
  }
  return json({});
};

export default function Register() {
  return <RegisterForm />;
}
