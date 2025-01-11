import { CloseIcon } from "../icon/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
interface CreateContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
}
export const CreateContentModal = (props: CreateContentModalProps) => {
  const { isOpen, onClose, modalTitle } = props;
  const submit = () => {};
  return (
    <div>
      {isOpen && (
        <>
          <div className="h-screen w-screen bg-slate-100 fixed top-0 left-0 z-30 opacity-60 flex justify-center items-center"></div>
          <div className="h-screen w-screen  top-0 left-0 flex justify-center items-center fixed z-40">
            <div className=" p-5 bg-white shadow-md rounded-md z-40">
              <div className="flex justify-between">
                <h3 className="font-medium">{modalTitle}</h3>
                <div className=" cursor-pointer" onClick={onClose}>
                  <CloseIcon />
                </div>
              </div>
              <div>
                <Input placeholder="Type" />
                <Input placeholder="Link" />
              </div>
              <div className="flex justify-end mt-5">
                <Button
                  size="md"
                  onClick={submit}
                  text="Save"
                  variant="primary"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
