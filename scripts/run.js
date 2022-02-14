const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
    
        ["Travis","Henry","Shinobu","DrPeace","Badgirl"],
       [ "https://imgur.com/a/aIDUra5", // TRAVIS 
        "https://imgur.com/a/PFkFshv",// HENRY
        "https://imgur.com/a/R2Antmo", // SHINOBU
        "https://imgur.com/a/Agopx7L",// DR PEACE
        "https://imgur.com/a/FZgMn2I"], // BADGIRL
        
        
        [100,100,100,100,100,100],
        [100,50,25,50,25,50],
        "Lord Fu",
        "https://imgur.com/a/kBZvrTY",
         10000, //Boss hp
         50 // Boss attack dmg
    
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
let txn;
// We only have three characters.
// an NFT w/ the character at index 2 of our array.
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();
txn = await gameContract.attackBoss();
await txn.wait();
let returnedTokenUri = await gameContract.tokenURI(1);
console.log("Token URI:", returnedTokenUri);
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