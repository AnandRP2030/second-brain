import { toast } from "react-hot-toast";
import { CreateContentModalProps } from "../../types/modal";
import { CloseIcon } from "../icon/CrossIcon";
import { Button } from "./Button";
import { useMutation } from "@tanstack/react-query";
import { createSharableLink } from "../../apis/contentService";
import { useEffect, useState } from "react";
import { FRONT_END_BASE_URL } from "../../apis/axiosInstance";
export const ShareContentModal = (props: CreateContentModalProps) => {
  const { isOpen, onClose, modalTitle } = props;
  const [link, setLink] = useState<string | null>(null);
  const { mutate } = useMutation({
    mutationFn: createSharableLink,
    onSuccess: (data) => {
      const hash = data.data?.hash || "";
      setLink(`${FRONT_END_BASE_URL}/link/${hash}`);
    },
  });

  useEffect(() => {
    if (isOpen && !link) {
      console.log('test')
      mutate();
    }
  }, [isOpen, mutate]);

  const copyLinkToClipboard = () => {
    if (link) {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          toast.success("Link Copied!");
        })
        .catch(() => {
          toast.error("Something went wrong!");
        });

      onClose();
    } else {
      toast.error("Link not available, Login again!");
    }
  };
  return (
    <div>
      {isOpen && (
        <>
          <div className="h-screen w-screen bg-slate-100 fixed top-0 left-0 z-30 opacity-60 flex justify-center items-center"></div>
          <div className="h-screen w-screen  top-0 left-0 flex justify-center items-center fixed z-40">
            <div className="shadow-md p-5 bg-purple-100">
              <div className="flex justify-between">
                <h3 className="font-medium text-xl">{modalTitle}</h3>
                <div className="cursor-pointer" onClick={onClose}>
                  <CloseIcon />
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-lg mb-2">
                  Copy this link and share with your friends!
                </h1>
                <span className="bg-black text-white p-1">{link}</span>
                <div className="flex justify-end mt-5">
                  <Button
                    size="md"
                    text="Copy"
                    variant="primary"
                    onClick={copyLinkToClipboard}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
