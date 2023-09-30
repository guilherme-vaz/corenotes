/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useContext, ChangeEvent } from "react";
import { NoteContext } from "../providers/Notes";
import "../styles/Reset.scss";
import "../styles/Home.scss";
import coreNotes from "../assets/imgs/notes.png";
import { Note, CreateNote, NotesList, SearchBar } from ".";
import { Box } from "@chakra-ui/react";

function Home() {
  const { notes, getNotes } = useContext(NoteContext);
  const [searchNote, setSearchNote] = useState("");
  const handleSearchNote = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchNote(event.target.value);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <SearchBar coreNotes={coreNotes} handleSearchNote={handleSearchNote} />

      <div className="container">
        <CreateNote />

        {searchNote ? (
          <Box>
            <h1 className="title title_fav">ENCONTRADAS</h1>
            <Box className="notes_container">
              {notes
                ?.filter(
                  (note) =>
                    note.title.toLocaleLowerCase().includes(searchNote) ||
                    note.content.toLocaleLowerCase().includes(searchNote)
                )
                .map((note) => {
                  return (
                    <>
                      <Note note={note} />
                    </>
                  );
                })}
            </Box>
          </Box>
        ) : (
          <div>
            <NotesList />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
