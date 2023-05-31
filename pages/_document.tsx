import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>리필드</title>
        <link 
          rel="icon" 
          type="image/png" 
          href="https://s3.ap-northeast-2.amazonaws.com/refilled.co.kr/favicon/symbol_only.png" 
          sizes="96x96">
        </link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
