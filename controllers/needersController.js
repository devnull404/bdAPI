const needersIndex = (req, res) => {
    res.render("needers");
};

const needersAdd = (req, res) => {
    res.render("needersAdd");
};

const needersAddPost = (req, res) => {
    console.log("Adding new needer");
};


module.exports = {
    needersIndex,
    needersAdd,
    needersAddPost
};