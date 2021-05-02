const { query } = require('express');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require('./Develop/db/db.json');




function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  if (query.id) {
    filteredResults = filteredResults.filter(note => note.id === query.id);
  }
  if (query.title) {
    filteredResults = filteredResults.filter(note => note.title === query.title);
  }
  if (query.text) {
    filteredResults = filteredResults.filter(note => note.text === query.text);
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

app.get('/api/notes/:1d', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.sendStatus(404);
  }  
  res.json(404);
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});