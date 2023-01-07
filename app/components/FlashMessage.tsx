import { RiErrorWarningLine, RiInformationLine } from "react-icons/ri";
import { useFlashMessages } from "~/hooks/useFlashMessage";

export default function FlashMessage() {
  const message = useFlashMessages();
  return message ? (
    <div
      className={`alert shadow-lg ${
        message.result ? "alert-success" : "alert-error"
      }`}
    >
      <div>
        {message.result ? <RiInformationLine /> : <RiErrorWarningLine />}
        <span>{message.message}</span>
      </div>
    </div>
  ) : (
    <></>
  );
}
