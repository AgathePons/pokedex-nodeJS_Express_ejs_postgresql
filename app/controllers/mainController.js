const dataMapper = require('../dataMapper');

const mainController = {
  homePage: async (req, res, next) => {
    try {
      const pokemons = await dataMapper.getAllPokemon();
      if(pokemons) {
        res.render('homepage', {
          pokemons
        });
      } else {
        next();
      }
    } catch (error) {
      console.error('Oupsi:', error);
      res.status(500).send('Ooops error 500!');
    }
    //res.render('homepage');
  }
};

module.exports = mainController;