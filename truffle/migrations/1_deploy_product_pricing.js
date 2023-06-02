const ProductPricing = artifacts.require("ProductPricing");
// const Participant = artifacts.require("Participant");
// const Common = artifacts.require("Common");

module.exports = function (deployer) {
  // deployer.deploy(Common);
  deployer.deploy(ProductPricing, 10);
  // deployer.deploy(Participant);
};
