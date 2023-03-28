import { QueryClient } from 'react-query';

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 5, // 5 minutes
      refetchOnMount: 'always' as const,
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always' as const,
      // refetchInterval: false,
      refetchIntervalInBackground: false,
    },
    mutations: {
      retry: 3,
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);

export default queryClient;
