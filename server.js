const { query } = require('express');
const express = require('express');
const app = express();
const { notes } = require('./Develop/db/db.json');




function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  if (query.id) {
    filteredResults = filteredResults.filter(notes => notes.id === query.id);
  }
  if (query.species) {
    filteredResults = filteredResults.filter(notes => notes.title === query.title);
  }
  if (query.name) {
    filteredResults = filteredResults.filter(notes => notes.text === query.text);
  }
  return filteredResults;
}

app.get('/api/notes', (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, notes);
  }
  res.json(results);
});

app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});