import {
  QueryKey,
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query";
import { IDataPerMonth, IVisitors } from "../interfaces/IVistors";
import React, { createContext, useContext } from "react";
import { api } from "../service/api";
import toast from "react-hot-toast";

interface IVisitorsContextData {
  GetVisitors(): UseQueryResult<IVisitors[]>;
  DeleteVisitors(id: number): Promise<any>;
  UpdateVisitors(data: IVisitors): Promise<IVisitors>;
  GetTodayVisitors(): UseQueryResult<IVisitors[]>;
  GetMonthVisitors(): UseQueryResult<number>;
  GetTotalPerMonthVisitors(): UseQueryResult<IDataPerMonth[]>;
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

  const GetTodayVisitors = (): UseQueryResult<IVisitors[]> => {
    return useQuery(
      ["VISITORSPERDAY"] as QueryKey,
      async () => {
        const { data } = await api.get<IVisitors[]>("/visitors/perDay");
        return data;
      },
      {
        refetchInterval: 10000,
      }
    );
  };

  const GetMonthVisitors = (): UseQueryResult<number> => {
    return useQuery(
      ["VISITORSPERMONTH"] as QueryKey,
      async () => {
        const { data } = await api.get<number>("/visitors/perMonth");
        return data;
      },
      {
        refetchInterval: 10000,
      }
    );
  };

  const GetTotalPerMonthVisitors = (): UseQueryResult<IDataPerMonth[]> => {
    return useQuery(
      ["VISITORSMONTH"] as QueryKey,
      async () => {
        const { data } = await api.get<IDataPerMonth[]>("/visitors/all");
        return data;
      },
      {
        refetchInterval: 10000,
      }
    );
  };

  const DeleteVisitors = useMutation(
    async (id: number) => {
      const { data } = await api.delete<IVisitors>(`visitors/${id}`);

      return data;
    },
    {
      onSuccess: () => {
        toast.success("Visitante deletado!");
      },
      onError: () => {
        toast.error("Visitante não deletado!");
      },
    }
  ).mutateAsync;

  const UpdateVisitors = useMutation(
    async (visitors: IVisitors) => {
      const { data } = await api.put<any>(`visitors/${visitors.id}`, {
        name: visitors.name,
        phone: visitors.phone,
        email: visitors.email,
      });

      return data;
    },
    {
      onSuccess: () => {
        toast.success("Visitante editado!");
      },
      onError: () => {
        toast.error("Visitante não editado!");
      },
    }
  ).mutateAsync;

  return (
    <VisitorsContext.Provider
      value={{
        GetVisitors,
        DeleteVisitors,
        UpdateVisitors,
        GetTodayVisitors,
        GetMonthVisitors,
        GetTotalPerMonthVisitors,
      }}
    >
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
