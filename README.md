## 레이어 설계
monorepo 구조로 가야하나?

Next.js 기반으로 구조를 설계하다보니 철저히 SSR 컴포넌트와 CSR 컴포넌트를 확실히 나눠야한다는 것을 알게되었고, 
이전에 CSR 기반으로만 작성하던 레이어 패턴이 SSR로 인해 더 세분화 되어야하고 더 철저한 규칙성이 필요하다는 것을 느꼈다.

CSR 기반으로 프로젝트를 진행할 때의 레이어 구조이다.
```diff
React + typescript
---*---*----*---*---
src
└── /dashboard
    ├── DashboardContainer.tsx
    └── /views
        └── SearchView.tsx
```
`DashboardContainer`컴포넌트 내에 `SerachView`컴포넌트를 불러와 사용하는 구조이며
`DashboardContainer`는 하나의 웹 페이지라고 이해하면 되고, 여기에서 서버 스테이트 및 비지니스 로직을 처리한다.  
`SearchView`는 본인 함수형 컴포넌트
scope 내에서 로컬 스테이트나 UI 요소만 처리한다. 또한 서버 데이터를 받을 경우 `props`로 받아 처리한다.

SSR 기반에서 위와 같이 레이어를 설계하면 `DashboardContainer`에서 `props`를 통해 `SearchView`로 서버 데이터를
전달해줘야하므로 `DashboardContainer`는 무조건적으로 **클라이언트 컴포넌트**가 될 수 밖에 없다.

결과적으로 UI 요소를 담당하는 모든 컴포넌트가 **클라이언트 컴포넌트**가 되는 결과를 낳게된다.

CSR은 1개의 컴포넌트로 상호작용이 즉각 가능한 화면을 만들 수 있지만 SSR 기반에서는 어렵다고 볼 수 있다.

Next.js를 사용한다면 철저하게 SSR 컴포넌트와 CSR 컴포넌트를 확실히 분리하자. \
그렇게 하기 위해서는 레이어 설계를 잘해야겠지..? 
괜히 컴포넌트들이 우후죽순 늘어나지 않게 열심히 나의 하찮은 뇌를 굴려보자. 




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
