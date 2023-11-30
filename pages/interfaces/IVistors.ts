interface IVisitors {
  id: number;
  name: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface IDataPerMonth {
  month: string;
  value: number;
}

export type { IDataPerMonth, IVisitors };
