import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { INoteType } from "../types";
import apiService from "../api/apiService";
import {
  Button,
  useDisclosure,
  useToast,
  Text,
  Heading,
  Box,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from "@chakra-ui/react";
import { EditNote } from ".";
import { Star, PencilSimple, X, PaintBucket } from "@phosphor-icons/react";
import { TwitterPicker } from "react-color";
import "../styles/Note.scss";
import { NoteContext } from "../providers/Notes";

type ToastType =
  | "info"
  | "warning"
  | "success"
  | "error"
  | "loading"
  | undefined;

interface NoteProps {
  note: INoteType
}

export function Note({ note }: NoteProps) {
  const { getNotes } = useContext(NoteContext);
  const [editNote, setEditNote] = useState<INoteType>({
    id: note.id,
    title: note.title,
    content: note.content,
    favorite: note.favorite,
    color: note.color,
  });

  //Para o Modal e o Toast
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
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
    setEditNote({
      ...note,
      [name]: value,
    });
  };

  async function updateNote(e: React.SyntheticEvent) {
    e.preventDefault();
    await apiService.update(editNote).then(() => {
      ToastExample("Sucesso", "Nota editada com sucesso", "success");
    });
    getNotes()
  }

  async function deleteNote() {
    await apiService.delete({ id: note.id }).then(() => {
      ToastExample("Sucesso", "Nota deletada com sucesso", "success");
    });
    getNotes()
  }

  async function handleFavorite() {
    await apiService.update({
      id: note.id,
      title: note.title,
      content: note.content,
      favorite: !note.favorite,
      color: note.color,
    });
    getNotes()
  }

 async function handleColor(color) {
    await apiService.update({
      id: note.id,
      title: note.title,
      content: note.content,
      favorite: note.favorite,
      color: color.hex,
    });
    getNotes()
  }

  return (
    <>
      <div>
        <Box className="note" bg={note.color}>
          <Heading
            display="flex"
            alignItems="start"
            justifyContent="space-between"
            className="note_title"
          >
            {note.title}
            <button onClick={handleFavorite}>
              {note.favorite ? (
                <Star size={20} color="#ead653" weight="fill" />
              ) : (
                <Star size={20} color="#21201c" />
              )}
            </button>
          </Heading>
          <Divider className="divider" />

          <Text className="note_text">{note.content}</Text>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pt="6"
            pl="4"
            pb="2"
            pr="1"
          >
            <Box>
              <Button
                onClick={onOpen}
                size="sm"
                colorScheme="orange"
                variant="ghost"
              >
                <PencilSimple size={20} color="#171716" />
              </Button>

              {/* POPOVER */}
              <Popover>
                <PopoverTrigger>
                  <Button size="sm" colorScheme="orange" variant="ghost">
                    <PaintBucket size={20} color="#171716" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <TwitterPicker
                    onChange={handleColor}
                    width="200"
                    triangle="hide"
                  />
                </PopoverContent>
              </Popover>
            </Box>

            <Button
              onClick={deleteNote}
              size="sm"
              colorScheme="yellow"
              variant="ghost"
              ml="2"
            >
              <X size={20} color="#171716" />
            </Button>
          </Box>

          <EditNote
            title={note.title}
            content={note.content}
            favorite={note.favorite}
            id={note.id}
            finalRef={finalRef}
            initialRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
            handleChange={handleChange}
            onSubmit={updateNote}
          />
        </Box>
      </div>
    </>
  );
}
