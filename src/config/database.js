module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'FastFeet',
  define: {
    timeStamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
