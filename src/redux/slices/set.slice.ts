import {createSlice, PayloadAction, SerializedError} from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid';
import {createSet} from '../thunks/set.thunks';
import {Card, Set} from '../types/set.types';

const initialCard: Card = {
  id: uuid(),
  term: '',
  definition: '',
};
const initialSet: Set = {
  title: '',
  description: '',
  cards: [initialCard],
};

interface SetsState {
  collection: Set[],
  draft: Set,
  error?: SerializedError;
}

const initialState: SetsState = {
  collection: [],
  draft: initialSet,
};

export const setsSlice = createSlice({
  name: 'sets',
  initialState,
  reducers: {
    addSet: (state, action: PayloadAction<any>) => {
      state.collection.push(action.payload);
    },
    updateDraft: (state, action: PayloadAction<DraftPayload>) => {
      const {id, name, value} = action.payload;
      if (name && value) {
        if (!id) {
          if (name in state.draft) {
            const key = name as 'title' | 'description';
            state.draft[key] = value;
          }
        } else {
          let cardExist = false;
          state.draft.cards.map((card)=> {
            if (card.id === id && name in card) {
              const key = name as 'term' | 'definition';
              card[key] = value;
              cardExist = true;
            }
            return card;
          });

          if (!cardExist && name in initialCard) {
            const newCard = {...initialCard, id, [name]: value};
            state.draft.cards.push(newCard);
          }
        }
      }
    },
    addCardToDraft: (state) => {
      state.draft.cards.push({...initialCard, id: uuid()});
    },
    saveDraft: (state) => {
      if (state.draft.title.length === 0 || !state.draft.title) {
        return;
      }
      const cards: Card[] = [];
      state.draft.cards.forEach(({term, id, definition}) => {
        if (term.length !== 0 &&
          definition &&
          definition.length !==0 ) {
          cards.push({id, term, definition});
        }
      });
      state.collection.push({...state.draft, cards, id: uuid()});
      state.draft = initialSet;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSet.fulfilled, (state, action) => {
      state.draft = initialSet;
      console.log(action);
    });
    builder.addCase(createSet.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export const {
  addSet,
  updateDraft,
  addCardToDraft,
  saveDraft,
} = setsSlice.actions;

export type {SetsState};

export default setsSlice.reducer;

interface DraftPayload {
  id?: string;
  name: string;
  value: string;
}
