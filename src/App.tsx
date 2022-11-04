import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
  AppBar,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grow,
  IconButton,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import appTheme from "./theme";
import breizhNumberToLetter from "./breizhNumberToLetter";

function App() {
  const [showResponse, setShowResponse] = useState<boolean>(false);
  const [letters, setLetters] = useState<string>("");
  const [number, setNumber] = useState<number>(-1);
  const [level, setLevel] = useState<number>(0);
  const [exercise, setExercise] = useState<number>(0);
  const [displayAppBar, setDisplayAppBar] = useState<boolean>(false);

  const difficultyLevels = [
    100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000,
    10000000000, 100000000000, 999999999999,
  ];

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <AppBar position="fixed" sx={{ display: "flex", flexDirection: "row" }}>
        <IconButton
          onClick={() => {
            setDisplayAppBar(!displayAppBar);
          }}
          disabled={number > -1}
        >
          <MenuIcon></MenuIcon>
        </IconButton>
        <Collapse in={displayAppBar} sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "1%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    minWidth: "20%",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5">Betek</Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={level}
                    onChange={(event: SelectChangeEvent<{}>) => {
                      setLevel(Number(event.target.value));
                    }}
                    sx={{
                      backgroundColor: "background.default",
                      minWidth: "70%",
                    }}
                    disabled={number > -1}
                  >
                    <MenuItem value={0}>Betek 100</MenuItem>
                    <MenuItem value={1}>Betek 1 000</MenuItem>
                    <MenuItem value={2}>Betek 10 000</MenuItem>
                    <MenuItem value={3}>Betek 100 000</MenuItem>
                    <MenuItem value={4}>Betek 1 000 000</MenuItem>
                    <MenuItem value={5}>Betek 10 000 000</MenuItem>
                    <MenuItem value={6}>Betek 100 000 000</MenuItem>
                    <MenuItem value={7}>Betek 1 000 000 000</MenuItem>
                    <MenuItem value={8}>Betek 10 000 000 000</MenuItem>
                    <MenuItem value={9}>Betek 100 000 000 000</MenuItem>
                    <MenuItem value={10}>Betek 999 999 999 999</MenuItem>
                  </Select>
                </Box>
                <FormControl>
                  <RadioGroup
                    row
                    value={exercise}
                    onChange={(_, value) => {
                      setExercise(Number(value));
                    }}
                  >
                    <FormControlLabel
                      value={0}
                      control={<Radio color="secondary" />}
                      label="Nombres -> Lettres"
                      disabled={number > -1}
                    />
                    <FormControlLabel
                      value={1}
                      control={<Radio color="secondary" />}
                      label="Lettres -> Nombres"
                      disabled={number > -1}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Collapse>
      </AppBar>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {number < 0 && (
          <Button
            onClick={() => {
              const randNumber = Math.floor(
                Math.random() * difficultyLevels[level]
              );
              const result = breizhNumberToLetter(randNumber);
              setLetters(result);
              setNumber(randNumber);
              setDisplayAppBar(false);
            }}
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            <Typography variant="h1">Dibab un niverenn</Typography>
          </Button>
        )}
        {(number > -1 || letters.length > 0) && (
          <Grow in={number > -1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {exercise === 0 ? (
                <Typography
                  variant="h2"
                  sx={{ margin: "5% 0", textAlign: "center" }}
                >
                  {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                </Typography>
              ) : (
                <Typography
                  variant="h2"
                  sx={{ margin: "5% 0", textAlign: "center" }}
                >
                  {letters}
                </Typography>
              )}

              {!showResponse && (
                <Button
                  onClick={() => {
                    setShowResponse(!showResponse);
                  }}
                  variant="contained"
                  color="secondary"
                  sx={{ textTransform: "none" }}
                >
                  <Typography variant="h2">Diskouezh ar respont</Typography>
                </Button>
              )}
            </Box>
          </Grow>
        )}
        {showResponse && (
          <Grow in={showResponse}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper elevation={2} sx={{ padding: "2%", maxWidth: "80%" }}>
                {exercise === 0 ? (
                  <Typography variant="h2" textAlign="center">
                    {letters}
                  </Typography>
                ) : (
                  <Typography
                    variant="h2"
                    sx={{ margin: "5% 0", textAlign: "center" }}
                  >
                    {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  </Typography>
                )}
              </Paper>
              <Button
                onClick={() => {
                  setShowResponse(false);
                  setLetters("");
                  setNumber(-1);
                  setDisplayAppBar(true);
                }}
                variant="contained"
                color="secondary"
                sx={{ marginTop: "5%", textDecoration: "none" }}
              >
                <Typography variant="h2">Recommencer</Typography>
              </Button>
            </Box>
          </Grow>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
