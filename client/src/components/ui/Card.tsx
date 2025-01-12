import { NoteIcon } from "../icon/NoteIcon";
import { DeleteIcon } from "../icon/DeleteIcon";
import { ShareIcon } from "../icon/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "youtube" | "twitter" | "github" | "links" | "instagram";
}
export const Card = (props: CardProps) => {
  const { title, link, type } = props;

  const getUserName = (link: string) => {
    return link.split("/").pop();
  };
  return (
    <div className="bg-white max-h-100 min-h-72 min-w-60 shadow-md rounded px-3 py-3">
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
        <span className="text-xs text-gray-500">Added on 25/04/2000</span>{" "}
      </div>
    </div>
  );
};
