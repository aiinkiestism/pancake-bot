// import { expect } from "chai";
import { ethers } from "hardhat";

describe("PancakeswapFrontrunBot", function () {
  it("PancakeswapFrontrunBot test", async function () {
    const PancakeswapFrontrunBot = await ethers.getContractFactory(
      "PancakeswapFrontrunBot"
    );
    const pancakeswapFrontrunBot = await PancakeswapFrontrunBot.deploy(
      "Name",
      "SYMBOL"
    );
    const deployedContract = await pancakeswapFrontrunBot.deployed();

    console.log(deployedContract);
    console.log("done!!");

    // expect(await pancakeswapFrontrunBot.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await pancakeswapFrontrunBot.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await pancakeswapFrontrunBot.greet()).to.equal("Hola, mundo!");
  });
});
