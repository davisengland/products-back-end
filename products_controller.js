module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body

        db.create_product([name, description, price, image_url])
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Error: Something went wrong"});
                console.log(err)
              })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.read_product(id)
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Error: Something went wrong"});
                console.log(err)
            })
    },
    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_products()
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Error: Something went wrong"});
                console.log(err)
            })
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const { desc } = req.query
        const { id } = req.params

        db.update_product([id, desc])
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Error: Something went wrong"});
                console.log(err)
            })
    },
    delete: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params

        db.delete_product(id)
            .then(dbRes => {
                res.status(200).send(dbRes)
            })
            .catch(err => {
                res.status(500).send({errorMessage: "Error: Something went wrong"});
                console.log(err)
            })
    }
}