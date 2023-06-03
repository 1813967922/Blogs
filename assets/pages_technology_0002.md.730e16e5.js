import{_ as e,c as a,o as n,d as s}from"./app.6e608ab5.js";const _=JSON.parse('{"title":"pnpm","description":"","frontmatter":{},"headers":[{"level":2,"title":"硬连接","slug":"硬连接","link":"#硬连接","children":[]},{"level":2,"title":"软连接","slug":"软连接","link":"#软连接","children":[]},{"level":2,"title":"Monorepo","slug":"monorepo","link":"#monorepo","children":[]},{"level":2,"title":"创建Monorepo结构项目","slug":"创建monorepo结构项目","link":"#创建monorepo结构项目","children":[]}],"relativePath":"pages/technology/0002.md","lastUpdated":1685698983000}'),l={name:"pages/technology/0002.md"},o=s(`<h1 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h1><h2 id="硬连接" tabindex="-1">硬连接 <a class="header-anchor" href="#硬连接" aria-hidden="true">#</a></h2><h2 id="软连接" tabindex="-1">软连接 <a class="header-anchor" href="#软连接" aria-hidden="true">#</a></h2><h2 id="monorepo" tabindex="-1">Monorepo <a class="header-anchor" href="#monorepo" aria-hidden="true">#</a></h2><p>什么是<a href="./../specs/0000.html">Monorepo</a> 模块抽离再利用</p><h2 id="创建monorepo结构项目" tabindex="-1">创建Monorepo结构项目 <a class="header-anchor" href="#创建monorepo结构项目" aria-hidden="true">#</a></h2><ul><li>1、初始化package.json文件</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>2、和package.json文件同级创建pnpm-workspace.yaml文件</li></ul><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">package</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packages/*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,10),p=[o];function r(t,i,c,d,h,m){return n(),a("div",null,p)}const b=e(l,[["render",r]]);export{_ as __pageData,b as default};
