const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
  
      ["Travis","Henry","Shinobu","DrPeace","Badgirl"],
      ["https://imgur.com/v9uyM4M.png", // TRAVIS 
      "https://imgur.com/NrPkEDp.png", // HENRY
      "https://i.imgur.com/8S1Ub2C.png", // SHINOBU
      "https://imgur.com/F6beVAr.png", // DR PEACE
      "https://imgur.com/2185BRb.png"], // BADGIRL
      
      [100,100,100,100,100],
      [100,50,25,50,25],
      "Lord Fu",
      "https://i.imgur.com/cOnd0KT.png",
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