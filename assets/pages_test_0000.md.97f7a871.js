import{_ as s,c as n,o as a,a as l}from"./app.35d8b6f4.js";const C=JSON.parse('{"title":"Seleuime识别验证码","description":"","frontmatter":{},"headers":[{"level":2,"title":"完整代码","slug":"完整代码","link":"#完整代码","children":[]}],"relativePath":"pages/test/0000.md","lastUpdated":null}'),p={name:"pages/test/0000.md"},o=l(`<h1 id="seleuime识别验证码" tabindex="-1">Seleuime识别验证码 <a class="header-anchor" href="#seleuime识别验证码" aria-hidden="true">#</a></h1><p>使用Selenium进行自动化测试时，遇到表单需要输入验证码时解决方法</p><p>python版本为3.11.0、pip版本为23.0.1</p><ol><li>selenium==3.141.0</li><li>pytesseract==0.3.10</li><li>Pillow==9.5.0</li><li>tesseract-ocr-w64-setup-v5.3.0.20221214</li><li>tesseract-ocr<a href="https://digi.bib.uni-mannheim.de/tesseract/" target="_blank" rel="noreferrer">下载地址</a>与<a href="https://tesseract-ocr.github.io/" target="_blank" rel="noreferrer">官方网站</a></li></ol><div class="tip custom-block"><p class="custom-block-title">提示</p><ol><li>Tesseract-OCR安装好后需要在添加系统环境变量,TESSDATA_PREFIX=tesseract-ocr安装位置</li><li>修改安装的Python依赖pytesseract的pytesseract.py文件中的tesseract_cmd = tesseract改为tesseract_cmd = tesseract-ocr安装位置。pytesseract.py文件的位置在你的python安装目录中的\\Lib\\site-packages\\pytesseract下</li></ol></div><h2 id="完整代码" tabindex="-1">完整代码 <a class="header-anchor" href="#完整代码" aria-hidden="true">#</a></h2><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">博思学习平台</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> PIL </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Image</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> selenium </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> webdriver</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> pytesseract </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> ts</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">driver </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> webdriver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Chrome</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全屏</span></span>
<span class="line"><span style="color:#A6ACCD;">driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">maximize_window</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 科大讯飞教育，南宁学院二级平台</span></span>
<span class="line"><span style="color:#A6ACCD;">driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://nnxy.iflysse.com/Login_nnxy.aspx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换账号密码登录</span></span>
<span class="line"><span style="color:#A6ACCD;">driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find_element_by_xpath</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/html/body/div[1]/div[2]/div[2]/div[2]/div[1]/div[2]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">click</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获取账号输入框</span></span>
<span class="line"><span style="color:#A6ACCD;">driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find_element_by_id</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lo-account</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">send_keys</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">账号</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获取密码输入框</span></span>
<span class="line"><span style="color:#A6ACCD;">driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find_element_by_id</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lo-psw</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">send_keys</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">密码</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获取验证码</span></span>
<span class="line"><span style="color:#A6ACCD;">img </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find_element_by_id</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">imgCode</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获得验证码img标签的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">location</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">location</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">y</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获得验证码img标签的宽高</span></span>
<span class="line"><span style="color:#A6ACCD;">y1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">x1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> img</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 计算验证码img标签的面积</span></span>
<span class="line"><span style="color:#A6ACCD;">right </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> x </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> x1</span></span>
<span class="line"><span style="color:#A6ACCD;">left </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> y </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> y1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 截图整个网页保存为图片</span></span>
<span class="line"><span style="color:#A6ACCD;">driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save_screenshot</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 加载整个网页的截图定位到验证码标签并截取图片</span></span>
<span class="line"><span style="color:#A6ACCD;">image </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">image2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">crop</span><span style="color:#89DDFF;">((</span><span style="color:#82AAFF;">x</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> y</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> right</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> left</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 保存截取的验证码图片</span></span>
<span class="line"><span style="color:#A6ACCD;">image2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ocr图片转文字获取验证码图片中的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">code </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">image_to_string</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;验证码:&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> code</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获取验证码输入框，写入识别出来的验证码</span></span>
<span class="line"><span style="color:#A6ACCD;">driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find_element_by_id</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lo-code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">send_keys</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">code</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 登录按钮</span></span>
<span class="line"><span style="color:#A6ACCD;">driver</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find_element_by_id</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">login</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">click</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 打印网站标题</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">f</span><span style="color:#C3E88D;">&quot;网站标题&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> driver</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,7),e=[o];function t(c,r,F,D,y,i){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
