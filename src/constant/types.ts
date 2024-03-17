export type GOODS = {
  id: number | null;
  name: string;
  price: number;
}

export type Order = {
  uid: string;
  id: number | null;
  name: string;
  price: number;
  number: number;
  total: number;
}