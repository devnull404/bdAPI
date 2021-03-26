const needersIndex = (req, res) => {
    res.render("needers");
};

const needersAdd = (req, res) => {
    res.render("needersAdd");
};

const needersAddPost = (req, res) => {
    console.log("Adding new needer");
};

const needersSearch = (req, res) => {
    console.log("Request to search needer");
    res.render("needersSearch");
}

module.exports = {
    needersIndex,
    needersAdd,
    needersAddPost,
    needersSearch
};