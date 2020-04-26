import '../../static/styles/markdownRules.less'
import Link from 'next/link'

const MdRules = () => {
    return (
        <div className="markdown-editor-introduce">
            <header className="editor-header">
                <div className="title">
                    掘金－Markdown 编辑器使用手册
                </div>
                <div className="right-box">
                    <Link href="/editor/drafts">
                        <a className="start-btn">开始创作</a>
                    </Link>
                </div>
            </header>
            <div className="main-content">
                <div className="main">
                    <div className="content-html">
                        <h3 className="heading">用掘金－Markdown 编辑器写文章</h3>
                        <p>欢迎使用 掘金－Markdown 编辑器撰写技术文章，只专注于内容和技术，不再费心排版的问题。这是一份简要的 Markdown 引导指南，希望可以帮助您顺利的开始使用 Markdown 编辑器。</p>
                        <h3 className="heading">丰富的快捷键</h3>
                        <p>本 Markdown 编辑器支持丰富的格式快捷键，可以非常便捷、轻松的使用 Markdown 语言，形成优美的排版和内容格式。</p>
                        <p>支持的快捷键有：</p>
                        <ul>
                            <li>加粗： <code>Ctrl/Cmd + B</code></li>
                            <li>标题： <code>Ctrl/Cmd + H</code></li>
                            <li>插入链接： <code>Ctrl/Cmd + K</code></li>
                            <li>插入代码： <code>Ctrl/Cmd + Shift + C</code></li>
                            <li>行内代码： <code>Ctrl/Cmd + Shift + K</code></li>
                            <li>插入图片： <code>Ctrl/Cmd + Shift + I</code></li>
                            <li>无序列表： <code>Ctrl/Cmd + Shift + L</code></li>
                            <li>撤销： <code>Ctrl/Cmd + Z</code></li>
                        </ul>
                        <h3 className="heading">常用语法</h3>
                        <h4 className="heading">标题</h4>
                        <blockquote>
                            <p>语法格式：** '#'+'空格'+'文本' **</p>
                        </blockquote>
                        <h1 className="heading">一级标题</h1>
                        <h2 className="heading">二级标题</h2>
                        <h3 className="heading">三级标题</h3>
                        <h4 className="heading">四级标题</h4>
                        <h5 className="heading">五级标题</h5>
                        <h6 className="heading">六级标题</h6>
                        <h4 className="heading">列表</h4>
                        <blockquote>
                            <p>无序列表语法格式：** '-' + '空格' ＋ '文本' **</p>
                        </blockquote>
                        <ul>
                            <li>文本一</li>
                            <li>文本二</li>
                            <li>文本三</li>
                        </ul>
                        <blockquote>
                            <p>有序列表语法格式：** '数字' + '.' + '空格' + '文本' **</p>
                        </blockquote>
                        <ol>
                            <li>文本一</li>
                            <li>文本二</li>
                            <li>文本三</li>
                        </ol>
                        <blockquote>
                            <p>任务列表语法格式：** '-' + '空格' + '[ ]' + '文本' **</p>
                        </blockquote>
                        <ul>
                            <li className="task-list-item">
                                <input checked disabled type="checkbox" /> 文本一
                            </li>
                            <li className="task-list-item">
                                <input disabled type="checkbox" /> 文本二
                            </li>
                            <li className="task-list-item">
                                <input disabled="" type="checkbox" /> 文本三
                            </li>
                        </ul>
                        <h4 className="heading">链接和图片</h4>
                        <p>在 Markdown 中插入链接不需要其他按钮，你只需要使用<code>［显示文本］(链接地址)</code>这样的格式语法即可。例如：
    <a className="md-link" href="javascript:;">稀土掘金</a>
    插入图片的语法与插入链接的语法很像，只是前面多了一个 <code>!</code>.语法如下：
    <code>![图片的标注](图片链接地址)</code></p>
                        <h4 className="heading">引用</h4>
                        <blockquote>
                            <p>语法：** '&gt;'+'空格'+'文本' **</p>
                        </blockquote>
                        <p>例如：</p>
                        <blockquote>
                            <p>Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，然后转换成格式丰富的HTML页面。</p>
                        </blockquote>
                        <h4 className="heading">表格</h4>
                        <p><strong>Markdown&emsp;Extra</strong>&emsp;表格语法：</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>项目</th>
                                    <th>价格</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>iPhone</td>
                                    <td>$560</td>
                                </tr>
                                <tr>
                                    <td>iPad</td>
                                    <td>$780</td>
                                </tr>
                                <tr>
                                    <td>iMac</td>
                                    <td>$1000</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>可以使用冒号来定义对齐方式：</p>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{'textAlign':'left'}}>项目</th>
                                    <th style={{'textAlign':'right'}}>价格</th>
                                    <th style={{'textAlign':'center'}}>数量</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{'textAlign':'left'}}>iPhone</td>
                                    <td style={{'textAlign':'right'}}>6000 元</td>
                                    <td style={{'textAlign':'center'}}>5</td>
                                </tr>
                                <tr>
                                    <td style={{'textAlign':'left'}}>iPad</td>
                                    <td style={{'textAlign':'right'}}>3800 元</td>
                                    <td style={{'textAlign':'center'}}>12</td>
                                </tr>
                                <tr>
                                    <td style={{'textAlign':'left'}}>iMac</td>
                                    <td style={{'textAlign':'right'}}>10000 元</td>
                                    <td style={{'textAlign':'center'}}>234</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4 className="heading">结语</h4>
                        <p>以上是最常见的 Markdown 的语法和格式，如果你还希望深入的学习 Markdown，可以参考这里<a target="_blank" href="https://www.appinn.com/markdown/" className="md-link">Markdown语法</a>，非常感谢使用** 掘金－Markdown 编辑器**,希望为您提供舒适的写作体验。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MdRules