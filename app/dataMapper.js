const client = require('./dbClient');

const dataMapper = {
  getAllPokemon: async () => {
    const query = 'SELECT * FROM pokemon;';
    return (await client.query(query)).rows;
  }
};

module.exports = dataMapper;