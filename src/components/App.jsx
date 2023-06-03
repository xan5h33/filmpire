import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { Main, Toolbar, Root } from "./styles";

import { Actors, MovieInformation, Movies, NavBar, Profile } from "./";

const App = () => {
  return (
    <Root>
      <CssBaseline />
      <NavBar />
      <Main>
        <Toolbar />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </Main>
    </Root>
  );
};

export default App;
