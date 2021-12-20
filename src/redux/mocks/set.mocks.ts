import {uuid} from 'uuidv4';
import {Card, Set} from '../types/set.types';

const mockCard: Card = {
  id: uuid(),
  term: 'Дом',
  definition: 'Home',
};
const mockSets: Set[] = [
  {
    id: uuid(),
    title: 'English',
    description: 'Learn englist words',
    cards: [mockCard],
  },
  {
    id: uuid(),
    title: 'Serbian',
    description: 'Learn serbian words',
    cards: [mockCard],
  },
];

export {mockCard, mockSets};
