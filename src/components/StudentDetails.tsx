import { useSelector } from "react-redux";

export const StudentDetails: React.FC<{ logout(): void }> = ({ logout }) => {
  const user = useSelector((state: Types.State) => state.app.user);
  const classes = useSelector((state: Types.State) => state.app.classes);

  return (
    <div className="flex h-screen w-screen flex-col items-start gap-3 px-10 py-6">
      <div className="flex w-full items-center justify-between gap-2 py-2">
        <p className="text-sm text-gray-800">Logged in as {user}</p>
        <button onClick={logout} className="border-black-500 rounded border  py-2 px-4  text-black ">
          Logout
        </button>
      </div>
      <div className="flex w-full shrink-0 grow flex-col flex-wrap items-center justify-center gap-8">
        {classes?.map((item) => (
          <div key={item.name} className="w-[22.5rem] min-w-max shrink-0 rounded p-4 ring-2 ring-gray-500">
            <h5 className="text-sm font-bold tracking-wide text-gray-600">Name</h5>
            <div className="mb-2 text-gray-800">{item.name}</div>
            <h5 className="text-sm font-bold tracking-wide text-gray-600">Students</h5>
            <div className="flex">
              <div className="text-gray-800">{item.students.join(", ")},</div>
              <div className="ml-1 text-gray-800">{user}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
