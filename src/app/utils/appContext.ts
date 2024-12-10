import { createContext } from 'react';
import {
  Pass,
  PassIdHeaderPair,
  Graph,
  Consideration,
  Profile,
} from '../utils/appTypes';

interface AppState {
  publicKeys: string[];
  setPublicKeys: (keys: string[]) => void;
  selectedKeyIndex: number;
  selectedKey: string;
  setSelectedKey: (key: string) => void;
  requestTipHeader: () => void;
  tipHeader?: PassIdHeaderPair;
  setTipHeader: (tipHeader: PassIdHeaderPair) => void;
  requestPassByHeight: (height: number) => void;
  requestPassById: (pass_id: string) => void;
  currentPass?: Pass | null;
  setCurrentPass: (currentPass: Pass) => void;
  genesisPass?: Pass | null;
  setGenesisPass: (genesisPass: Pass) => void;
  requestProfile: (publicKeyB64: string) => void;
  profile: (publicKeyB64: string) => Profile | null | undefined;
  requestGraph: (publicKeyB64: string) => void;
  graph: (pubKey: string) => Graph | null | undefined;
  setGraph: (ranking: Graph) => void;
  requestConsideration: (consideration_id: string) => void;
  getConsiderationByID: (
    consideration_id: string,
  ) => Consideration | null | undefined;
  setConsiderationByID: (
    consideration_id: string,
    consideration: Consideration,
  ) => void;
  requestPkConsiderations: (publicKeyB64: string) => void;
  pkConsiderations: (pubKey: string) => Consideration[];
  setPkConsiderations: (
    publicKey: string,
    considerations?: Consideration[] | undefined,
  ) => void;
  pushConsideration: (
    to: string,
    memo: string,
    passphrase: string,
    selectedKeyIndex: number,
  ) => Promise<void>;

  requestPendingConsiderations: (publicKeyB64: string) => void;
  pendingConsiderations: Consideration[];
  setPendingConsiderations: (txns: Consideration[]) => void;
  selectedNode: string;
  setSelectedNode: (node: string) => void;
  colorScheme: 'light' | 'dark';
}

export const AppContext = createContext<AppState>({
  publicKeys: [],
  setPublicKeys: () => {},
  selectedKeyIndex: 0,
  selectedKey: '',
  setSelectedKey: () => {},
  tipHeader: undefined,
  requestTipHeader: () => {},
  setTipHeader: () => {},
  requestPassById: (pass_id: string) => {},
  requestPassByHeight: (height: number) => {},
  currentPass: undefined,
  setCurrentPass: (currentPass: Pass) => {},
  genesisPass: undefined,
  setGenesisPass: (genesisPass: Pass) => {},
  requestProfile: (publicKeyB64: string) => {},
  profile: () => null,
  requestGraph: (publicKeyB64: string) => {},
  graph: () => null,
  setGraph: () => {},
  requestConsideration: (consideration_id: string) => {},
  getConsiderationByID: (consideration_id: string) => null,
  setConsiderationByID: (
    consideration_id: string,
    consideration: Consideration,
  ) => {},
  pkConsiderations: () => [],
  requestPkConsiderations: (publicKeyB64: string) => {},
  setPkConsiderations: () => {},
  requestPendingConsiderations: () => {},
  pendingConsiderations: [],
  setPendingConsiderations: () => {},
  selectedNode: '',
  setSelectedNode: () => {},
  colorScheme: 'light',
  pushConsideration: (
    to: string,
    memo: string,
    passphrase: string,
    selectedKeyIndex: number,
  ) => Promise.resolve(),
});
