- [简体中文](README.md)
- [English](README-en.md)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev





# I18nText-Router

在 Next.js 14 中使用 `i18ntext` 库处理国际化，可以通过创建一个 `i18n` 配置文件和使用中间件来设置语言环境。下面是详细步骤：

### 1. 安装依赖

首先，安装 `i18next` , `react-i18next` 和 `next-i18next`（如果还未安装）：

```Shell
npm install i18next next-i18next react-i18next
```

### 2. 创建 `i18n` 配置文件

在项目根目录下创建一个 `next-i18next.config.js` 文件：

#### `next-i18next.config.js`

```JavaScript

const path = require('path')
const lang = ['en-US', 'zh-CN']
module.exports = {
    i18n: {
        locales: ["default", ...lang],
        defaultLocale: "en-US",
    },
    localePath: path.resolve('./locales'),
}

```



高级配置

```JavaScript

const lang = ['en-US', 'zh-CN']
module.exports = {
    i18n: {
        locales: [...lang],
        defaultLocale: "zh-CN",
    },
    localeExtension: "json", // 语言文件的扩展名
    defaultNS: "common", // 默认命名空间
    localePath: "./locales", // 语言文件的路径
    reloadOnPrerender: false, // 在服务器端渲染期间不重新加载语言文件
    // serializeConfig: false, // 不将配置序列化并传递到客户端
    strictMode: true, // 启用严格模式
    nsMode: "zh-CN", // 使用 en-US 作为命名空间模式
    use: [], // 不使用任何插件
    supportedLngs: [...lang], // 支持的语言列表
    // fallbackLng: "en-US", // 指定回退语言为 en-US
    // compatibilityJSON: "v3", // 确保 JSON 格式与 v3 版本兼容
    // react: { useSuspense: false }, // 不使用 React 的 Suspense 特性
    // load: "languageOnly", // 仅加载语言文件，而不加载具体区域的文件
}
```



### 3. 配置 `next.config.js`

更新 `next.config.js` 文件以使用 `next-i18next` 配置：

如果是next.config.mjs

```JavaScript
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  i18n,
  reactStrictMode: true,
};

export default nextConfig;
```



#### `next.config.js`

```JavaScript
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
};
```

### 4. 创建国际化文件夹和翻译文件

在 `public` 文件夹中创建一个 `locales` 文件夹，并在其中创建语言文件夹（如 `en` 和 `zh`），然后创建翻译 JSON 文件。

#### 文件结构

```React
locales/
    ├── en-US/
    │   └── common.json
    │   └── header.json
    └── zh-CN/
        └── common.json
        └── header.json
```

#### 示例翻译文件 `common.json`

##### `locales/en-US/common.json`

```JSON
{
  "welcome": "Welcome"
}
```

##### `/locales/zh-CN/common.json`

```JSON
{
  "welcome": "欢迎"
}
```



##### `locales/en-US/header.json`

```JSON
{
  "title": "title"
}
```

##### `/locales/zh-CN/header.json`

```JSON
{
  "title": "标题"
}
```







### 5. 初始化 `next-i18next`

创建 `_app.js` 文件，并在其中初始化 `next-i18next`。

#### `pages/_app.js`

```JavaScript
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
```

### 6. 使用 `i18ntext` 进行翻译

在页面组件中使用 `useTranslation` 钩子进行翻译。

#### 示例页面组件

##### `pages/index.js`

```JavaScript
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('common');
      // 也可以这样处理
  const { t: tHeader } = useTranslation('header');

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <h1>{t('title'), { ns: 'header' }}</h1>
      // 也可以这样处理
      <h1>{tHeader('header')}</h1>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    // 如果需要加载header的翻译，需要在这里添加header
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
    },
  };
}
```

### 7. 配置国际化中间件（可选） 不用选择

你可以在 `next.config.js` 中配置国际化中间件以自动检测用户语言：

#### 更新 `next.config.js`

```JavaScript
const { i18n } = require('./next-i18next.config');
const { redirect } = require('next/dist/server/api-utils');

module.exports = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: false,
      },
      {
        source: '/zh',
        destination: '/zh',
        permanent: false,
      },
    ];
  },
};
```

### 总结

通过这些步骤，你可以在 Next.js 14 项目中使用 `i18ntext` 进行国际化处理。配置 `next-i18next` 来管理翻译文件，并在页面组件中使用 `useTranslation` 钩子进行翻译。这样，你可以轻松地管理和切换多种语言版本的内容。

