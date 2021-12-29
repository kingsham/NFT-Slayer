const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
    
        ["Travis","Henry","Shinobu","DrPeace","Badgirl"],
        ["https://static.wikia.nocookie.net/dbxfanon/images/0/03/Travis.png/revision/latest?cb=20190523013449",
        "https://nomoreheroes.fandom.com/wiki/Henry_Cooldown?file=NMH3_Henry.png#NMH3_",
        "https://suda51.fandom.com/wiki/Shinobu?file=Shinobu.jpg",
        "https://nomoreheroes.fandom.com/wiki/Dr._Peace?file=DrPeace.jpg",
        "https://nomoreheroes.fandom.com/wiki/Bad_Girl?so=search&file=BadGirl.jpg#NMH1",
        
        [100,100,100,100,100,100],
        [100,50,25,50,25,50],
        "Lord Fu",
        "https://cdn.wccftech.com/wp-content/uploads/2019/12/WCCFnomoreheroes32.jpg"],
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