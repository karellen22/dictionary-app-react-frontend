import Dictionary from "./components/dictionary/Dictionary";
import TranslationForm from "./components/TranslationForm";

function App() {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h1>Translator</h1>
      <TranslationForm />
      <h1>Dictionary</h1>
      <Dictionary />
    </div>
  );
}

export default App;
