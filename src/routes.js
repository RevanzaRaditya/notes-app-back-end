const {
    addNoteHandler,
    getALLNotesHandler,
    getNoteByIdHandler,
    editNotesByIdHandler,
    deleteNoteByIdHandler,
  } = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getALLNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNotesByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
      },
  ]; 
   
  module.exports = routes;