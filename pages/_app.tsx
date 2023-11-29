import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { VisitorsProvider } from "./hooks/visitors";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <VisitorsProvider>
        <Component {...pageProps} />
        <Toaster position="top-center" reverseOrder={false} />
      </VisitorsProvider>
    </QueryClientProvider>
  );
}
