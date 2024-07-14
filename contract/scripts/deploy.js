async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log("Account balance:", balance.toString());

  const PayGifty = await ethers.getContractFactory("PayGifty");
  const payGifty = await PayGifty.deploy();
  console.log("Contract deployed to address:", payGifty.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
