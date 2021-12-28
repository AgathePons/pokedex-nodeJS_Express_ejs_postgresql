const client = require('./dbClient');

const dataMapper = {
  getAllPokemon: async () => {
    const query = 'SELECT * FROM pokemon;';
    return (await client.query(query)).rows;
  },
  getOnePokemon: async (numero) => {
    const query = `SELECT * FROM pokemon WHERE numero=${numero};`;
    return (await client.query(query)).rows[0];
  }
};

module.exports = dataMapper;