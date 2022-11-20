import { DeployFunction } from 'hardhat-deploy/dist/types'

import {
  assertContractVariable,
  deployAndVerifyAndThen,
} from '../src/deploy-utils'

const deployFn: DeployFunction = async (hre) => {
  const { deployer } = await hre.getNamedAccounts()
  await deployAndVerifyAndThen({
    hre,
    name: 'ProxyAdmin',
    args: [deployer],
    postDeployAction: async (contract) => {
      // Owner is temporarily set to the deployer. We transfer ownership of the ProxyAdmin to the
      // SystemDictator before we trigger the dictator steps.
      await assertContractVariable(contract, 'owner', deployer)
    },
  })
}

deployFn.tags = ['ProxyAdmin', 'fresh', 'migration']

export default deployFn
