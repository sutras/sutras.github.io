const ejs = require('ejs');
const fs = require('fs');
const hljs = require('highlight.js');

const demo = require('./demo/demo');
const apiHTML = require('./api/apiHTML');

function getFileStats(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      stats.size;
      if (err) {
        reject();
      } else {
        resolve(stats);
      }
    });
  });
}

function listToTree(list) {
  const tree = [];
  list.forEach((item) => {
    if (item.parent === null) {
      tree.push(item);
    } else {
      let children = item.parent.children;
      if (!children) {
        children = item.parent.children = [];
      }
      children.push(item);
    }
  });
  return tree;
}

function treeToMenu(tree) {
  let uuid = 0;  // 避免标题相同
  return '<ul>' + (function recurse(nodes) {
    return nodes.reduce((total, node) => {
      let dom = `<a href="#${++uuid + node.title}">${node.title}</a>`;
      if (node.children && node.children.length !== 0) {
        dom += '<ul>' + recurse(node.children) + '</ul>';
      }
      return total + '<li>' + dom + '</li>';
    }, '');
  })(tree) + '</ul>';
}

function genMenuHTML(html) {
  // 提取标题
  let titleArray = [];
  while (rTitle.test(html)) {
    titleArray.push({
      title: RegExp.$2,
      num: Number(RegExp.$1)
    });
  }

  // 添加父节点的引用
  let prevItem;
  titleArray.forEach((item, index) => {
    item.id = index;
    let prevNum = prevItem && prevItem.num;
    let num = item.num;
    if (prevNum === void 0) {
      item.parent = null;
    } else if (prevNum < num) {
      item.parent = prevItem;
    } else if (prevNum === num) {
      item.parent = prevItem.parent;
    } else {
      let layer = prevNum - num;
      let parent = prevItem.parent;
      while (layer--) {
        parent = parent.parent;
      }
      item.parent = parent;
    }
  
    prevItem = item;
  });

  // 生成菜单dom结构
  return treeToMenu(listToTree(titleArray));
}

const rTitle = /<h([2-6])>([\s\S]*?)<\/h\1>/g;
const rPreCode = /(?:<pre>\s*<code(?:\s*lang="(.*?)")?>)\s*([\s\S]*?)\s*(?:<\/code>\s*<\/pre>)/g;

// 生成案例演示DOM结构
let demoHTML = demo.map((item) => {
  return `<h3>${item.title}</h3>
  <div class="demo">
    <div class="demo-header">
      <span class="demo-label">演示</span>
      <span class="demo-label">代码</span>
    </div>
    <div class="demo-body">
      <div class="demo-panel demo-stage">
        ${item.dom}
        ${item.script}
      </div>
      <div class="demo-panel demo-code">
      <pre>
        <code lang="html">
          ${item.dom}\n${item.script}
        </code>
      </pre>
      </div>
    </div>
  </div>`;
}).join('\n');


(async () => {
  const uncompressedSize = (await getFileStats(`${process.cwd()}/assets/js/galaxy.js`)).size;
  const compressedSize = (await getFileStats(`${process.cwd()}/assets/js/galaxy.min.js`)).size;

  // 生成视图
  ejs.renderFile('./template/index.ejs', {
    hljsStyle: fs.readFileSync(`${process.cwd()}/node_modules/highlight.js/styles/github.css`).toString(),
    uncompressedSize: (uncompressedSize / 1024).toFixed(2) + 'KB',
    compressedSize: (compressedSize / 1024).toFixed(2) + 'KB',
    demoHTML,
    apiHTML
  }, (err, html) => {
    // console.log(err);
    let uuid = 0;  // 避免标题相同

    html = html
    // 生成锚点
    .replace(rTitle, (m, g1, g2) => `<a name="${++uuid + g2}"></a>${m}`)

    // 代码高亮
    .replace(rPreCode, (m, g1, g2) => {
      return '<pre class="hljs"><code>'
        + hljs.highlight(g2, {language: g1 || 'text'}).value.replace(/^\n*|\n*$/g, '')
        + '</code></pre>'
    })

    // 替换菜单占位
    .replace('%aside%', genMenuHTML(html));
  
    // 生成文件
    fs.writeFileSync('./index.html', html);
  });
})();
