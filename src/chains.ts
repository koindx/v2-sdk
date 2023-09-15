const NAMESPACES = [
  "koin", "vhp"
];

export enum ChainId {
  MAINNET = "EiBZK_GGVP0H_fXVAM3j6EAuz3-B-l3ejxRSewi7qIBfSA==",
  HARBINGER = "EiBncD4pKRIQWco_WRqo5Q-xnXR7JuO3PtZv983mKdKHSQ=="
}

export const CHAIN_TO_NAMESPACES: Record<ChainId, string[]> = {
  [ChainId.MAINNET]: NAMESPACES,
  [ChainId.HARBINGER]: NAMESPACES
}
