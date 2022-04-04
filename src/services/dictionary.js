import axios from "axios";

export const GetDictionary = async (setDictionary) => {
  try {
    const { data } = await axios.get("https://localhost:44323/Dictionary");
    setDictionary(data);
  } catch (err) {
    console.log("Error ", err);
  }
};

export const GetDictionaryEntry = async (guid, setDictionaryEntry) => {
  try {
    const { data } = await axios.get(
      "https://localhost:44323/Dictionary/entry?guid=" + guid
    );
    setDictionaryEntry(data);
  } catch (err) {
    console.log("Error", err);
  }
};

export const EditDictionaryEntry = async (
  dictionaryEntry,
  setDictionaryEntry
) => {
  try {
    const { data } = await axios.put(
      "https://localhost:44323/Dictionary/entry",
      dictionaryEntry
    );
    setDictionaryEntry(data);
  } catch (err) {
    console.log("Error", err);
  }
};

export const GetTranslation = async (
  translateFrom,
  setTranslation,
  setErrorMessage,
  setShow
) => {
  try {
    const translation = await axios.get(
      "https://localhost:44323/Dictionary/English/Hungarian/" + translateFrom
    );
    setTranslation(translation.data);
  } catch (err) {
    console.log("Error ", err);
    setTranslation("");
    setErrorMessage("Word not found in dictionary: " + translateFrom);
    setShow(true);
  }
};
