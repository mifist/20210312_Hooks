import React from "react"
import ReactDOM from "react-dom"
import{QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import AppWrap from "./AppWrap"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
})


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AppWrap />
    <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)
