import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Box, styled } from "@mui/material";

const InputWrap = styled(Box)({
  display: "flex",
  alignItems: "center",
  "&:focus": {
    boxShadow: "0 0 5px #ccc",
    opacity: "1 !important",
  },
});

const Input = styled("input")({
  outline: "none",
  fontSize: "0.97em",
  border: "1px solid #ddd",
  color: "#333",
  padding: "0.55em 0.75em",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)",
  flex: 1,
});

const SearchButton = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  backgroundColor: "#efa697",
  
});

function Search() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <InputWrap>
      <Input
        type="text"
        placeholder="Tìm kiếm ..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <SearchButton>
        <SearchOutlinedIcon style={{ padding: "7px 7px", height:"41.5px", width: "40px", color: "#ffff  " }} />
      </SearchButton>
    </InputWrap>
  );
}

export default Search;
