import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, NotFound } from "./components";
import { DetailGame } from "./pages";

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/game/:code" element={<DetailGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}