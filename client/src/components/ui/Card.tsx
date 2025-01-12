import { NoteIcon } from "../icon/NoteIcon";
import { DeleteIcon } from "../icon/DeleteIcon";
import { ShareIcon } from "../icon/ShareIcon";
import { ContentTypeFromServer } from "../../types/content";

interface CardProps {
  content: ContentTypeFromServer;
}
export const Card = (props: CardProps) => {
  const { title, link, type, createdAt } = props.content;

  return (
    <div className="bg-white max-h-100 min-h-72 max-h-96 overflow-auto min-w-60 shadow-md rounded px-3 py-3">
      {/* header section  */}
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <NoteIcon />
          <p className="font-medium">{title}</p>
        </div>
        <div className="flex space-x-2">
          <ShareIcon />
          <DeleteIcon />
        </div>
      </div>
      {/* content  */}

      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full"
            src={link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
      {/* tag section  */}

      <div className="flex space-x-2 text-xs mt-3">
        <span className="bg-purple-200 rounded-lg px-2 py-1">
          #Productivity
        </span>
        <span className="bg-purple-200 rounded-lg px-2 py-1">#Ideas</span>
      </div>

      <div className="">
        <span className="text-xs text-gray-500">
          Added on <span>{createdAt?.substring(0, 10)}</span>
        </span>{" "}
      </div>
    </div>
  );
};
