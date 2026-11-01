<div align="center">

<a href="https://datarecoveryexpert.github.io/shelfdeck/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../../site/assets/img/logo-wordmark-dark.png">
    <img src="../../site/assets/img/logo-wordmark.png" alt="ShelfDeck" width="360">
  </picture>
</a>

<p><strong>把你的开发者收藏，变成一座媒体中心。</strong><br>
将 GitHub 星标、Hugging Face 模型和各类开发工具整理成一面可视化、可搜索的海报墙，并提供不会塞满收件箱的版本更新追踪。</p>

<p>
  <a href="https://datarecoveryexpert.github.io/shelfdeck/"><strong>官网</strong></a> ·
  <a href="../../CONTRIBUTING.md"><strong>参与贡献</strong></a>
</p>

<p>
  <img alt="状态：pre-alpha" src="https://img.shields.io/badge/status-pre--alpha-F5B544?style=flat-square">
  <a href="../../LICENSE"><img alt="许可证：MIT" src="https://img.shields.io/badge/license-MIT-3DD6C6?style=flat-square"></a>
  <img alt="本地优先" src="https://img.shields.io/badge/local--first-no%20account-151924?style=flat-square">
  <img alt="支持平台" src="https://img.shields.io/badge/platforms-Web%20%7C%20iOS%20%7C%20Android%20%7C%20Extension-151924?style=flat-square">
  <a href="https://github.com/datarecoveryexpert/shelfdeck/stargazers"><img alt="GitHub 星标" src="https://img.shields.io/github/stars/datarecoveryexpert/shelfdeck?style=flat-square&color=F5B544"></a>
</p>

<p>
  <a href="../../README.md">English</a> ·
  <a href="README.tr.md">Türkçe</a> ·
  <a href="README.fr.md">Français</a> ·
  <a href="README.es.md">Español</a> ·
  <b>简体中文</b> ·
  <a href="README.ja.md">日本語</a>
</p>

<img src="../../site/assets/img/hero.jpg" alt="由开发工具组成的 ShelfDeck 海报墙" width="100%">

</div>

> [!NOTE]
> **ShelfDeck 目前处于设计与规格制定阶段。** 还没有可用的版本，下方的界面均为规划中产品的设计稿。欢迎 Star 或 Watch 本仓库，第一个构建发布时你就会收到通知。

## 为什么需要 ShelfDeck？

开发者每个月都会给上百个仓库点 Star，给几十个模型点赞。几周之后，没人还记得当初为什么收藏它、打算用在哪个项目里，更不知道它在这期间已经发布了带破坏性变更的 `v2.0`。

ShelfDeck 用一个真正值得翻阅的资料库，取代那份平铺直叙的星标列表：

| 痛点 | ShelfDeck 的做法 |
| :--- | :--- |
| **星标坟场。** 收藏的条目丢失了所有个人上下文。 | 每个条目都可以有书架、标签、笔记和采用状态（`Inbox`、`Want to Try`、`Using`、`Reference`、`Archived`）。 |
| **没有视觉记忆。** 一串串 `owner/repo` 看起来都差不多。 | 每个条目都有一张 2:3 的海报封面：项目自带的图片、程序化生成的海报，或你自己生成的 AI 插画。 |
| **错过版本发布。** Watch 一个仓库，收件箱就被各种 issue 通知淹没。 | 只为你选择追踪的条目提供一个安静的发布动态，并标出破坏性变更。 |
| **设备割裂。** 在手机上发现，在笔记本上评估。 | 可选的同步功能，通过*你自己* GitHub 账号下的私有仓库完成。没有 ShelfDeck 服务器，也无需订阅。 |

## 体验一览

<p align="center"><img src="../../site/assets/img/showcase-wall.jpg" alt="陈列在书架上的热门开源项目与 AI 模型海报墙" width="100%"><br><sub>用 ShelfDeck 的方式陈列热门项目。此为设计概念图，名称与图像归各自所有者所有。</sub></p>

<table>
  <tr>
    <td width="50%"><img src="../../site/assets/img/ui-home.jpg" alt="带有 Kodi 风格书架行的主页"><br><sub><b>主页。</b> 粘贴一个 URL，浏览 Kodi 风格的书架行。</sub></td>
    <td width="50%"><img src="../../site/assets/img/ui-detail.jpg" alt="条目详情背景视图"><br><sub><b>详情。</b> 带背景图的视图，包含笔记、许可证、版本发布和快捷操作。</sub></td>
  </tr>
  <tr>
    <td><img src="../../site/assets/img/ui-table.jpg" alt="紧凑表格视图"><br><sub><b>表格。</b> 信息密集、可排序的视图，附带项目维护健康度指标。</sub></td>
    <td><img src="../../site/assets/img/ui-kanban.jpg" alt="采用流程看板"><br><sub><b>看板。</b> 拖动条目，推进你的技术采用流程。</sub></td>
  </tr>
  <tr>
    <td><img src="../../site/assets/img/ui-grid.jpg" alt="带分面筛选的海报网格"><br><sub><b>海报网格。</b> 可按来源、语言、任务、许可证、状态和书架筛选。</sub></td>
    <td><img src="../../site/assets/img/ui-releases.jpg" alt="标出破坏性变更的版本发布动态"><br><sub><b>版本发布。</b> 只显示已追踪条目的安静动态，破坏性变更会被标出。</sub></td>
  </tr>
  <tr>
    <td><img src="../../site/assets/img/ui-radar.jpg" alt="技术雷达"><br><sub><b>雷达。</b> 你的个人技术雷达。</sub></td>
    <td><img src="../../site/assets/img/ui-health.jpg" alt="资料库健康仪表盘"><br><sub><b>健康度。</b> 久未维护的条目、许可证构成和兼容性警告。</sub></td>
  </tr>
  <tr>
    <td><img src="../../site/assets/img/ui-compare.jpg" alt="对比视图"><br><sub><b>对比。</b> 最多四个备选方案并排比较。</sub></td>
    <td><img src="../../site/assets/img/ui-stacks.jpg" alt="技术栈编辑器"><br><sub><b>技术栈。</b> 带有"依赖于"和"可替代"关系的项目配方。</sub></td>
  </tr>
  <tr>
    <td><img src="../../site/assets/img/ui-palette.jpg" alt="命令面板"><br><sub><b>Ctrl K。</b> 输入"我需要一个能做 X 的库"，即可在标题、标签和笔记中查找。</sub></td>
    <td><img src="../../site/assets/img/ui-settings.jpg" alt="包含三个使用层级的设置页"><br><sub><b>设置。</b> 三个层级集中在一处，密钥始终留在设备上。</sub></td>
  </tr>
  <tr>
    <td><img src="../../site/assets/img/ui-share.jpg" alt="分享书架"><br><sub><b>分享。</b> 将书架发布到 GitHub Pages，或导出为 awesome-list。</sub></td>
    <td><img src="../../site/assets/img/ui-mobile.jpg" alt="移动应用界面"><br><sub><b>移动端。</b> 海报网格、详情页，以及通过系统分享菜单快速收藏。</sub></td>
  </tr>
</table>

## 即刻上手，按需扩展

<table>
  <tr>
    <td width="33%" valign="top">
      <img src="../../site/assets/img/tier-1.png" alt="" width="72"><br>
      <h3>1 · 即开即用的本地资料库</h3>
      <p>无需注册，无需令牌。粘贴 GitHub 或 Hugging Face 的 URL，元数据只会从公开 API 获取一次并保存在浏览器中，之后即可离线使用。</p>
    </td>
    <td width="33%" valign="top">
      <img src="../../site/assets/img/tier-2.png" alt="" width="72"><br>
      <h3>2 · 版本追踪 &amp; AI 封面</h3>
      <p>添加你自己的 GitHub PAT 或 Hugging Face 令牌，即可批量导入星标和点赞、追踪版本发布并生成封面。密钥始终保存在你的设备上。</p>
    </td>
    <td width="33%" valign="top">
      <img src="../../site/assets/img/tier-3.png" alt="" width="72"><br>
      <h3>3 · 同步 &amp; 分享</h3>
      <p>连接 GitHub 后会创建一个私有的 <code>shelfdeck-vault</code> 仓库。Web、iOS 和 Android 通过它同步，你还可以把书架发布到 GitHub Pages。</p>
    </td>
  </tr>
</table>

## 功能特性

- **媒体中心式浏览。** 海报网格、书架轮播、影院感十足的详情页，以及 `Ctrl+K` 命令面板。
- **深度的 GitHub 与 Hugging Face 元数据。** Star 数、许可证、语言、topics、最新版本、模型参数量、pipeline 任务和量化版本。
- **为实际工作设计的视图。** 表格、看板、时间线、并排对比、技术雷达，以及资料库健康仪表盘。
- **智能标签与合集。** 根据元数据自动打标签（`lang:rust`、`task:tts`、`license:mit`），支持基于规则的智能书架和"查找替代品"操作。
- **技术栈与关联关系。** 把条目组合成项目配方，并记录"依赖于""可替代""取代"等关系。
- **许可证与风险提示。** 兼容性警告、维护健康度徽章以及破坏性变更标记。
- **浏览器扩展。** 在 GitHub 和 Hugging Face 页面上添加"Save to ShelfDeck"按钮。
- **分享你的精选。** 将书架以可视化画廊的形式发布到 GitHub Pages，或导出为 `awesome-list` 格式的 Markdown 文件。

<p align="center"><img src="../../site/assets/img/ui-extension.jpg" alt="使用浏览器扩展收藏仓库" width="88%"></p>

## 封面引擎

大多数仓库都没有海报图，所以 ShelfDeck 会帮你做一张。所有封面都在你自己的设备上生成：

1. **提取。** 使用自定义的社交预览图和 README 头图，并过滤掉千篇一律的模板卡片和徽章。
2. **程序化生成。** 确定性、零成本的 SVG 海报，提供 *Criterion Dev*、*Terminal Blueprint* 和 *Model Spec Card* 等主题。
3. **AI 生成。** 通过本地桥接使用你现有的 `codex` 或 `gemini` CLI 订阅，或者使用你自己的 OpenAI、Gemini、fal.ai、Replicate、Together AI 密钥，也可以接入本地 ComfyUI。

<table>
  <tr>
    <td width="50%"><img src="../../site/assets/img/poster-themes.jpg" alt="程序化海报主题"><br><sub><b>程序化主题。</b> Criterion Dev、Terminal Blueprint、Model Spec Card。</sub></td>
    <td width="50%"><img src="../../site/assets/img/ui-cover-studio.jpg" alt="封面工作室对话框"><br><sub><b>封面工作室。</b> 可选程序化生成、本地 CLI 桥接或你自己的图像 API。</sub></td>
  </tr>
</table>

## 架构

```mermaid
flowchart LR
    subgraph Clients["Clients (TypeScript monorepo)"]
        Web["Web PWA"]
        Mobile["iOS / Android"]
        Ext["Browser extension"]
    end
    Local[("Local DB<br/>IndexedDB / SQLite")]
    Bridge["Local CLI bridge<br/>codex · gemini"]
    BYOK["Image APIs (BYOK)"]
    subgraph GH["Your GitHub account (optional)"]
        Vault["shelfdeck-vault"]
        Action["Release poller Action"]
        Pages["GitHub Pages shelves"]
    end
    Upstream["GitHub & Hugging Face public APIs"]

    Web --> Local
    Mobile --> Local
    Ext --> Web
    Web -.-> Bridge
    Web -.-> BYOK
    Web <-.->|sync| Vault
    Mobile <-.->|sync| Vault
    Action --> Vault
    Vault --> Pages
    Web --> Upstream
    Action --> Upstream
```

实线部分无需任何账号即可使用，虚线部分需要你主动开启。ShelfDeck 没有后端，也没有集中的用户数据库。

## 路线图

| 阶段 | 重点 | 状态 |
| :--- | :--- | :--- |
| 1 | 基础与 Web MVP：本地资料库、程序化封面、多种视图、项目官网 | 🟡 设计中 |
| 2 | 浏览器扩展、令牌、批量导入、版本追踪、awesome-list 导出 | ⚪ 计划中 |
| 3 | Vault 同步、版本轮询 Action、公开书架画廊 | ⚪ 计划中 |
| 4 | 本地 CLI 桥接与多服务商封面工作室 | ⚪ 计划中 |
| 5 | 支持系统分享菜单收藏的 iOS 与 Android 应用 | ⚪ 计划中 |
| 6 | 包管理仓库、AI 版本摘要、社区主题 | ⚪ 计划中 |

## 规划中的 monorepo 结构

```text
shelfdeck/
├── apps/
│   ├── web/            # Next.js PWA and static public shelf viewer
│   ├── mobile/         # Expo (React Native) for iOS and Android
│   └── extension/      # Chrome / Firefox extension (Manifest V3)
├── packages/
│   ├── core/           # Source parsers, Zod schemas, exporters
│   ├── sync-engine/    # Git Trees API sync, diff and merge
│   ├── cover-engine/   # Procedural posters and AI provider adapters
│   ├── local-bridge/   # Node CLI bridging local codex / gemini
│   └── ui/             # Design tokens and poster primitives
├── templates/vault-starter/
└── docs/
```

## 参与贡献

ShelfDeck 在设计时预留了四个门槛很低的贡献方向：**海报主题**、**数据源适配器**、**图像服务商适配器**和**翻译**。其中大部分都不需要了解同步或认证相关的代码。请先阅读 [CONTRIBUTING.md](../../CONTRIBUTING.md)，并遵守[行为准则](../../CODE_OF_CONDUCT.md)。

发现了安全问题？请阅读 [SECURITY.md](../../SECURITY.md)，不要直接提交公开 issue。

## 维护者

ShelfDeck 由 **a.ceyhan**（[@datarecoveryexpert](https://github.com/datarecoveryexpert)）创建并维护，他是伊斯坦布尔 **GOLD DATA Teknoloji** 的取证专家。

- 网站：<https://www.goldverikurtarma.com>
- 邮箱：[a.ceyhan@goldverikurtarma.com](mailto:a.ceyhan@goldverikurtarma.com)
- 其他项目：[Tahlis™ DiskNabız](https://github.com/datarecoveryexpert/Tahlis-DiskNabiz)，一款免费、无遥测的 Windows 磁盘健康监测工具

## 品牌

<p align="center"><img src="../../site/assets/img/brand-sheet.jpg" alt="ShelfDeck 品牌规范：标志、配色与字体" width="88%"></p>

Paper `#FAF8F4` · Ink `#14161C` · Amber `#F2A516` · Teal `#0E8F80` · Coral `#E5533D`。标志文件位于 [`site/assets/img`](../../site/assets/img)。

## 许可证

[MIT](../../LICENSE) © 2026 GOLD DATA Teknoloji
