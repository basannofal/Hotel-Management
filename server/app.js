const express = require('express');
const app = express();
const mongoose = require('mongoose');
const getschema = require('./database/schema')
const path = require('path')
const multer = require('multer')
const port = process.env.PORT || 8000;
const bodyparser = require('body-parser');
const cors = require('cors')
const fs = require('fs');
const FormData = require('form-data');
const { $where } = require('./database/schema');
app.use(express.json())
app.use(cors());


app.use(express.static(__dirname + '/server/uploads'));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


const db = 'mongodb+srv://hotel:hotel@cluster0.l2a1p.mongodb.net/hotel?retryWrites=true&w=majority'

mongoose.connect(db).then(() => {
    console.log("db connected");
}).catch((err) => {
    console.log(err);
})




// multer using 

const Storage = multer.diskStorage({
    destination: "../client/src/uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: Storage
});



app.get('/', (req, res) => {
    res.send('hello')
})



// ********************** RAGISTER DATA ****************************


app.post('/ragister', async (req, res) => {
    const { hname, honame, mobile, address, email, psw, foodtype } = req.body;

    try {
        const userexist = await getschema.findOne({ email: email })

        if (userexist) {
            return res.status(400).json({ error: ' email already exists' })
        } else {
            const user = new getschema({ hname, honame, mobile, address, email, psw, foodtype })

            await user.save();
            res.json({ message: "user Ragistrate Successfully" })
        }
    } catch (error) {
        console.log(error);
    }

})



//***************************** LOGIN ***********************************8 */

app.post('/login', async (req, res) => {
    try {
        const { email, psw } = req.body;

        const userava = await getschema.findOne({ email: email });

        if (userava) {
            if (userava.psw === psw) {
                res.json(userava)
            }
            else {

                res.status(400).json("invalid");
            }
        }
        else {
            res.status(400).json("invalid email")
        }
    } catch (error) {
        console.log(error);
    }
})




//***************************** GET DATA **************************************** */

app.get('/getdata', async (req, res) => {
    try {
        const userdata = await getschema.find();
        res.status(201).json(userdata);
    } catch (error) {
        res.send(error)
    }

})



// ************************** GET DATA FOR PERTICULER USER ********************************


app.get('/getuser/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const peruserdata = await getschema.findById(id);
        res.status(201).json(peruserdata);
    } catch (error) {
        res.send(error)
    }

})





//************************************ UPDATE DATA ********************************* */


app.patch('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const updateuser = await getschema.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(201).json(updateuser);
    } catch (error) {
        res.send(error)
    }

})




// ************************** DELETE DATA *******************************


app.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deleteuser = await getschema.findByIdAndDelete({ _id: id });
        res.status(201).json(deleteuser);
    } catch (error) {
        res.send(error)
    }

})





/// *************************Default ADD MENU ARRAY **************************************


app.patch('/addmenu/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            addmenu:
            {
                dishname: req.body.dishname,
                prize: req.body.prize,
                dishcategory: req.body.dishcategory
            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})




//*******************************************Default DELETE ADD MENU DATA *********************************** */



app.get('/addmenudelete/:id/:objectid', async (req, res) => {

    const id = req.params.id;

    const objectid = req.params.objectid

    const idst = id.toString();
    // console.log(objectid);
    const dbby = await getschema.find({ _id: objectid })
    // console.log(dbby);

    getschema.findByIdAndUpdate(dbby, {

        $pull: {
            addmenu: {

                "_id": idst

            }


        }

    }, { new: true })
        .then(data => {
            if (!data) {

                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);

        })
})



// ********************* hotel image upload *************************************



app.post('/imageedit/:id', upload.single('himage'), async (req, res) => {


    const id = req.body.id;
    const profilepic = {};
    if (req.file) profilepic.himage = req.file.filename


    getschema.findById(req.params.id, function (err, employee) {
        if (!employee)
            // res.status(404).send("data is not found");
            console.log('notfound');
        else {
            employee.himage = req.file.filename;


            employee.save().then(emp => {
                res.status(201).json(emp)
                // res.json('Employee Updated Successfully');
                console.log(emp);
            })
                .catch(err => {
                    // res.status(400).send("Unable To Update Employee");
                    console.log(err);
                });
        }
    })
})


// ************************************** multiple submenu  menu ****************************************

app.patch('/mainmenu/:id', async (req, res) => {

    const id = req.params.id;
    console.log(id);
    console.log(req.body.aname);

    getschema.findByIdAndUpdate(id, {
        $push: {
            mainmenu:
            {

                arrname: req.body.aname

            }

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})



// ************************************** About waste page multiple submenu menu ****************************************


app.patch('/submenu/:id', (req, res) => {

    const id = req.params.id;
    console.log(id);

    getschema.findByIdAndUpdate(id, {
        $push: {
            submenuarr:
            {
                dishname: req.body.dishname,
                prize: req.body.prize,
                dishcategory: req.body.dishcategory
            },

        }

    })
        .then(data => {

            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})



// ********************************************* add submenu item menu ************************************

app.patch('/addsubmenu/:id/:mainid', async (req, res) => {

    const mainid = req.params.mainid
    console.log(mainid);
    const id = req.params.id;
    console.log(id);


    getschema.findOneAndUpdate({ "_id": mainid, "mainmenu._id": id }, {

        $push: {
            "mainmenu.$.submenuarray": {
                dishname1: req.body.dishname1,
                prize1 : req.body.prize1,
                dishcategory1 : req.body.dishcategory1
            }
        }
    }).then(data => {
            console.log(data);
            res.status(201).json(data);

        }).catch(err => {
            console.log(err);
        })
})



// **************************************Perticulare submenu delete **********************************************


app.get('/submenudelete/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid
    const id_in_string = id.toString();
 
    getschema.findOneAndUpdate({_id : objectid, "mainmenu._id": id }, {

        $pull: {
            "mainmenu": {

                '_id'  : id_in_string
            }
        }
    }, { new: true })
        .then(data => {
            if (!data) {
                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);
        })
})


// ******************************************** sub menu array item Delete *******************************




app.get('/submenuarrdelete/:id/:objectid', async (req, res) => {

    const id = req.params.id;
    const objectid = req.params.objectid
    const id_in_string = id.toString();
 
    getschema.findOneAndUpdate({_id : objectid, "mainmenu.submenuarray._id": id }, {

        $pull: {
            "mainmenu.$.submenuarray": {

                '_id'  : id_in_string
            }
        }
    }, { new: true })
        .then(data => {
            if (!data) {
                console.log('something went wrong');
            } else {
                res.status(201).json(data)
            }
        }).catch(err => {
            console.log(err);
        })
})



app.listen(port, () => {
    console.log('server created');
})