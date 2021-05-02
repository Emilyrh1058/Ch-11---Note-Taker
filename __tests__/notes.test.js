const fs = require("fs");
const {
  filterByQuery,
  createNewNote,
  validateNote,
} = require("../lib/notes.js");
const { notes } = require("../Develop/db/db.json");

test("creates an note object", () => {
  const note = createNewNote(
    { title: "Test Title a", text: "Test text",},
    notes
  );

  expect(note.title).toBe("Test Title a");
  expect(note.text).toBe("Test text");
  expect(note.id).toBe("");

});

test("filters by query", () => {
  const startingNotes = [
    {
      id: "3",
      title: "Salem",
      text: "is so beautiful",
    },
  ];

  const updatedNotes = filterByQuery({ title: "Salem" }, startingNotes);

  expect(updatedNotes.length).toEqual(1);
});

