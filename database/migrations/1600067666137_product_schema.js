'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  async up () {
    const exists = await this.hasTable('products')
    if(!exists){
      this.createTable('products', table => {
        table.increments('id') //auto increment PRIMARY KEY 
        table.string('name', 255); //equals to VARCHAR(255) 
        table
        .decimal('price', [10, 2]) //equals to DECIMAL(10,2) .unsigned()
        .notNullable()
        .defaultTo(0)
        table.datetime('created_datetime') //equals to DATETIME
        table.datetime('updated_datetime') //equals to DATETIME 
      })
    }
  }

  async down () {
    const exists = await this.hasTable('products')
    if(exists){
      this.drop('products')
    }
  }
}

module.exports = ProductSchema
