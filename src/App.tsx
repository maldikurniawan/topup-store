import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, NotFound } from "./components";
import { DetailTopUp } from "./pages";

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/topup/:code" element={<DetailTopUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}