const { models } = require('../database/connectDb')
const Sequelize = require('sequelize')

export const getListings = (req, res) => {
  if (req.body.searchQuery && req.body.category) {
    const categoryName = req.body.category
    models.category
      .findOne({
        where: {
          name: categoryName,
        },
      })
      .then((category) => {
        return category.id
      })
      .then((categoryId) => {
        return models.listing.findAll({
          where: {
            title: { [Sequelize.Op.substring]: req.body.searchQuery },
            categoryId,
          },
        })
      })
      .then((listings) => {
        res.send({
          data: listings,
          errors: null,
        })
      })
      .catch((e) => {
        res.send({
          data: null,
          errors: ['Error fetching listing of specified category'],
        })
      })
    return
  }

  if (req.body.category) {
    const categoryName = req.body.category
    models.category
      .findOne({
        where: {
          name: categoryName,
        },
      })
      .then((category) => {
        return category.id
      })
      .then((categoryId) => {
        return models.listing.findAll({ where: { categoryId: categoryId } })
      })
      .then((listings) => {
        res.send({
          data: listings,
          errors: null,
        })
      })
      .catch((e) => {
        res.send({
          data: null,
          errors: ['Error fetching listing of specified category'],
        })
      })
    return
  }

  // get all listings
  models.listing
    .findAll()
    .then((listings) => {
      res.send({
        data: listings,
        errors: null,
      })
    })
    .catch((e) => {
      res.send({
        data: null,
        errors: ['Error fetching all listings'],
      })
    })

  return
}
