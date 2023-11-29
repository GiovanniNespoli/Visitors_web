import {
  QueryKey,
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import IVisitors from "../interfaces/IVistors";
import React, { createContext, useContext } from "react";
import { api } from "../service/api";

interface IVisitorsContextData {
  GetVisitors(): UseQueryResult<IVisitors[]>;
  DeleteVisitors(id: number): Promise<any>;
}

const VisitorsContext = createContext<IVisitorsContextData>(
  {} as IVisitorsContextData
);

const VisitorsProvider: React.FC = ({ children }) => {
  const GetVisitors = (): UseQueryResult<IVisitors[]> => {
    return useQuery(
      ["VISITORS"] as QueryKey,
      async () => {
        const { data } = await api.get<IVisitors[]>("/visitors");
        return data;
      },
      {
        refetchInterval: 1000,
      }
    );
  };

  const DeleteVisitors = useMutation(async (id: number) => {
    const { data } = await api.delete<IVisitors>(`visitors/${id}`);

    return data;
  }).mutateAsync;

  return (
    <VisitorsContext.Provider value={{ GetVisitors, DeleteVisitors }}>
      {children}
    </VisitorsContext.Provider>
  );
};

function useVisitors(): IVisitorsContextData {
  const context = useContext(VisitorsContext);

  if (!context) {
    throw new Error("useUser must be used within a VisitorsProvider");
  }

  return context;
}

export { useVisitors, VisitorsProvider };
