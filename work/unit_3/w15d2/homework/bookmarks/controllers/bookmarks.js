const express = require('express');
const router = express.Router();

//model//
const Bookmarks = require('../models/bookmarks.js');


//index route//
router.get('/', (req, res)=>{
    Bookmarks.find({}, (err, foundBookmarks)=>{
        res.json(foundBookmarks);
    });
});


//create route//
router.post('/', (req, res)=>{
    Bookmarks.create(req.body, (err, createdBookmark)=>{
        res.json(createdBookmark); //.json() will send proper headers in response so client knows it's json coming back
    });
});

//delete route//

router.delete('/:id', (req, res)=>{
    Bookmarks.findByIdAndRemove(req.params.id, (err, deletedBookmark)=>{
        res.json(deletedBookmark);
    });
});


module.exports = router;

