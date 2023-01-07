import { ReactNode, useState } from "react";
import { RiAsterisk, RiEyeLine } from "react-icons/ri";

interface PasswordInputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "type"
  > {
  label?: string;
  beforeInputNode?: ReactNode | string;
}
export default function PasswordInput({
  label,
  beforeInputNode,
  ...props
}: PasswordInputProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-6">
      <div className="flex gap-2 items-center">
        {label && <label className="label">{label}</label>}
        {beforeInputNode}
      </div>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          className="input input-bordered w-full"
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="btn btn-ghost"
          >
            {show ? <RiAsterisk /> : <RiEyeLine />}
          </button>
        </div>
      </div>
    </div>
  );
}
