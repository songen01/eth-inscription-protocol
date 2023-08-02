//! Contains the [FeltHash] trait and implementations thereof for the [Pedersen](PedersenHash) and [Poseidon](PoseidonHash) hashes.

use stark_hash::Felt;

/// Allows for implementations to be generic over Felt hash functions.
///
/// Implemented by [PedersenHash] and [PoseidonHash].
pub trait FeltHash {
    fn hash(a: Felt, b: Felt) -> Felt;
}

/// Implements [Hash] for the [Starknet Pedersen hash](stark_hash::stark_hash).
#[derive(Debug, Clone, Copy)]
pub struct PedersenHash {}

impl FeltHash for PedersenHash {
    fn hash(a: Felt, b: Felt) -> Felt {
        stark_hash::stark_hash(a, b)
    }
}

/// Implements [Hash] for the [Starknet Poseidon hash](stark_poseidon::poseidon_hash).
#[derive(Debug, Clone, Copy)]
pub struct PoseidonHash;
impl FeltHash for PoseidonHash {
    fn hash(a: Felt, b: Felt) -> Felt {
        stark_poseidon::poseidon_hash(a.into(), b.into()).into()
    }
}
