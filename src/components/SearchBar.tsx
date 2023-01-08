import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        border: "1px solide #e3e3e#",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input type="text" className="search-bar" placeholder="Search..." />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
