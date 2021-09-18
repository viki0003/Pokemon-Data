import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import SearchPokeData from "./SearchPoke";
import "./styles.css";

const App = () => {
  const [name, setName] = useState("");
  const [uname, setUName] = useState();
  const inputEvent = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const SearchPoke = () => {
    setUName(name);
    setName("");
  };
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          <h1>POKEDATA</h1>
          <h3>Search Your Pokemon</h3>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "40ch" }
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Enter Pokemon Name"
                defaultValue="Pikachu"
                onChange={inputEvent}
                value={name}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon onClick={SearchPoke} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <SearchPokeData pokeName={uname} />
            </div>
          </Box>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default App;
