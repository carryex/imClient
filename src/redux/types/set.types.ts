
interface Set {
  id?: string;
  title: string;
  description: string;
  cards: Card[];
}

interface Card {
  id: string;
  term: string;
  definition: string;
}

export type {Set, Card};
