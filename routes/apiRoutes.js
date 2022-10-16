const router = require('express').Router();
const notes = require('../db/db.json');
const uuid = require('uuid');
const { request } = require('express');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes',(req, res) => {
  const newTitle = req.body.title;
  const newText = req.body.text;
  if (newTitle || newText) {
    const newNote = {
      title: newTitle,
      text: newText,
      id: uuid.v4(),
    }
    notes.push(newNote);
    res.json(notes);
  } else {
    res.status(400).json('need title and text inputs to contain something');
  };
});

router.delete('/notes/:id', (req, res) => {
deleteNote(notes, req.params.id);
  res.json(notes);
});

module.exports = router;