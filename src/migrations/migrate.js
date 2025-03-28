const { Umzug } = require('umzug');
const mysql = require('mysql2/promise');
const path = require('path');
const fs = require('fs').promises;
const db = require('../../db');
require('dotenv').config();

const databaseName = process.env.DB_NAME
const connection = db;

const migrationsPath = path.join(__dirname, 'sql');

const umzug = new Umzug({
    migrations: {
        glob: path.join(migrationsPath, '*.up.sql').replace(/\\/g, '/'),
        // Custom resolver for SQL files
        resolver: (name) => ({
            name,
            path: path.join(__dirname, 'src/migrations', name),
            up: async ({ path: filePath }) => {
                console.log("UP FILE")
                const sql = await fs.readFile(filePath + '.up.sql', 'utf8');

                await connection.promise().query(sql);
            },
            down: async ({ path: filePath }) => {
                const sql = await fs.readFile(filePath + '.down.sql', 'utf8');

                await connection.promise().query(sql);
            }
        }),
        resolve: ({ name, path: filePath }) => ({
            name,
            path: path.join(__dirname, 'sql', name),
            up: async ({ path: filePath }) => {
                const sql = await fs.readFile(filePath , 'utf8');

                await connection.promise().query(sql);
            },
            down: async ({ path: filePath }) => {
                const sql = await fs.readFile(filePath , 'utf8');

                await connection.promise().query(sql);
            }
        })
    },
    storage: {
        async executed() {


            // Check if migrations table exists
            const [rows] = await connection.promise().query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = ? AND table_name = 'migrations'
      `, [databaseName]);

            if (rows.length === 0) {
                await connection.promise().query(`
          CREATE TABLE migrations (
            name VARCHAR(255) NOT NULL,
            executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (name)
          )
        `);
                return [];
            }

            const [migrations] = await connection.promise().query('SELECT name FROM migrations ORDER BY executed_at');
            return migrations.map(m => m.name);
        },
        async logMigration({ name }) {
            await connection.promise().query('INSERT INTO migrations (name) VALUES (?)', [name]);
        },
        async unlogMigration({ name }) {
            await connection.promise().query('DELETE FROM migrations WHERE name = ?', [name]);
        }
    },
    logger: console
});


const runMigrations = async function() {

    try {
        const pending = await umzug.pending();
        if (pending.length > 0) {
            console.log('Running pending migrations...');
            await umzug.up();
            console.log('All migrations completed successfully');
        } else {
            console.log('No pending migrations');
        }
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1); // Exit if migrations fail
    }
}

// Export for command line use
module.exports = {
    umzug,
    runMigrations
};