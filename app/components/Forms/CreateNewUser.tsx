<ValidatedForm
  id="account-form"
  validator={accountValidation}
  noValidate
  method="post"
>
  <input type={"hidden"} name="id" value={props.user?.id} />

  <fieldset className="text-center ">
    <legend className="sr-only">Edit Account</legend>
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
    aria-errormessage={fieldErrors?.password ? "password-error" : undefined}
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
      fieldErrors?.passwordConfirm ? "passwordConfirm-error" : undefined
    }
    beforeInputNode={
      fieldErrors?.passwordConfirm ? (
        <p className="text-red-500" role="alert" id="passwordConfirm-error">
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
</ValidatedForm>;
