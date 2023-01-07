import type { ReactNode } from "react";

interface TextInputProps
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
export default function TextInput({
  label,
  beforeInputNode,
  ...props
}: TextInputProps) {
  return (
    <div className="mb-6">
      <div className="flex gap-2 items-center">
        {label && <label className="label">{label}</label>}
        {beforeInputNode}
      </div>
      <input type="text" className="input input-bordered w-full" {...props} />
    </div>
  );
}
