import "./globals.css";
import Script from 'next/script';

const GA_Measurement_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export const metadata = {
  title: "서울 지하철역 이름 뜻과 유래",
  description: "서울 지하철역들의 유래와 각 역명의 의미를 검색해 볼 수 있는 사이트입니다.",
  icons: {
		icon: "/favicon.png",
	}
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
      <meta name="google-site-verification" content="ohrGnA7RsHT30X375ixKOmz7HJIZHM3ZBCPU3Y2ootg" />
      <meta name="naver-site-verification" content="c683e5352a3b6b828107057ea5e1f2d76596ba3c" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-4HQ7PVQH4J"></script>

      <meta property="og:title" content="서울 지하철역 이름 뜻과 유래"></meta>
      <meta property="og:description" 
      content="서울 지하철역들의 유래와 각 역명의 의미를 검색해 볼 수 있는 사이트입니다."></meta>
      <meta property="og:image" content="/ogimage.png"></meta>

      <meta name="google-adsense-account" content="ca-pub-2654234461039881"></meta>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2654234461039881"
      crossorigin="anonymous"></script>
      </head>
      <body>
        <header>
          <h1>🚉 서울 지하철역 이름의 유래</h1>
        </header>

        {children}

        <footer>
          <div>
            Copyright 2024. 'Designer DK' All rights reserved.
          </div>
          <img src="/dklogo.svg"></img>
          <div>
            Contact : tupacalypse@naver.com
          </div>
        </footer>
      </body>
    </html>
  );
}
