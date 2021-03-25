// Importing donors DB Model based on our schema.
const Donor = require("../models/donorsModel");

// Middleware controller for render GET method on /donors/.
const donorsGet = (req, res) => {
    Donor.find()
        .then((result) => {
            res.render("donorsGet", {title: "Current Donors", main: result})
        })
        .catch((err) => {
            console.log(err);
        });
    };

// Middleware controller for POST request made over /donors/add getting form parameters.
const donorsAddPost = (req, res) => {
    console.log(req.body)
    let name = req.body.name;
    let lastname = req.body.lastname;
    console.log(`${req.body}`);
    res.render("donorsAdd");
};

// Middleware controller for render on GET method over /donors/add retreiving a form window.
const donorsAdd = (req, res) => {
/*     const donor = new Donor({
        name: req.body.name,
        lastname: req.body.lastname,
        curp: req.body.curp,
        mCertificate: req.body.mCertificate,
        age: +req.body.age,
        email: req.body.email,
        gender: req.body.gender,
        bloodType: req.body.bloodType,
        status: req.body.status
    });
    donor.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        }); */
        res.render("donorsAdd");
};

// Middleware controller set to edit database entrys. Pending!!!
const donorsPut = (req, res) => {
    res.send(`Hi, ${req.method}`);
};

// Middleware controller to delete a DB entrys. Pending!!!
const donorsDelete = (req, res) => {
    res.send(`Hi, ${req.method}`);
};

// Middleware cotroller for GET request method over /donors/ retrieving a index or  main page for that section.
const donorsIndex = (req, res) => {
    res.render("donors", {title: "Donors", message: "Hi there, guys!"});
}

// Exporting all controllers in order to being used away.
module.exports = {
    donorsGet,
    donorsAddPost,
    donorsAdd,
    donorsPut,
    donorsDelete,
    donorsIndex
};