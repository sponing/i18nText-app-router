
const lang = ['en-US', 'zh-CN']
module.exports = {
    i18n: {
        locales: ["default", ...lang],
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
