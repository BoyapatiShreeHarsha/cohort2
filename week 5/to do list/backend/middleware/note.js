// Middleware for checking notes
const { z } = require("zod");
const ObjectId = require('mongoose').Types.ObjectId;

const mySchema = z.object(
    {
        title: z.coerce.string().min(1),
        description: z.coerce.string()
    }
)



function notesMiddleware(req, res, next) {
    try {
        let result = mySchema.safeParse(req.body);
        if(!result.success){
            res.status(403).json({
                message:"wrong input"
            })
            return;
        }

        next();
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}

function idMiddleware(req, res, next){
    try {
    
        const id = req.body._id;
        if(ObjectId.isValid(id)){
            if((String)(new ObjectId(id)) === id)
                {
                    next();   
                    return;
                }     
            
        }
        
        res.status(403).json({
            message:"wrong id"
        })
        return;
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}

module.exports = {
    notesMiddleware,
    idMiddleware
}