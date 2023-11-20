export const SET_LETTERS = "SET_LETTERS";
export const ADD_LETTER = "ADD_LETTER";

export const setLetters = (letters) => ({
  type: SET_LETTERS,
  paylord: letters,
});

export const addLetter = (letter) => ({
  type: ADD_LETTER,
  paylord: letter,
});
