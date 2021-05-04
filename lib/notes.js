const fs = require("fs");
const path = require("path");


function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  console.log("query", query)
  if (query) {
    filteredResults = filteredResults.filter((note) => note.id !== query);
  }
  return filteredResults;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../Develop/db/db.json"),
    JSON.stringify(notesArray),
  );
  return note;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}

function deleteNote(newNotesArray) {
  fs.writeFileSync(
    path.join(__dirname, "../Develop/db/db.json"),
    JSON.stringify(newNotesArray),
  );
  return newNotesArray;
}

module.exports = {
  filterByQuery,
  createNewNote,
  validateNote,
  deleteNote,
};
