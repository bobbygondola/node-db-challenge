//best migrate
exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
        //primary key always
        tbl.increments();
        //input
        tbl.string("project_name", 225).notNullable().index();
        tbl.string("desc", 225).notNullable().index();
        tbl.string("client_name", 225).notNullable().index();
        tbl.boolean("completed", 225).notNullable().defaultTo(0).index();
    })
    .createTable("tasks", tbl => {
        //primary key always
        tbl.increments();
        tbl.string("notes", 255).nullable().index()
        //input
        tbl.integer("project_id").notNullable().index().unsigned()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")

        tbl.string("task_name", 225).notNullable().index();
        tbl.string("desc", 225).notNullable().index();
        tbl.boolean("completed", 225).nullable().defaultTo(0).index();
    })

    .createTable("resources", tbl => {
        //primary key always
        tbl.increments();
        //input
        tbl.string("resource_name", 225).notNullable().index();
        tbl.string("desc", 225).notNullable().index();
    })

    .createTable("junction", tbl => {
        //primary key always
        tbl.increments();
        //input
        tbl.integer("resource_id", 225).notNullable().index();
        tbl.integer("task_id", 225).nullable().index().unsigned()
        .references("tasks.id")
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("junction")
  .dropTableIfExists("resources")
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects")
};
