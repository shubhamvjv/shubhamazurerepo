declare module 'next/app' {
  import type { ComponentType, ReactNode } from 'react'

  export type AppProps<P = Record<string, unknown>> = {
    Component: ComponentType<P & { children?: ReactNode }>
    pageProps: P
  }

  export default function App(props: AppProps): ReactNode
}

declare module 'next/head' {
  import type { Component } from 'react'
  export default class Head extends Component<{ children?: React.ReactNode }> {}
}

declare module 'next/document' {
  import type { ComponentType } from 'react'

  export const Html: ComponentType<{ lang?: string; children?: React.ReactNode }>
  export const Head: ComponentType<{ children?: React.ReactNode }>
  export const Main: ComponentType<Record<string, unknown>>
  export const NextScript: ComponentType<Record<string, unknown>>
}
