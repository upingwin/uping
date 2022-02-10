import{H as e,s as a,m as t,K as o}from"./vendor.2a2ad3ae.js";const n={class:"prose prose-sm m-auto text-left"},p=o(`<h2>File-based Routing</h2><p>Routes will be auto-generated for Vue files in this dir with the same file structure. Check out <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener"><code>vite-plugin-pages</code></a> for more details.</p><h3>Path Aliasing</h3><p><code>~/</code> is aliased to <code>./src/</code> folder.</p><p>For example, instead of having</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> isDark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../../composables&#39;</span>
</code></pre><p>now, you can use</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> isDark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;~/composables&#39;</span>
</code></pre>`,8),c=[p],g=[],h={setup(r,{expose:s}){return s({frontmatter:{meta:[]}}),e({meta:[]}),(d,u)=>(a(),t("div",n,c))}};export{h as default,g as meta};
