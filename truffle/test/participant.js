const ProductPricing = artifacts.require("ProductPricing");

contract("ProductPricing", (accounts) => {
  let instance;

  before(async () => {
    instance = await ProductPricing.new(2);
  });

  describe("Contract", () => {
    it("should deployed", () => {
      assert.isTrue(instance !== undefined);
    });
  });

  describe("Create account", () => {
    it("Owner can't create account", async () => {
      try {
        await instance.addParticipant(['name', 'email@email.com', 1], { from: accounts[0] });
        assert.isTrue(false);
      } catch (err) {
        expect(err.message.includes('This function is not allowed for the owner.')).to.be.true;
      }
    });

    it("User can create account", async () => {
      try {
        await instance.addParticipant(['name-1', 'email-1@email.com', 1], { from: accounts[1] });
        assert.isTrue(true);
      } catch (err) {
        assert.isTrue(false);
      }
    });

    it("An user can't create multiple account", async () => {
      try {
        await instance.addParticipant(['name', 'email@email.com', 1], { from: accounts[1] });
        assert.isTrue(false);
      } catch (err) {
        expect(err.message.includes("Duplicate account.")).to.be.true;
      }
    });

    it("User create account success", async () => {
      await instance.addParticipant(['name-2', 'email-2@email.com', 1], { from: accounts[2] });
      const index1 = await instance.addressToIndex(accounts[1]);
      const index2 = await instance.addressToIndex(accounts[2]);
      assert.equal(index1.toNumber(), 1);
      assert.equal(index2.toNumber(), 2);
    });

    it("Users maximun create account", async () => {
      try {
        await instance.addParticipant(['name', 'email@email.com', 1], { from: accounts[3] });
        assert.isTrue(false);
      } catch (err) {
        expect(err.message.includes("Out of limit participant.")).to.be.true;
      }
    });
  });

  describe("Get all accounts", () => {
    it("Only owner can get all users - case pass.", async () => {
      try {
        const result = await instance.getParticipants({ from: accounts[0] });
        assert.isTrue(true);
      } catch (err) {
        assert.isTrue(false);
      }
    });

    it("Only owner can get all users - case fail.", async () => {
      try {
        const result = await instance.getParticipants({ from: accounts[1] });
        assert.isTrue(false);
      } catch (err) {
        expect(err.message.includes("This function is allowed for the owner.")).to.be.true;
      }
    });

    it("Get all users", async () => {
      try {
        const result = await instance.getParticipants({ from: accounts[0] });
        assert.equal(result.length, 2);
      } catch (err) {
        assert.isTrue(false);
      }
    });
  });

  describe("Get single account", () => {
    it("Check get account doesn't exists.", async () => {
      try {
        const result = await instance.getParticipant(accounts[5], { from: accounts[0] });
        assert.isTrue(false);
      } catch (err) {
        expect(err.message.includes("Account doesn't exists.")).to.be.true;
      }
    });

    it("Get account", async () => {
      try {
        const result = await instance.getParticipant(accounts[2]);
        assert.equal(result.name, 'name-2');
        assert.equal(result.email, 'email-2@email.com');
        assert.equal(result.gender, true);
      } catch (err) {
        assert.isTrue(false);
      }
    });
  });
});
