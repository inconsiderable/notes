import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Graph, Consideration, Profile } from '../utils/appTypes';
import { parseGraphDOT } from '../utils/compat';

interface SpaceTimeState {
  considerationsByID: {
    [id: string]: Consideration;
  };
  setConsiderationByID: (id: string, consideration: Consideration) => void;
  getConsiderationByID: (id: string) => Consideration;
  considerationsByPK: {
    [pubKey: string]: Consideration[] | null | undefined;
  };
  setConsiderationsByPK: (
    publicKey: string,
    considerations?: Consideration[],
  ) => void;
  getConsiderationsByPK: (pubKey: string) => Consideration[];
  profilesByPubKey: { [pubKey: string]: Profile | null | undefined };
  getProfile: (pubKey: string) => Profile | null | undefined;
  setProfile: (profile: Profile) => void;
  graphsByPK: { [pubKey: string]: Graph | null | undefined };
  getGraph: (pubKey: string) => Graph | null | undefined;
  setGraph: (graph: Graph) => void;
}

export const useSpaceTimeStore = create<SpaceTimeState>()(
  persist(
    (set, get) => ({
      considerationsByID: {},
      setConsiderationByID: (id, consideration) => {
        set((state) => ({
          considerationsByID: {
            ...state.considerationsByID,
            [id]: consideration,
          },
        }));
      },
      getConsiderationByID: (id: string) => get().considerationsByID[id],
      considerationsByPK: {},
      setConsiderationsByPK: (publicKey, considerations = []) => {
        set((state) => ({
          considerationsByPK: {
            ...state.considerationsByPK,
            [publicKey]: considerations,
          },
        }));
      },
      getConsiderationsByPK: (pubKey: string) =>
        get().considerationsByPK[pubKey] ?? [],
      profilesByPubKey: {},
      getProfile: (pubKey: string) => get().profilesByPubKey[pubKey],
      setProfile: (profile) =>
        set((state) => ({
          profilesByPubKey: {
            ...state.profilesByPubKey,
            [profile.public_key]: profile,
          },
        })),
      graphsByPK: {},
      getGraph: (pubKey: string) => get().graphsByPK[pubKey],
      setGraph: ({ graph, public_key, pass_id, height }) => {
        const { nodes, links } = parseGraphDOT(graph || '', public_key, 0);

        set((state) => ({
          graphsByPK: {
            ...state.graphsByPK,
            [public_key]: {
              public_key,
              nodes,
              links,
              pass_id,
              height,
            },
          },
        }));
      },
    }),
    {
      name: 'space-time-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

interface KeyState {
  selectedKeyIndex: number;
  selectedKey: string;
  setSelectedKey: (selectedKey: string) => void;
  publicKeys: string[];
  setPublicKeys: (keys: string[]) => void;
}

export const useKeyStore = create<KeyState>()(
  persist(
    (set, get) => ({
      selectedKeyIndex: 0,
      selectedKey: '',
      setSelectedKey: (selectedKey: string) => {
        const selectedKeyIndex = get().publicKeys.indexOf(selectedKey);
        set(() => ({
          selectedKey,
          selectedKeyIndex,
        }));
      },
      publicKeys: [],
      setPublicKeys: (publicKeys: string[]) => {
        set(() => ({
          selectedKeyIndex: 0,
          selectedKey: publicKeys[0],
          publicKeys,
        }));
      },
    }),
    {
      name: 'key-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
