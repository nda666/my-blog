import { useActionData } from "@remix-run/react";
import classNames from "classnames/bind";
import {
  useControlField,
  useField,
  useFormContext,
  ValidatedForm,
} from "remix-validated-form";
import postValidation from "~/utils/validations/post.validation";

import { createRef, useEffect, useState } from "react";
import { useTheme } from "~/contexts/ThemeContext";
import type { Editor } from "@toast-ui/react-editor";
import type { Category, Post, Tag } from "@prisma/client";
import TagsSelect, { TagValueProps } from "./TagsSelect";
import CategorySelect, { CategoryValueProps } from "./CategorySelect";

const submitBtnClass = classNames.bind({
  base: `btn`,
  loading: `loading`,
});

export interface PostFormProps {
  post?: Post & { tags: Tag[]; category: Category };
  categoryList: CategoryValueProps[];
}
interface PostFormState {
  editorLoading: boolean;
  content: string;
  editor: JSX.Element | undefined;
  tags: Tag[];
}
export default function PostForm(props: PostFormProps) {
  console.log(props);
  const [state, setState] = useState<PostFormState>({
    editorLoading: true,
    editor: undefined,
    content: props.post?.content ?? "",
    tags: props.post?.tags ?? [],
  });

  // console.log("error", value);
  const editorRef = createRef<Editor>();
  const { theme } = useTheme();
  const { isSubmitting, fieldErrors } = useFormContext("post-form");
  const actionData = useActionData();

  useEffect(() => {
    setState((prevState) => ({ ...prevState, editorLoading: true }));
    import("@toast-ui/react-editor")
      .then(({ Editor }) => {
        setState((prevState) => ({
          ...prevState,
          editor: (
            <Editor
              ref={editorRef}
              theme={theme}
              initialValue={state.content}
              autofocus={false}
              onChange={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  content: editorRef.current?.getInstance().getMarkdown() || "",
                }));
              }}
            />
          ),
        }));
      })
      .finally(() => {
        setState((prevState) => ({ ...prevState, editorLoading: false }));
      });
    return () => setState((prevState) => ({ ...prevState, editor: undefined }));
  }, [theme]);

  return (
    <>
      <div className="flex justify-center items-center content-center ">
        <div className="card w-full bg-base-100 shadow-xl">
          <ValidatedForm
            id="post-form"
            validator={postValidation}
            noValidate
            method="post"
          >
            {props.post?.id && (
              <input type={"hidden"} name="id" value={props.post?.id} />
            )}
            <fieldset className="text-center ">
              <legend className="sr-only">Create Post</legend>
            </fieldset>
            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <label className="label">Title:</label>

                {fieldErrors?.title ? (
                  <p className="text-red-500" role="alert" id="title-error">
                    {fieldErrors.title}
                  </p>
                ) : null}
              </div>
              <input
                type="text"
                defaultValue={props.post?.title}
                className="input input-bordered w-full"
                name="title"
                required
                aria-invalid={Boolean(fieldErrors?.title)}
                aria-errormessage={
                  fieldErrors?.title ? "title-error" : undefined
                }
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
                defaultValue={props.post?.slug}
                className="input input-bordered w-full"
                name="slug"
                required
                aria-invalid={Boolean(fieldErrors?.slug)}
                aria-errormessage={fieldErrors?.slug ? "slug-error" : undefined}
              />
            </div>

            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <label className="label">Category:</label>
                {fieldErrors?.category ? (
                  <p className="text-red-500" role="alert" id="category-error">
                    {fieldErrors.category}
                  </p>
                ) : null}
              </div>
              <CategorySelect
                name="category"
                initialValue={props.post?.category}
                categories={props.categoryList}
              />
            </div>

            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <label className="label">Content:</label>

                {fieldErrors?.content ? (
                  <p className="text-red-500" role="alert" id="content-error">
                    {fieldErrors.content}
                  </p>
                ) : null}
              </div>
              {!state.editor ? (
                <div className="h-[300px] border border-gray-700 flex flex-row items-center justify-center">
                  Please wait...
                </div>
              ) : (
                state.editor
              )}
              <input
                type="hidden"
                name="content"
                value={state.content || ""}
                defaultValue={props.post?.content}
              />
            </div>
            <div className="mb-6">
              <div className="flex gap-2 items-center">
                <label className="label">Tags:</label>
              </div>
              <TagsSelect name="tags" initialValue={props.post?.tags} />
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
