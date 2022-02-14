const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
  
      ["Travis","Henry","Shinobu","DrPeace","Badgirl"],
      ["https://imgur.com/a/aIDUra5.png", // TRAVIS 
      "https://imgur.com/a/PFkFshv.png", // HENRY
      "https://imgur.com/a/R2Antmo.png", // SHINOBU
      "https://imgur.com/a/Agopx7L.png", // DR PEACE
      "https://imgur.com/a/FZgMn2I.png"], // BADGIRL
      
      [100,100,100,100,100,100],
      [100,50,25,50,25,50],
      "Lord Fu",
      "https://imgur.com/a/kBZvrTY",
       10000, //Boss hp
       50 // Boss attack dmg
  
  );
  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();

  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);


  };




const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();