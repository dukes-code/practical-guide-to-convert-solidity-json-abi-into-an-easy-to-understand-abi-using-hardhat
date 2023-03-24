import { ethers } from 'ethers';

async function main(): Promise<void> {
	const jsonAbi =
		require('../artifacts/contracts/MyTokenErc20.sol/MyTokenErc20.json').abi;

	const iface = new ethers.utils.Interface(jsonAbi);
	console.log(iface.format(ethers.utils.FormatTypes.full));
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
