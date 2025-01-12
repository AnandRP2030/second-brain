import { toast } from "react-hot-toast";
import { deleteUserContent } from "../../apis/contentService";
import { DeleteContentModalProps } from "../../types/modal";
import { CloseIcon } from "../icon/CrossIcon";
import { Button } from "./Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export const DeleteContentModal = (props: DeleteContentModalProps) => {
  const { isOpen, onClose, modalTitle, id } = props;
  const queryClient = useQueryClient();
  const deleteContent = useMutation({
    mutationFn: deleteUserContent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contents"] });
    },
  });

  const initialDeleteFn = () => {
    deleteContent.mutate(id, {
      onError: (error: any) => {
        const errorMsg =
          error?.response?.data?.message || "Can't delete. Try again later";
        toast.error(errorMsg);
        console.log("Delete failed: ", error?.response?.data);
      },
      onSuccess: () => {
        toast.success("Content deleted successfully");
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
            <div className="shadow-md p-5 bg-purple-100">
              <div className="flex justify-between">
                <h3 className="font-medium text-xl">{modalTitle}</h3>
                <div className=" cursor-pointer" onClick={onClose}>
                  <CloseIcon />
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-lg ">
                  Are you sure you want to delete this content?{" "}
                </h1>
                <div className="flex justify-end mt-5">
                  <Button
                    size="md"
                    text="Delete"
                    variant="danger"
                    onClick={initialDeleteFn}
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
