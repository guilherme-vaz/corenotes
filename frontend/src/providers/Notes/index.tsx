import { ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
import { INoteType } from "../../types";
import apiService from "../../api/apiService";

interface NotesContextType {
  notes: INoteType[];
  getNotes: () => void;
}

export const NoteContext = createContext({} as NotesContextType);

interface NotesContextProviderProps {
  children: ReactNode;
}

export function NotesContextProvider({ children }: NotesContextProviderProps) {
  const [notes, setNotes] = useState<INoteType[]>([]);
  async function getNotes() {
    try {
      const newNotes: INoteType[] = await apiService.list();

      setNotes(newNotes);
    } catch (error) {
      console.log(error);
    }
  }
  
  

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NoteContext.Provider value={{ notes, getNotes }}>
      {children}
    </NoteContext.Provider>
  );
}
