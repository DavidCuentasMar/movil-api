"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfessorSchema extends Schema {
  up() {
    this.create("professors", table => {
      table.increments();
      table.string("db_id").notNullable();
      table
        .integer("person_id")
        .unsigned()
        .references("id")
        .inTable("people")
        .notNullable();
      table
        .integer("course_id")
        .unsigned()
        .references("id")
        .inTable("courses")
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("professors");
  }
}

module.exports = ProfessorSchema;
