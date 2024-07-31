/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      // styledComponents 활성화
      styledComponents: true
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // 프로덕션 환경에서는 리액트 테스팅 라이브러리에서 사용하는 data-tesid 속성을 삭제
        reactRemoveProperties: { properties: ['^data-tesid$'] },
      }
    }

    return compilerConfig
  })(),
  // 교차 출처 리소스 공유(CORS)에서의 쿠키 전송을 피하기 위해 Next.js의 Rewrites 기능을 사용해 프락시 설정
  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      }
    ]
  }
};

export default nextConfig
