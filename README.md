# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# Practical guide to convert Solidity JSON ABI into an easy to understand ABI using Hardhat

Repository used during the development of an article on DukesCode about ["Practical guide to convert Solidity JSON ABI into an easy to understand ABI using Hardhat"](https://www.dukescode.com/practical-guide-to-convert-solidity-json-abi-into-an-easy-to-understand-abi-using-hardhat?utm_source=github&utm_medium=readme&ref=github).

[![LinkedIn](https://img.shields.io/static/v1?label=LinkedIn&message=%20&color=blue&logo=LinkedIn&style=flat-square&logoColor=white)](https://www.linkedin.com/in/dukefullstack/)
[![Youtube](https://img.shields.io/static/v1?label=Youtube&message=%20&color=blue&logo=Youtube&style=flat-square&logoColor=white)](https://www.youtube.com/@DukesCode)
[![Twitter](https://img.shields.io/static/v1?label=Twitter&message=%20&color=blue&logo=Twitter&style=flat-square&logoColor=white)](https://twitter.com/dukefullstack)
[![DukesCode](https://img.shields.io/static/v1?label=Duke'sCode&message=%20&color=blue&logo=googlechrome&style=flat-square&logoColor=white)](https://dukescode.com?utm_source=github&utm_medium=readme&ref=github)
[![Instagram](https://img.shields.io/static/v1?label=Instagram&message=%20&color=blue&logo=Instagram&style=flat-square&logoColor=white)](https://www.instagram.com/dukefullstack/)

## ![image](https://github.com/dukefullstack/store-app-castore/blob/assets/assets/octohub.png?raw=true) Menu Contents

- [Practical guide to convert Solidity JSON ABI into an easy to understand ABI using Hardhat](#practical-guide-to-convert-solidity-json-abi-into-an-easy-to-understand-abi-using-hardhat)
  - [:bulb: Menu Contents](#-menu-contents)
  - [:pushpin: Motivation](#pushpin-motivation)
  - [:man_technologist: Technologies & Tools](#man_technologist-technologies--tools)
  - [:iphone: Final Application](#iphone-final-application)
  - [:heavy_check_mark: Installation](#heavy_check_mark-installation)
  - [:heavy_check_mark: Compilation & Test](#heavy_check_mark-compilation--test)
  - [:pencil: Author](#pencil-author)

## :pushpin: Motivation

Most of the time whenever we are developing for Web3 and we need to interact with Smart Contracts we will need the ABI to understand the interface available for connection.

Nothing better than having an ABI that is easier to understand.

## :man_technologist: Technologies & Tools

- Node.js v18.12.1
- Hardhat 2.13.0
- Solidity 0.8.18
- Npm 8.19.2

## :iphone: Final Application

By the end of this article we will have created an ABI that is really simple to read and understand.

```javascript
[
	'constructor(uint256 initialSupply)',
	'event Approval(address indexed owner, address indexed spender, uint256 value)',
	'event Transfer(address indexed from, address indexed to, uint256 value)',
	'function allowance(address owner, address spender) view returns (uint256)',
	'function approve(address spender, uint256 amount) returns (bool)',
	'function balanceOf(address account) view returns (uint256)',
	'function decimals() view returns (uint8)',
	'function decreaseAllowance(address spender, uint256 subtractedValue) returns (bool)',
	'function increaseAllowance(address spender, uint256 addedValue) returns (bool)',
	'function name() view returns (string)',
	'function symbol() view returns (string)',
	'function totalSupply() view returns (uint256)',
	'function transfer(address to, uint256 amount) returns (bool)',
	'function transferFrom(address from, address to, uint256 amount) returns (bool)',
];
```

## :heavy_check_mark: Installation

- First, you need to have Node v18+, Hardhat 2+, Solidity 0.8+ and Npm 8+, if you don't follow the instruction inside [this post](https://www.dukescode.com/a-complete-beginners-guide-to-solidity-part-ii?utm_source=github&utm_medium=readme&ref=github).

- Now clone the project via HTTPS through this command:</br>
  `$ git clone https://github.com/dukes-code/practical-guide-to-convert-solidity-json-abi-into-an-easy-to-understand-abi-using-hardhat.git`

- After cloning, enter the cloned repository directory:</br>
  `$ cd practical-guide-to-convert-solidity-json-abi-into-an-easy-to-understand-abi-using-hardhat`

- Once being inside the directory, download and install the dependencies using:</br>
  `$ npm i`

## :heavy_check_mark: Compilation & Test

- To compile you must run at terminal:</br>
  `$ npx hardhat compile`

- To run our test you must access your terminal and run:</br>
  `$ npx hardhat run scripts/turn-abi-readable.ts`

## :pencil: Author

- <a href="https://www.linkedin.com/in/dukefullstack/" target="_blank">LinkedIn</a>
- <a href="https://www.youtube.com/@DukesCode" target="_blank">Youtube</a>
- <a href="https://twitter.com/dukefullstack" target="_blank">Twitter</a>
- <a href="https://dukescode.com?utm_source=github&utm_medium=readme&ref=github" target="_blank">Duke's Code</a>
- <a href="https://www.instagram.com/dukefullstack/" target="_blank">Instagram</a>

Made with :heart: by <a href="https://www.linkedin.com/in/dukefullstack/">**Thiago Santos Joaquim**</a>. MIT License
