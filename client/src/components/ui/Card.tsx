import { NoteIcon } from "../icon/NoteIcon";
import { DeleteIcon } from "../icon/DeleteIcon";
import { ShareIcon } from "../icon/ShareIcon";
import { ContentTypeFromServer } from "../../types/content";
import { useState } from "react";
import { DeleteContentModal } from "./DeleteContentModal";

interface CardProps {
  content: ContentTypeFromServer;
  isContentOwner?: boolean;
}
export const Card = (props: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { isContentOwner = true } = props;
  const { _id, title, link, type, createdAt, userId = true } = props.content;

  return (
    <>
      <DeleteContentModal
        id={_id}
        isOpen={isModalOpen}
        onClose={closeModal}
        modalTitle="Delete Content"
      />
      <div className="bg-white w-80 max-h-100 min-h-72 max-h-96 overflow-auto min-w-60 shadow-md rounded px-3 py-3">
        {isContentOwner && (
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <NoteIcon />
              <p className="font-medium">{title}</p>
            </div>

            <div className="flex space-x-2">
              <ShareIcon />
              <span onClick={openModal} className="cursor-pointer">
                <DeleteIcon />
              </span>
            </div>
          </div>
        )}


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
          <span className="bg-purple-200 rounded-lg px-2 py-1">#{type}</span>
          <span className="bg-purple-200 rounded-lg px-2 py-1">
            #{typeof userId === 'object' ? userId.username : 'unknown'}
          </span>
        </div>

        <div className="">
          <span className="text-xs text-gray-500">
            Added on <span>{createdAt?.substring(0, 10)}</span>
          </span>{" "}
        </div>
      </div>
    </>
  );
};
