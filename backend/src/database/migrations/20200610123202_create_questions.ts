import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return await knex.schema.createTable('question', table => {
        table.increments('id').notNullable();
        table.string('subject').notNullable();
        table.string('content').notNullable();
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('user');

        table.timestamp('created_at');
    });
}

export async function down(knex: Knex): Promise<any> {
    return await knex.schema.dropTable('question');
}

