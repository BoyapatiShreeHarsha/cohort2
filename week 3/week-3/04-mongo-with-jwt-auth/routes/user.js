const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { z } = require('zod');
const { User, Course } = require("../db/index");

const mySchema1 = z.object({
    username: z.string().email(),
    password: z.string().min(4)
});

const mySchema2 = z.object({
    id: z.string().refine((val) => {
        return mongoose.Types.ObjectId.isValid(val);
    }),
});

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    let result = mySchema1.safeParse({
        username,
        password
    });
    if(!result.success){
        res.status(403).json({
            message: "wrong input"
        })
        return;
    }

    // check if the admin is already exists
    let value = await User.findOne({
        username: username,
        password: password
    });

    if (value) {
        return res.status(403).json({
            message: "User already exits"
        });
    }

    await User.create({
        username: username,
        password: password,
        purchasedCourses:[]
    });

    return res.status(200).json({
        message: 'User created successfully'
    });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    let result = mySchema1.safeParse({
        username,
        password
    });
    if(!result.success){
        res.status(403).json({
            message: "wrong input"
        })
        return;
    }

    result = User.findOne({
        username,
        password
    });

    if(!result){
        res.status(404).json({
            message:"User does not exits"
        });
        return;
    }

    let token=jwt.sign(username,jwtPassword);
    res.status(200).json({
        token
    });
    return;
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const responds = await Course.find({});

    res.status(200).json({
        courses: responds
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    // console.log(id);
    const username = req.headers.username;
    const password = req.headers.password;
    // console.log(username);

    const result = await mySchema2.safeParse({ id: id });
   

    if (!result.success) {
        res.status(403).json({
            message: "Invalid responds"
        });
        return;
    }

    let arr = await User.findOneAndUpdate({
        username,
        password
    }, {
        "$push": {
            purchasedCourses:id
        }
    },
    {
        new:"true"
    }
    );

    // console.log(arr);

    res.status(200).json({
        message: 'Course purchased successfully'
    })

    return;
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password = req.headers.password;

    let arr = await User.findOne({
        username,
        password
    });

    // console.log(arr);

    res.status(200).json({
        purchasedCourses: arr?.purchasedCourses
    })
});

router.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        msg: err
    });
});

module.exports = router