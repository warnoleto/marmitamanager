const { Category } = require('../models')

module.exports = {
  async create (req, res) {
    try {
      const category = await Category.create(req.body)
      const categoryJson = category.toJSON()
      res.send({category: categoryJson})
    } catch (err) {
      res.status(400).send({
        error: 'There was an error trying to create the Category!'
      })
    }
  },

  async update (req, res) {
    const id = parseInt(req.params.id)
    try {
      const arrResult = await Category.update({
        description: req.body.description,
        position: req.body.position,
        maxAllowed: req.body.maxAllowed
      }, {
        where: {id: id}
      })

      if (arrResult[0] === 0) {
        res.status(404).send({
          error: 'Category not found!'
        })
      } else {
        const category = await Category.findById(id)
        res.send({category: category.toJSON()})
      }
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'There was an error trying to udpate the Category!'
      })
    }
  },

  async findAll (req, res) {
    try {
      const listdata = await Category.findAll({
        orderBy: 'position'
      })
      res.send({list: listdata})
    } catch (err) {
      res.status(400).send({
        error: `Can't list all the categories`
      })
    }
  },

  async delete (req, res) {
    const id = parseInt(req.params.id)
    try {
      const category = await Category.findById(id)

      if (category) {
        const deleted = await category.destroy()
        res.send({
          category: deleted.toJSON(),
          deleted: true
        })
      } else {
        res.status(404).send({
          error: 'Category not found'
        })
      }
    } catch (err) {
      res.status(400).send({
        error: `Can't delete the cathegory!`
      })
    }
  },

  async findById (req, res) {
    const id = parseInt(req.params.id)
    try {
      const category = await Category.findById(id)
      if (category) {
        res.send({
          category: category.toJSON()
        })
      } else {
        res.status(404).send({
          error: 'Category not found'
        })
      }
    } catch (err) {
      res.status(400).send({
        error: `Can't load the category!`
      })
    }
  }

}