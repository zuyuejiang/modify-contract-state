async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying the contract with the account:", deployer.address);

  // deploy
  const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
  const contract = await ModifyVariable.deploy(42, "Initial Deployment Message");
  await contract.waitForDeployment();

  console.log("Contract deployed to:", contract.target);

  // init
  const initialX = await contract.x();
  const initialMessage = await contract.message();
  console.log("Initial x:", initialX.toString());
  console.log("Initial message:", initialMessage);

  // update
  const tx = await contract.setMessage("Updated Deployment Message");
  await tx.wait(); 
  const updatedMessage = await contract.message();
  console.log("Updated message:", updatedMessage);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
