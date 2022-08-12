import { useDispatch, useSelector } from "react-redux";
import ScaleLoader from "react-spinners/ScaleLoader";

import { setValue } from "./slice";

export const Form: React.FC<{ login(user: string, cb: () => void): void }> = ({ login }) => {
  const dispatch = useDispatch();
  const value = useSelector((state: Types.State) => state.form.value);
  const message = useSelector((state: Types.State) => state.app.message);
  const loading = useSelector((state: Types.State) => !message && state.app.user && !state.app.isLoggedIn);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(value, () => dispatch(setValue("")));
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <div className="w-[218px] space-y-6  ">
        <label>
          Student Name:
          <input
            type="text"
            value={value.split(" ")}
            disabled={!!loading}
            placeholder="Username"
            onChange={(e) => dispatch(setValue(e.target.value))}
            className="w-full rounded p-2.5 text-sm text-gray-800 ring-2 ring-gray-500 "
          />
        </label>
        <button type="submit" disabled={!!loading} className="border-black-500 rounded border  py-2 px-4  text-black ">
          Log In
        </button>
      </div>
      {(message || loading) && (
        <span className="my-1 text-sm font-semibold tracking-wide text-gray-700">{message || <ScaleLoader />}</span>
      )}
    </form>
  );
};

export { default as formReducer } from "./slice";
