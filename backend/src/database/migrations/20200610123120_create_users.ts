import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
    return await knex.schema.createTable('user', table => {
        table.increments('id').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('graduation').notNullable();
    });
}

export async function down(knex: Knex): Promise<any> {
    return await knex.schema.dropTable('user');
}

