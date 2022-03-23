import logo from "./logo.svg";
import useFetchDictionary from "./services/useFetchDictionary";
import Dictionary from "./components/Dictionary";

function App() {
  const {
    data: dictionary,
    isPending,
    error,
  } = useFetchDictionary("https://localhost:44323/Dictionary");
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h1>Dictionary</h1>
      {dictionary && <Dictionary dictionary={dictionary} />}
    </div>
  );
}

export default App;
