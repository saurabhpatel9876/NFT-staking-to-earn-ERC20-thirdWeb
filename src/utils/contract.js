import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingAbi } from "./stakingAbi";
const nftContractAddress = "0xB19Da0aEC66E5041c5C7cd29216261759D874099";
const rewardTokenContractAddress = "0xB4B3ffb536dB3341D30F799F1fa96599a8b7B8A4";
const stakingContractAddress = "0xc661eB7051B3B9C811E6Fb5fCe7a0B3e2eD4D71c";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingAbi
});