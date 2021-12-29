const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
    
        ["Travis","Henry","Shinobu","Dr.Peace","Badgirl", "Lord Fu"],
        ["https://static.wikia.nocookie.net/dbxfanon/images/0/03/Travis.png/revision/latest?cb=20190523013449",
        "https://nomoreheroes.fandom.com/wiki/Henry_Cooldown?file=NMH3_Henry.png#NMH3_",
        "https://suda51.fandom.com/wiki/Shinobu?file=Shinobu.jpg",
        "https://nomoreheroes.fandom.com/wiki/Dr._Peace?file=DrPeace.jpg",
        "https://nomoreheroes.fandom.com/wiki/Bad_Girl?so=search&file=BadGirl.jpg#NMH1",
        "https://cdn.wccftech.com/wp-content/uploads/2019/12/WCCFnomoreheroes32.jpg"],
        [100,100,100,100,200,300],
        [100,50,25,50,25,50]
    
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #4");

  console.log("Done deploying and minting!");
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