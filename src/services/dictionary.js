import axios from "axios";

export const GetDictionary = async (setDictionary) => {
  try {
    const { data } = await axios.get("https://localhost:44323/Dictionary");
    console.log(data);
    setDictionary(data);
  } catch (err) {
    console.log("Error ", err);
  }
};

export const GetTranslation = async (
  translateFrom,
  setTranslation,
  setErrorMessage,
  setShow
) => {
  try {
    // const translation = dictionary.filter(
    //   (dictionaryEntry) => dictionaryEntry.english === translateFrom
    // )[0];
    const translation = await axios.get(
      "https://localhost:44323/Dictionary/English/Hungarian/" + translateFrom
    );
    console.log("translation data: ", translation);
    setTranslation(translation.data);
  } catch (err) {
    console.log("Error ", err);
    setTranslation("");
    setErrorMessage("Word not found in dictionary: " + translateFrom);
    setShow(true);
  }
};
