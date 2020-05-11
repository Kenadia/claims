const Claims = artifacts.require('Claims');

module.exports = async (deployer) => {
  return deployer.deploy(Claims);
};
