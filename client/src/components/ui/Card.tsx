import { NoteIcon } from "../icon/NoteIcon";
import { DeleteIcon } from "../icon/DeleteIcon";
import { ShareIcon } from "../icon/ShareIcon";

export const Card = () => {
  return (
    <div className="bg-red-800 h-72 w-60 shadow-md rounded border-red-500 px-3 py-3">
      {/* header section  */}
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <NoteIcon />
          <p className="font-medium">Project ideas</p>
        </div>
        <div className="flex space-x-2">
          <ShareIcon />
          <DeleteIcon />
        </div>
      </div>
      {/* content  */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800 mb-2 space-y-1">
          Future Projects
        </h1>
        <ul className="marker:text-sky-400 list-disc pl-4">
          <li>Build Personal Knowlege base</li>
          <li>Create a habit tracker </li>
          <li>Design a minimalist todo app</li>
        </ul>
      </div>

      {/* tag section  */}

      <div className="flex space-x-2 text-xs mt-3">
        <span className="bg-purple-200 rounded-lg px-2 py-1">
          #Productivity
        </span>
        <span className="bg-purple-200 rounded-lg px-2 py-1">#Ideas</span>
      </div>

      <div className="">
        <span className="text-xs text-gray-500">Added on 25/04/2000</span>{" "}
      </div>
    </div>
  );
};
