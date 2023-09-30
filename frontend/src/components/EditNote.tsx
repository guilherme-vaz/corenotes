/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ChangeEventHandler, FormEventHandler } from "react";
import { NoteForm } from "./NoteForm";

interface Props {
  id: string;
  title: string;
  content: string;
  favorite: boolean;
  initialRef: React.RefObject<FocusableElement>;
  finalRef: React.RefObject<FocusableElement>;
  isOpen: boolean;
  onClose: any;
  onSubmit: FormEventHandler<HTMLElement>;
  handleChange: ChangeEventHandler<HTMLElement>;
}

export function EditNote(props: Props) {
  return (
    <Modal
      initialFocusRef={props.initialRef}
      isOpen={props.isOpen}
      finalFocusRef={props.finalRef}
      onClose={props.onClose}
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Editar nota</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Input type={"hidden"} value={props.id}></Input>
          <NoteForm
            title={props.title}
            content={props.content}
            favorite={props.favorite}
            handleChange={props.handleChange}
            onClose={props.onClose}
            id={props.id}
            onSubmit={props.onSubmit}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
    
  );
}
