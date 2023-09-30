import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";


interface Props {
    coreNotes: string | undefined;
    handleSearchNote: () => void
  }

export function SearchBar(props: Props) {
  return (
    <>
      {/* Search Bar */}
      <div className="search_bar">
        <div className="title_img">
          <img src={props.coreNotes} />
          <h1>CoreNotes</h1>
        </div>
        <InputGroup className="group_input">
          <Input
            onChange={props.handleSearchNote}
            className="input"
            placeholder="Pesquise por uma nota"
          />
          <InputRightElement>
            <MagnifyingGlass className="icone" size={20} color="#171716" />
          </InputRightElement>
        </InputGroup>
      </div>
    </>
  );
}
