export interface CreateContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
}

export interface DeleteContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  id: string
}
