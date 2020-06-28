import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return await knex.schema.createTable('answer', table => {
        table.increments('id').notNullable();
        table.string('content').notNullable();
        table.integer('question_id')
            .notNullable()
            .references('id')
            .inTable('question');
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('user');
    });
}

export async function down(knex: Knex): Promise<any> {
    return await knex.schema.dropTable('answer');
}
