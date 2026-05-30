## 1. 架构设计

```mermaid
flowchart TD
    "前端 Vue 应用" --> "路由层 (Vue Router)"
    "路由层" --> "首页"
    "路由层" --> "教程页面"
    "路由层" --> "速查表页面"
    "教程页面" --> "教程数据 (JSON)"
    "速查表页面" --> "速查数据 (JSON)"
    "首页" --> "教程数据 (JSON)"
    "首页" --> "速查数据 (JSON)"
```

纯前端架构，所有教程和速查数据以 JSON 格式内嵌在项目中，无需后端服务。

## 2. 技术说明

- 前端：Vue@3 + TypeScript + Tailwind CSS@3 + Vite
- 初始化工具：vite-init
- 后端：无
- 数据库：无，使用静态 JSON 数据
- 代码高亮：Prism.js / highlight.js
- 状态管理：Vue 响应式 (composables)

## 3. 路由定义

| 路由 | 用途 |
|------|------|
| / | 首页，展示 Hero、特性、教程导航、速查入口 |
| /tutorial/:slug | 教程章节页面，展示对应章节内容 |
| /cheatsheet | 速查表页面，展示分类速查卡片 |
| /cheatsheet/:category | 速查表分类页面，展示特定分类的速查卡片 |

## 4. 数据结构定义

### 4.1 教程章节数据

```typescript
interface TutorialChapter {
  slug: string;
  title: string;
  description: string;
  order: number;
  sections: TutorialSection[];
}

interface TutorialSection {
  id: string;
  title: string;
  content: string;
  codeExample?: {
    code: string;
    language: string;
    description: string;
  };
}
```

### 4.2 速查表数据

```typescript
interface CheatSheetItem {
  id: string;
  title: string;
  description: string;
  category: string;
  code: string;
  tags: string[];
}

type CheatSheetCategory =
  | "基础类型"
  | "接口与类型别名"
  | "函数"
  | "类"
  | "泛型"
  | "枚举"
  | "高级类型"
  | "模块与命名空间"
  | "装饰器"
  | "工具类型";
```
