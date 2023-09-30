import { useContext } from "react";
import { NoteContext } from "../providers/Notes";
import { Box } from "@chakra-ui/react";
import { Note } from ".";


export function NotesList() {
  const { notes } = useContext(NoteContext);

  const favoriteNotes = notes.filter((note) => note.favorite);
  const otherNotes = notes.filter((note) => !note.favorite);

  return (
    <div>
      {favoriteNotes.length > 0 && (
        <Box>
          <h1 className="title title_fav">FAVORITAS</h1>
          <Box className="notes_container">
            {favoriteNotes?.map((note) => {
              return (
                <Note
                  note={note}
                />
              );
            })}
          </Box>
        </Box>
      )}

      {otherNotes.length > 0 && (
        <Box>
          <h1 className="title">OUTRAS</h1>
          <Box className="notes_container">
            {otherNotes.map((note) => {
              return (
                <Note
                  note={note}
                />
              );
            })}
          </Box>
        </Box>
      )}
    </div>
  );
}
