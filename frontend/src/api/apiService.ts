import { API } from ".";

interface CreateNoteProps {
  title: string;
  content: string;
  favorite: boolean;
}

interface DeleteNoteProps {
  id: string;
}

interface UpdateNoteProps {
  id: string;
  title: string;
  content: string;
  favorite: boolean;
  color: string;
}

export default {
  list: () => API.get("notes").then((response) => response.data),
  create: ({ title, content, favorite }: CreateNoteProps) =>
    API.post("notes", { title, content, favorite, color: "#ffffff" }).then( (response) => response),
  delete: ({ id }: DeleteNoteProps) =>
    API.delete(`notes/${id}`).then((response) => response),
  update: ({ id, title, content, favorite, color }: UpdateNoteProps) =>
    API.put(`notes/${id}`, { title, content, favorite, color }).then(
      (response) => response
    ),
};
