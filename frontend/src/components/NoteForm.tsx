import {
  Input,
  FormControl,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { ChangeEventHandler, FormEventHandler } from "react";
import "../styles/NoteForm.scss";
// import { Star } from "@phosphor-icons/react";

interface Props {
  id: string;
  title: string;
  content: string;
  favorite: boolean;
  onClose: unknown;
  onSubmit: FormEventHandler<HTMLElement>;
  handleChange: ChangeEventHandler<HTMLElement>;
  // handleFavorite: () => void;
}

export function NoteForm(props: Props) {
  return (
    <div className="form_container">
      <FormControl className="form_control_title" isRequired>
        <Input
          placeholder="Escreva um título aqui"
          type="text"
          name="title"
          defaultValue={props.title}
          onChange={props.handleChange}
          className="title_input"
        />
        {/* <button onClick={props.handleFavorite}>
          {props.favorite ? <Star size={20} color="#21201c" /> : <Star size={20} color="#21201c" />}
        </button> */}
      </FormControl>

      <FormControl>
        <Textarea
          placeholder="Comece a escrever sua nota!"
          name="content"
          defaultValue={props.content}
          onChange={props.handleChange}
          className="textarea"
        />
      </FormControl>
      <Button onClick={props.onSubmit} className="button button_save" size="sm">
        Salvar
      </Button>
    </div>
  );
}
