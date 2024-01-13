const { Router } = require("express");
const { Note } = require("../db");
const { notesMiddleware , idMiddleware}  = require("../middleware/note");
const router = Router();

// Notes Routes
//create
router.post('/addnote', notesMiddleware, async (req, res) => {

    try {
        const title = req.body.title;
        const description = req.body.description;
        const done = false;

        let result = await Note.create({
            title,
            description,
            done
        });

        // console.log(result);

        res.status(200).json({
            messsage: result._id,
            success:true
        });
        return;
    } catch (error) {
        // console.log(error);
        res.status(500).json({
            messsage:error,
            success:false
        })
    }
});

//update
router.put('/updatenote', idMiddleware,async(req, res) => {

    try {
        const _id = req.body._id;

        let result = await  Note.findByIdAndUpdate(_id,req.body,{new:true});
        // console.log(result);

        res.status(200).json({
            messsage: result._id,
            success:true
        });
        return;
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            messsage:error,
            success:false
        })
    }

});

//read
router.get('/getnotes', async (req, res) => {
    
    try {
        
        const result = await Note.find({});

        res.status(200).json({
            messsage: result,
            success:true
        });
        return;

    } catch (error) {
        res.status(500).json({
            messsage:error,
            success:false
        })
    }

});

//delete
router.post('/deletenote', idMiddleware,async (req, res) => {
    try {
        const _id = req.body._id;

        let result = await Note.findByIdAndDelete(_id);

        res.status(200).json({
            messsage: result,
            success:true
        });
        return;

    } catch (error) {
        res.status(500).json({
            messsage:error,
            success:false
        })
    }
});


module.exports = router;