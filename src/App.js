import logo from './logo.svg';
import './App.css';
import useFetchDictionary from './services/useFetchDictionary'

function App() {
  const {data: dictionary, isPending, error} = useFetchDictionary('https://localhost:44323/Dictionary');
  return (
    <>{dictionary && dictionary.map(dictionaryEntry => dictionaryEntry.hungarian)}</>
  );
}

export default App;
