'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const Moment = use('moment')

class ProductSeeder {
  async run () {
    await Database.truncate('products')
    await Database.from('products').insert({
      name: 'Apple Mac Pro Stand',
      price: '999',
      created_datetime: Moment().format('YYYY-MM-DD HH:mm:ss')
    })
    await Database.from('products').insert({
      name: 'Apple Macbook Pro 2019',
      price: '1999',
      created_datetime: Moment().format('YYYY-MM-DD HH:mm:ss')
    })
  }
}

module.exports = ProductSeeder
