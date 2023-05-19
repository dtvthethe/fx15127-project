const ProductPricing = artifacts.require("ProductPricing");

module.exports = function (deployer) {
  deployer.deploy(ProductPricing);
};
