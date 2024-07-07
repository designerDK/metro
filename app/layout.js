import "./globals.css";

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
