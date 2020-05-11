pragma solidity 0.6.7;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";


/**
 * @title Claims
 *
 * @notice Minimal proof-of-existence on Ethereum.
 */
contract Claims is
    Ownable
{
    event Claim(
        bytes32 keccak256Hash
    );

    function claim(
        bytes32 keccak256Hash
    )
        public
        onlyOwner
    {
        emit Claim(keccak256Hash);
    }
}
