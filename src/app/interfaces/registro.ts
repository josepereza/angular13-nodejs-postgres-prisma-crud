
  export interface RegistroAuthor {
  data: Author[];
  meta: Meta;
}

interface Meta {
  page: number;
}

export interface Author {
  id: number;
  name: string;
  Quotes: Quote[];
}

export interface Quote {
  id: number;
  quote: string;
  authorId: number;
}

