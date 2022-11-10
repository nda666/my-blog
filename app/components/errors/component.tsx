import { Link } from "@remix-run/react";
import { RiBugLine, RiRefreshLine } from "react-icons/ri";
export default function RenderErrorComponent() {
  return (
    <div className="px-4 py-4">
      <div className="card w-full bg-error text-error-content">
        <div className="card-body items-center">
          <div className="text-8xl">
            <RiBugLine />
          </div>
          <h2 className="card-title">Opps something happened!</h2>

          <p>
            I'm sorry if you seen this message. It seem <b>"tiar"</b> had some
            error with this page. He will fix this page soon.
          </p>
          <div className="card-actions justify-end mt-4">
            <Link to={"."}>
              <button className="btn btn-ghost gap-2 underline">
                <RiRefreshLine></RiRefreshLine> Refresh
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
