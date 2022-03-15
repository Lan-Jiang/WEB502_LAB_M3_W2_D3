const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', function(req, res) {
    res.render('form', { title: 'Registration form' });
});

// router.post ('/', 
//     [
//     check('name')
//         .isLength({ min:1 })
//         .withMessage ('Please enter a name'),
//     check('email')
//         .isLength({ min:1 })
//         .withMessage('Please enter an email'),
//     ],
//     function(req,res) {
//     // console.log(req.body);
//     const errors = validationResult(req);
//     if (errors.isEmpty()) {
//         // res.send('Thank you for your registration!');
//         const registration = new Registration(req.body);
//         registration.save()
//         .then(() => {res.send('Thank you for your registration!');})
//         .catch((err) => {
//             console.log(err);
//             res.send('Sorry! Something went wrong.');
//         });
//     } else {
//         res.render('form', { 
//             title: 'Registration form',
//             errors: errors.array(),
//             data: req.body,
//         });
//     }
    
// });
router.post('/', 
    [
    check('name')
        .isLength({ min: 1 })
        .withMessage('Please enter a name'),
    check('email')
        .isLength({ min: 1})
        .withMessage('Please enter an email'),
    ],
    function(req, res) {
        console.log(req.body);
        // const errors = validationResult(req);
        // if (errors.isEmpty()) {
        //     res.send('Thank you for your registration!');
        // } else {
        //     res.render('form', {
        //         title: 'Registration form',
        //         errors: errors.array(),
        //         data:req.body,
        //     });
        // }
        res.render('form', { title: 'Registration form' });
        //console.log(req.body);
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            res.send('Thank you for your registration!');
        } else {
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data:req.body,
            });
        }
        // res.render('form', { title: 'Registration form' });

        });

module.exports = router;
// module.exports = router;
