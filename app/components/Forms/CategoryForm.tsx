import { useActionData } from "@remix-run/react";
import classNames from "classnames/bind";
import { useFormContext, ValidatedForm } from "remix-validated-form";
import categoryValidation from "~/utils/validations/category.validation";

import type { Category } from "@prisma/client";

const submitBtnClass = classNames.bind({
  base: `btn`,
  loading: `loading`,
});

export interface CategoryFormProps {
  category?: Category;
}

export default function CategoryForm(props: CategoryFormProps) {
  const { isSubmitting, fieldErrors } = useFormContext("category-form");
  const actionData = useActionData();

  return (
    <>
      <div className="flex justify-center items-center content-center ">
        <div className="card w-full bg-base-100 shadow-xl">
          <ValidatedForm
            id="category-form"
            validator={categoryValidation}
            noValidate
            method="post"
          >
            {props.category?.id && (
              <input type={"hidden"} name="id" value={props.category?.id} />
            )}
            <fieldset className="text-center ">
              <legend className="sr-only">Create Category</legend>
            </fieldset>
            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <label className="label">Name:</label>

                {fieldErrors?.name ? (
                  <p className="text-red-500" role="alert" id="name-error">
                    {fieldErrors.name}
                  </p>
                ) : null}
              </div>
              <input
                type="text"
                defaultValue={props.category?.name}
                className="input input-bordered w-full"
                name="name"
                required
                aria-invalid={Boolean(fieldErrors?.name)}
                aria-errormessage={fieldErrors?.name ? "name-error" : undefined}
              />
            </div>
            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <label className="label">Slug:</label>

                {fieldErrors?.slug ? (
                  <p className="text-red-500" role="alert" id="slug-error">
                    {fieldErrors.slug}
                  </p>
                ) : null}
              </div>
              <input
                type="text"
                defaultValue={props.category?.slug}
                className="input input-bordered w-full"
                name="slug"
                required
                aria-invalid={Boolean(fieldErrors?.slug)}
                aria-errormessage={fieldErrors?.slug ? "slug-error" : undefined}
              />
            </div>
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
