const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db/index");
const { z } = require('zod');

const mySchema1 = z.object({
    username: z.string().email(),
    password: z.string().min(4)
});

const mySchema2 = z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    imageLink: z.string()
})

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    let result = mySchema1.safeParse({
        username,
        password
    });

    if (!result.success) {
        res.status(403).json({
            message: "Invalid responds"
        });
    }

    // check if the admin is already exists
    let value = await Admin.findOne({
        username: username,
        password: password
    });

    if (value) {
        return res.status(403).json({
            message: "Admin already exits"
        });
    }

    await Admin.create({
        username: username,
        password: password
    });

    return res.status(200).json({
        message: 'Admin created successfully'
    });


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    let result = mySchema2.safeParse({
        title,
        description,
        price,
        imageLink
    });

    if (!result.success) {
        return res.status(403).json({
            message: "Invalid responds"
        });
    }

    const instance = new Course();
    instance.title = title;
    instance.description = description;
    instance.price = price;
    instance.imageLink = imageLink;

    const id = instance._id;

    await instance.save();


    return res.status(200).json({
        message: 'Course created successfully',
        courseId: `${id}`
    });




});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const responds = await Course.find({});

    res.status(200).json({
        courses: responds
    })

});

router.use((err, req, res, next) => {
    res.status(500).json({
        msg: err
    });
});

module.exports = router;