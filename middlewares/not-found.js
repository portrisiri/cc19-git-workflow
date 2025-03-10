module.exports = (req, res) => {
    console.log('NOTFOUNDDDD')
    res.status(404).json({ message: "Service not found" })
}