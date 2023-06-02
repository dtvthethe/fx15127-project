const ProductPricing = artifacts.require("ProductPricing");

contract("ProductPricing", (accounts) => {
  let instance;

  before(async () => {
    instance = await ProductPricing.new(2);
  });

  // describe("Contract", () => {
  //   it("should deployed", () => {
  //     assert.isTrue(instance !== undefined);
  //   });
  // });

  describe("Create account", () => {
    it("owner can't create account", async () => {
      try {
        await instance.addParticipant('name', 'email@email.com', 1, {from: accounts[0]});
        assert.isTrue(false);
      } catch(err) {
        expect(err.message.includes('This function not allow owner.')).to.be.true;
      }
    });

    it("user can create account", async () => {
      try {
        await instance.addParticipant('name', 'email@email.com', 1, {from: accounts[1]});
        assert.isTrue(true);
      } catch(err) {
        assert.isTrue(false);
      }
    });

    it("user create account success", async () => {
      const index0 = await instance.mapAddress(accounts[0]);
      const index1 = await instance.mapAddress(accounts[1]);
      const index2 = await instance.mapAddress(accounts[2]);
      assert.equal(index0.toNumber(), 0);
      assert.equal(index1.toNumber(), 1);
      assert.equal(index2.toNumber(), 0);
    });

    it("An user can't create multiple account", async () => {
      try {
        await instance.addParticipant('name', 'email@email.com', 1, {from: accounts[1]});
        assert.isTrue(false);
      } catch(err) {
        expect(err.message.includes('This account has registered.')).to.be.true;
      }
    });

    it("users maximun create account", async () => {
      await instance.addParticipant('name 1', 'email_1@email.com', 1, {from: accounts[2]});

      try {
        await instance.addParticipant('name', 'email@email.com', 1, {from: accounts[3]});
        assert.isTrue(false);
      } catch(err) {
        expect(err.message.includes("Can't register more account.")).to.be.true;
      }
    });
  });

  describe("Get account", () => {
    it("Only owner can get all users.", async () => {
      const result = await instance.getParticipants({from: accounts[0]});
      console.log(result);
      // assert.equal(result.length, 2);
    });
  });
});
