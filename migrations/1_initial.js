const Migrations = artifacts.require('Migrations');

module.exports = async (deployer, network) => {
  if (network !== 'test') {
    console.log('Skipping deployment of Migrations contract');
    return;
  }
  return deployer.deploy(Migrations);
};
