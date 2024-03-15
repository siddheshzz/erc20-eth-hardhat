// const { expect } = require("chai");

// describe("Token",()=>{
//     let tokenSupply = "100";
//     let token;
//     let owner;
//     let addr1;
//     let addr2;

//     before(async()=>{
//         [owner,addr1,addr2] = await ethers.getSigners();
//         const Token = await ethers.getContractFactory("Token");
//         token = await Token.deploy(tokenSupply);
//     });

//     describe("Deployment",()=>{
//         it("Should assign total supply of token to the owner/deployer",async()=>{
//             const ownerBalance = await token.balanceOf(owner.address);
//             expect(await token.totalSupply()).to.equal(ownerBalance);
//         })

//         it("Should transfer token from one account to other account",async()=>{
//             await token.transfer(addr1.address,50);
//             const addr1Balance = await token.balanceOf(addr1.address);
//             expect(addr1Balance).to.equal(50); 
//         })
//         it("Should transfer token from one account to other account",async()=>{
//             await expect(token.connect(addr1).transfer(addr2.address,51)).to.be.reverted;
//         })
//     })

    
// })