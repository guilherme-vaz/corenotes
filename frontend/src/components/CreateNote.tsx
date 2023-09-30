import { useState, useContext } from "react";
import { NoteForm } from "./NoteForm";
import { useToast } from "@chakra-ui/react";
import "../styles/CreateNote.scss";
import { INoteType } from "../types";
import { NoteContext } from "../providers/Notes";
import apiService from "../api/apiService";

type ToastType =
  | "info"
  | "warning"
  | "success"
  | "error"
  | "loading"
  | undefined;

export function CreateNote() {
  const { getNotes } = useContext(NoteContext);
  const [note, setNote] = useState<INoteType>({
    id: "",
    title: "",
    content: "",
    favorite: false,
    color: "",
  });

  const toast = useToast();
  function ToastExample(title: string, des: string, type: ToastType) {
    return toast({
      title: title,
      description: des,
      status: type,
      duration: 3000,
      isClosable: true,
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const addNote = async () => {
    await apiService
      .create(note)
      .then(() => {
        ToastExample("Sucesso", "Nota criada com sucesso", "success");
      })
      .catch((err) => {
        console.log("Algo deu errado ao adicionar uma nota :(" + err);
      });
    getNotes();
  };


  return (
    <div className="create_note_container">
      <NoteForm
        handleChange={handleChange}
        onSubmit={addNote}
        content=""
        favorite
        id=""
        onClose={""}
        title=""
      />
    </div>
  );
}
