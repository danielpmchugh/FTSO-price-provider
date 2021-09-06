/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type GovernanceProposed = ContractEventLog<{
  proposedGovernance: string;
  0: string;
}>;
export type GovernanceUpdated = ContractEventLog<{
  oldGovernance: string;
  newGoveranance: string;
  0: string;
  1: string;
}>;
export type PriceHashesSubmitted = ContractEventLog<{
  submitter: string;
  epochId: string;
  ftsos: string[];
  hashes: string[];
  timestamp: string;
  0: string;
  1: string;
  2: string[];
  3: string[];
  4: string;
}>;
export type PricesRevealed = ContractEventLog<{
  voter: string;
  epochId: string;
  ftsos: string[];
  prices: string[];
  randoms: string[];
  timestamp: string;
  0: string;
  1: string;
  2: string[];
  3: string[];
  4: string[];
  5: string;
}>;

export interface PriceSubmitter extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): PriceSubmitter;
  clone(): PriceSubmitter;
  methods: {
    claimGovernance(): NonPayableTransactionObject<void>;

    getFtsoManager(): NonPayableTransactionObject<string>;

    getFtsoRegistry(): NonPayableTransactionObject<string>;

    getTrustedAddresses(): NonPayableTransactionObject<string[]>;

    getVoterWhitelister(): NonPayableTransactionObject<string>;

    governance(): NonPayableTransactionObject<string>;

    initialise(_governance: string): NonPayableTransactionObject<void>;

    initialiseFixedAddress(): NonPayableTransactionObject<string>;

    proposeGovernance(_governance: string): NonPayableTransactionObject<void>;

    proposedGovernance(): NonPayableTransactionObject<string>;

    revealPrices(
      _epochId: number | string | BN,
      _ftsoIndices: (number | string | BN)[],
      _prices: (number | string | BN)[],
      _randoms: (number | string | BN)[]
    ): NonPayableTransactionObject<void>;

    setContractAddresses(
      _ftsoRegistry: string,
      _voterWhitelister: string,
      _ftsoManager: string
    ): NonPayableTransactionObject<void>;

    setTrustedAddresses(
      _trustedAddresses: string[]
    ): NonPayableTransactionObject<void>;

    submitPriceHashes(
      _epochId: number | string | BN,
      _ftsoIndices: (number | string | BN)[],
      _hashes: (string | number[])[]
    ): NonPayableTransactionObject<void>;

    transferGovernance(_governance: string): NonPayableTransactionObject<void>;

    voterWhitelistBitmap(_voter: string): NonPayableTransactionObject<string>;

    voterWhitelisted(
      _voter: string,
      _ftsoIndex: number | string | BN
    ): NonPayableTransactionObject<void>;

    votersRemovedFromWhitelist(
      _removedVoters: string[],
      _ftsoIndex: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    GovernanceProposed(cb?: Callback<GovernanceProposed>): EventEmitter;
    GovernanceProposed(
      options?: EventOptions,
      cb?: Callback<GovernanceProposed>
    ): EventEmitter;

    GovernanceUpdated(cb?: Callback<GovernanceUpdated>): EventEmitter;
    GovernanceUpdated(
      options?: EventOptions,
      cb?: Callback<GovernanceUpdated>
    ): EventEmitter;

    PriceHashesSubmitted(cb?: Callback<PriceHashesSubmitted>): EventEmitter;
    PriceHashesSubmitted(
      options?: EventOptions,
      cb?: Callback<PriceHashesSubmitted>
    ): EventEmitter;

    PricesRevealed(cb?: Callback<PricesRevealed>): EventEmitter;
    PricesRevealed(
      options?: EventOptions,
      cb?: Callback<PricesRevealed>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "GovernanceProposed", cb: Callback<GovernanceProposed>): void;
  once(
    event: "GovernanceProposed",
    options: EventOptions,
    cb: Callback<GovernanceProposed>
  ): void;

  once(event: "GovernanceUpdated", cb: Callback<GovernanceUpdated>): void;
  once(
    event: "GovernanceUpdated",
    options: EventOptions,
    cb: Callback<GovernanceUpdated>
  ): void;

  once(event: "PriceHashesSubmitted", cb: Callback<PriceHashesSubmitted>): void;
  once(
    event: "PriceHashesSubmitted",
    options: EventOptions,
    cb: Callback<PriceHashesSubmitted>
  ): void;

  once(event: "PricesRevealed", cb: Callback<PricesRevealed>): void;
  once(
    event: "PricesRevealed",
    options: EventOptions,
    cb: Callback<PricesRevealed>
  ): void;
}
