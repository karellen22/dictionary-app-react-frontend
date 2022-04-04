// import Dictionary from "./components/dictionary/Dictionary";
import { Route, Routes } from "react-router-dom";
import TranslationForm from "./components/translation/TranslationForm";
import Dictionary from "./components/dictionary/Dictionary";
import Navigation from "./components/Navigation";
import "./styles.css";
import DictionaryEntryForm from "./components/editor/DictionaryEntryForm";

function App() {
  return (
    <>
      <Navigation className="navbar" />
      <div style={{ width: "90%", margin: "auto" }}>
        <Routes>
          <Route path="/entry/:id" element={<DictionaryEntryForm />} />
          <Route path="/translator" element={<TranslationForm />} />
          <Route path="/" element={<Dictionary />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
