const all = (req, res) => {
    res.render("index", {
        title: "Bienvenido al nuevo mundo",
        description: "Puedes hacer lo que sea"
    })
}
module.exports = {
    all
}