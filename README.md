## 고민 거리
monorepo 구조로 가야하나?

레이아웃을 따로하면 구조가 더러워질 것 같은데..
흠..흠.ㅎㅁ.ㅎ.므....

Next.js 기반으로 구조를 설계하다보니 철저히 SSR 컴포넌트와 CSR 컴포넌트를 확실히 나눠야한다는 것을 알게되었고, 
이전에 CSR 기반으로만 작성하던 레이어 패턴이 SSR로 인해 더 세분화 되어야하고 더 철저한 규칙성이 필요하다는 것을 느꼈다.

이유는 다음과 같다. 




[//]: # (This is a [Next.js]&#40;https://nextjs.org/&#41; project bootstrapped with [`create-next-app`]&#40;https://github.com/vercel/next.js/tree/canary/packages/create-next-app&#41;.)

[//]: # ()
[//]: # (## Getting Started)

[//]: # ()
[//]: # (First, run the development server:)

[//]: # ()
[//]: # (```bash)

[//]: # (npm run dev)

[//]: # (# or)

[//]: # (yarn dev)

[//]: # (# or)

[//]: # (pnpm dev)

[//]: # (```)

[//]: # ()
[//]: # (Open [http://localhost:3000]&#40;http://localhost:3000&#41; with your browser to see the result.)

[//]: # ()
[//]: # (You can start editing the page by modifying `app/boardcontainer.tsx`. The page auto-updates as you edit the file.)

[//]: # ()
[//]: # (This project uses [`next/font`]&#40;https://nextjs.org/docs/basic-features/font-optimization&#41; to automatically optimize and load Inter, a custom Google Font.)

[//]: # ()
[//]: # (## Learn More)

[//]: # ()
[//]: # (To learn more about Next.js, take a look at the following resources:)

[//]: # ()
[//]: # (- [Next.js Documentation]&#40;https://nextjs.org/docs&#41; - learn about Next.js features and API.)

[//]: # (- [Learn Next.js]&#40;https://nextjs.org/learn&#41; - an interactive Next.js tutorial.)

[//]: # ()
[//]: # (You can check out [the Next.js GitHub repository]&#40;https://github.com/vercel/next.js/&#41; - your feedback and contributions are welcome!)

[//]: # ()
[//]: # (## Deploy on Vercel)

[//]: # ()
[//]: # (The easiest way to deploy your Next.js app is to use the [Vercel Platform]&#40;https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme&#41; from the creators of Next.js.)

[//]: # ()
[//]: # (Check out our [Next.js deployment documentation]&#40;https://nextjs.org/docs/deployment&#41; for more details.)
