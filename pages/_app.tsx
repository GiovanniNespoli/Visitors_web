import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { VisitorsProvider } from "./hooks/visitors";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <VisitorsProvider>
        <Component {...pageProps} />
      </VisitorsProvider>
    </QueryClientProvider>
  );
}
