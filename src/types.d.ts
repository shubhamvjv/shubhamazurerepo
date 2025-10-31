declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}

declare module 'next/head' {
  import { Component } from 'react'
  export default class Head extends Component {}
}

declare module 'next/document' {
  export { Html, Head, Main, NextScript } from 'next/dist/pages/_document'
}
