const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
    
        ["Travis","Henry","Shinobu","DrPeace","Badgirl"],
        ["https://static.wikia.nocookie.net/dbxfanon/images/0/03/Travis.png/revision/latest?cb=20190523013449",
        "https://static.wikia.nocookie.net/nomoreheroes/images/4/4e/Nmh-henry.jpg/revision/latest/scale-to-width-down/750?cb=20100304124110",
        "https://static.wikia.nocookie.net/nomoreheroes/images/c/c9/Shinobu.jpg/revision/latest/scale-to-width-down/750?cb=20080506040643",
        "https://static.wikia.nocookie.net/nomoreheroes/images/a/a0/DrPeace.jpg/revision/latest/scale-to-width-down/730?cb=20080506040332",
        "https://static.wikia.nocookie.net/nomoreheroes/images/e/ef/BadGirl.jpg/revision/latest/scale-to-width-down/600?cb=20080408012453"],
        
        [100,100,100,100,100,100],
        [100,50,25,50,25,50],
        "Lord Fu",
        "https://static.wikia.nocookie.net/villains/images/2/20/FU.jpg/revision/latest/scale-to-width-down/440?cb=20210903042716",
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