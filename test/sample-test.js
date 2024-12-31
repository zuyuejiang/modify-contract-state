const { expect, assert } = require("chai");

describe("TestModifyVariable", function () {
  it("should change x to 1337", async function () {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
    const contract = await ModifyVariable.deploy(10, "Hello World");
    await contract.waitForDeployment();

    await contract.modifyToLeet();
    const newX = await contract.x();
    assert.equal(Number(newX), 1337);
  });

  it("should set and retrieve message", async function () {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
    const contract = await ModifyVariable.deploy(10, "Initial Message");
    await contract.waitForDeployment();

    await contract.setMessage("New Message");
    const newMessage = await contract.message();
    assert.equal(newMessage, "New Message");
  });
});
