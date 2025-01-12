import { useEffect, useState } from "react";
import { CloseIcon } from "../icon/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { useForm } from "react-hook-form";
import { ContentData, ContentType } from "../../types/content";
import { CreateContentModalProps } from "../../types/modal";
import { useMutation, QueryClient } from "@tanstack/react-query";
import { postContent } from "../../apis/contentService";
import toast from "react-hot-toast";

export const CreateContentModal = (props: CreateContentModalProps) => {
  const { isOpen, onClose, modalTitle } = props;
  const [type, setType] = useState(ContentType.Youtube);
  const queryClient = new QueryClient();
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContentData>();

  const changeTypeToYT = () => {
    setType(ContentType.Youtube);
  };
  const changeTypeToTwitter = () => {
    setType(ContentType.Twitter);
  };

  const isValidLink = (link: string): boolean | string => {
    if (type === ContentType.Youtube) {
      const youtubeRegex =
        /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
      return youtubeRegex.test(link) || "Invalid YouTube link";
    } else if (type === ContentType.Twitter) {
      const twitterRegex = /^(https?:\/\/)?(www\.)?x\.com\/.+$/;
      return twitterRegex.test(link) || "Invalid Twitter link";
    }

    return true;
  };

  useEffect(() => {
    trigger(["link"]);
  }, [trigger, type, watch("link")]);

  const createNewContent = useMutation({
    mutationFn: postContent,
  });
  const addContent = async (data: ContentData) => {
    const { link, title } = data;
    if (!type || !link || !title) {
      return;
    }
    const serializedData = { ...data, type };
    createNewContent.mutate(serializedData, {
      onError: (error: any) => {
        const errorMsg =
          error?.response?.data?.messasge || "New content adding failed";
        toast.error(errorMsg);
        console.error("Content adding failed: ", error?.response?.data);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: "contents",
        });
        toast.success("Content added");
        reset();
        onClose();
      },
    });
  };

  return (
    <div>
      {isOpen && (
        <>
          <div className="h-screen w-screen bg-slate-100 fixed top-0 left-0 z-30 opacity-60 flex justify-center items-center"></div>
          <div className="h-screen w-screen  top-0 left-0 flex justify-center items-center fixed z-40">
            <form
              className=" p-5 bg-white shadow-md rounded-md z-40"
              onSubmit={handleSubmit(addContent)}
            >
              <div className="flex justify-between">
                <h3 className="font-medium">{modalTitle}</h3>
                <div className=" cursor-pointer" onClick={onClose}>
                  <CloseIcon />
                </div>
              </div>
              <div>
                <div>
                  <Input
                    register={register}
                    validation={{
                      required: "Title is required",
                    }}
                    name="title"
                    size="lg"
                    placeholder="Title"
                  />
                  {errors?.title && (
                    <p className="text-red-500"> {errors.title.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    register={register}
                    validation={{
                      required: "Link is required",
                      validate: isValidLink,
                    }}
                    name="link"
                    size="lg"
                    placeholder="Link"
                  />
                  {errors?.link && (
                    <p className="text-red-500"> {errors.link.message}</p>
                  )}
                </div>
                <div className="flex mt-5">
                  <Button
                    size="md"
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={changeTypeToYT}
                  />
                  <Button
                    size="md"
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={changeTypeToTwitter}
                  />
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <Button type="submit" size="md" text="Save" variant="primary" />
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
