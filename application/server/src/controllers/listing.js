const { models } = require('../database/connectDb')
const Sequelize = require('sequelize')

export const getListings = (req, res) => {
  const category = req.query.category

  // search with a query
  if (req.query.searchQuery) {
    const search = req.query.searchQuery
    // search with JUST a query.
    if (category === 'all') {
      models.listing
        .findAll({
          where: {
            title: { [Sequelize.Op.substring]: search },
          },
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
            errors: [
              `Error finding listings with the search parameter of: ${search}`,
            ],
          })
        })
      return
    }

    let categoryId
    // search with query and category selected
    models.category
      .findOne({
        where: {
          name: category,
        },
      })
      .then((category) => {
        categoryId = category.id
        return models.listing.findAll({
          where: {
            title: { [Sequelize.Op.substring]: req.query.searchQuery },
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

  // search with just a category
  if(category === 'all') {
    models.listing
    .findAll()
    .then((listings) => {
      res.send({
        data: listings,
        errors: null,
      })
    })
    .catch((e) => {
      console.log(e)
      res.send({
        data: null,
        errors: ['Error fetching all listings'],
      })
    })
    return
  } else {
    models.category
      .findOne({
        where: {
          name: category,
        },
      })
      .then((category) => {
        return category.id
      })
      .then((categoryId) => {
        return models.listing.findAll({ where: { categoryId } })
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
          errors: [`Error fetching all listings of category: ${category}`],
        })
      })
    return
  }
}