import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, TextField } from "@mui/material";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        padding: "12px 0",
        marginLeft: "12px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        type="text"
        placeholder="Nhập từ khoá"
        name="keyword"
        size="small"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        color="success"
      />
      <IconButton type="submit" sx={{ color: "rgb(94, 53, 177)" }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Search;
