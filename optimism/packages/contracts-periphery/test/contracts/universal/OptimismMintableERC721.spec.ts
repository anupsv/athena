/* External Imports */
import { ethers } from 'hardhat'
import { Signer, Contract } from 'ethers'
import { smock, FakeContract } from '@defi-wonderland/smock'

/* Internal Imports */
import { expect } from '../../setup'

const TOKEN_ID = 10
const DUMMY_L1ERC721_ADDRESS: string =
  '0x0034223412342234223422342234223422342234'

describe('OptimismMintableERC721', () => {
  let l2BridgeImpersonator: Signer
  let alice: Signer
  let Fake__L2ERC721Bridge: FakeContract
  let OptimismMintableERC721: Contract
  let l2BridgeImpersonatorAddress: string
  let aliceAddress: string
  let baseUri: string
  const remoteChainId = 100

  let Factory__OptimismMintableERC721
  before(async () => {
    ;[l2BridgeImpersonator, alice] = await ethers.getSigners()
    l2BridgeImpersonatorAddress = await l2BridgeImpersonator.getAddress()
    aliceAddress = await alice.getAddress()

    baseUri = ''.concat(
      'ethereum:',
      DUMMY_L1ERC721_ADDRESS,
      '@',
      remoteChainId.toString(),
      '/tokenURI?uint256='
    )

    Factory__OptimismMintableERC721 = await ethers.getContractFactory(
      'OptimismMintableERC721'
    )
    OptimismMintableERC721 = await Factory__OptimismMintableERC721.deploy(
      l2BridgeImpersonatorAddress,
      remoteChainId,
      DUMMY_L1ERC721_ADDRESS,
      'L2ERC721',
      'ERC'
    )

    // Get a new fake L2 bridge
    Fake__L2ERC721Bridge = await smock.fake<Contract>(
      'L2ERC721Bridge',
      // This allows us to use an ethers override {from: Fake__L2ERC721Bridge.address} to mock calls
      { address: await l2BridgeImpersonator.getAddress() }
    )

    // mint an nft to alice
    await OptimismMintableERC721.connect(l2BridgeImpersonator).safeMint(
      aliceAddress,
      TOKEN_ID,
      {
        from: Fake__L2ERC721Bridge.address,
      }
    )
  })

  describe('constructor', () => {
    it('should revert if bridge is address(0)', async () => {
      await expect(
        Factory__OptimismMintableERC721.deploy(
          ethers.constants.AddressZero,
          remoteChainId,
          DUMMY_L1ERC721_ADDRESS,
          'L2ERC721',
          'ERC'
        )
      ).to.be.revertedWith(
        'OptimismMintableERC721: bridge cannot be address(0)'
      )
    })

    it('should revert if remote chain id is address(0)', async () => {
      await expect(
        Factory__OptimismMintableERC721.deploy(
          l2BridgeImpersonatorAddress,
          0,
          DUMMY_L1ERC721_ADDRESS,
          'L2ERC721',
          'ERC'
        )
      ).to.be.revertedWith(
        'OptimismMintableERC721: remote chain id cannot be zero'
      )
    })

    it('should revert if remote token is address(0)', async () => {
      await expect(
        Factory__OptimismMintableERC721.deploy(
          l2BridgeImpersonatorAddress,
          remoteChainId,
          ethers.constants.AddressZero,
          'L2ERC721',
          'ERC'
        )
      ).to.be.revertedWith(
        'OptimismMintableERC721: remote token cannot be address(0)'
      )
    })

    it('should be able to create a standard ERC721 contract with the correct parameters', async () => {
      expect(await OptimismMintableERC721.bridge()).to.equal(
        l2BridgeImpersonatorAddress
      )
      expect(await OptimismMintableERC721.remoteToken()).to.equal(
        DUMMY_L1ERC721_ADDRESS
      )
      expect(await OptimismMintableERC721.name()).to.equal('L2ERC721')
      expect(await OptimismMintableERC721.symbol()).to.equal('ERC')
      expect(await OptimismMintableERC721.baseTokenURI()).to.equal(baseUri)

      // alice has been minted an nft
      expect(await OptimismMintableERC721.ownerOf(TOKEN_ID)).to.equal(
        aliceAddress
      )
    })
  })

  describe('mint and burn', () => {
    it('should not allow anyone but the L2 bridge to mint and burn', async () => {
      await expect(
        OptimismMintableERC721.connect(alice).safeMint(aliceAddress, 100)
      ).to.be.revertedWith(
        'OptimismMintableERC721: only bridge can call this function'
      )
      await expect(
        OptimismMintableERC721.connect(alice).burn(aliceAddress, 100)
      ).to.be.revertedWith(
        'OptimismMintableERC721: only bridge can call this function'
      )
    })
  })

  describe('supportsInterface', () => {
    it('should return the correct interface support', async () => {
      // ERC165
      expect(await OptimismMintableERC721.supportsInterface(0x01ffc9a7)).to.be
        .true

      // OptimismMintableERC721
      expect(await OptimismMintableERC721.supportsInterface(0xe49bc7f8)).to.be
        .true

      // ERC721
      expect(await OptimismMintableERC721.supportsInterface(0x80ac58cd)).to.be
        .true

      // Some bad interface
      expect(await OptimismMintableERC721.supportsInterface(0xffffffff)).to.be
        .false
    })
  })

  describe('tokenURI', () => {
    it('should return the correct token uri', async () => {
      const tokenUri = baseUri.concat(TOKEN_ID.toString())
      expect(await OptimismMintableERC721.tokenURI(TOKEN_ID)).to.equal(tokenUri)
    })
  })
})
