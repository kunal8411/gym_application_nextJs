import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const Modal = ({ isOpen, onOpenChange, title, children }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      {/* <Dialog.Trigger asChild>
        <button className="px-4 py-2 text-white bg-blue-500 rounded">Open Modal</button>
      </Dialog.Trigger> */}

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
              <Dialog.Close asChild>
                <button aria-label="Close" className="text-gray-500 hover:text-gray-800">
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
