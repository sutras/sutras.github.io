
const api = require('./api');

function hangleOptionDefault(_default) {
  if (typeof _default === 'string') {
    return /^%(.*?)%$/.test(_default) ? RegExp.lastParen : '"' + _default + '"';
  } else if (typeof _default === 'function') {
    return _default.toString();
  } else {
    return _default;
  }
}

function genOptions(options) {
  if (!options) {
    return '';
  }
  return `<h4>配置选项</h4>
  <div class="table-responsive">
    <table class="table table-condensed">
      <thead>
        <tr>
          <th>参数</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        ${
          options.map((option) => {
            if (option.children) {
              return `<tr>
                <td colspan="2">${option.key} {</td>
                <td>${option.explain}</td>
              </tr>
              ${
                option.children.map((option) => {
                  return `<tr class="subparam">
                    <td>${option.key}</td>
                    <td>${hangleOptionDefault(option.default)}</td>
                    <td>${option.explain}</td>
                  </tr>`
                }).join('')
              }
              <tr>
                <td colspan="3">}</td>
              </tr>`;
            } else {
              return `<tr>
                <td>${option.key}</td>
                <td>${hangleOptionDefault(option.default)}</td>
                <td>${option.explain}</td>
              </tr>`;
            }
          }).join('')
        }
      </tbody>
    </table>
  </div>`;
}

function genMethods(methods) {
  if (!methods) {
    return '';
  }
  return `<h4>方法</h4>
    <div class="table-responsive">
      <table class="table table-condensed">
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          ${
            methods.map((option) => {
              return `<tr>
                <td>${option.name}</td>
                <td>${option.explain}</td>
              </tr>`;
            }).join('')
          }
        </tbody>
      </table>
    </div>`;
}
function genEvents(events) {
  if (!events) {
    return '';
  }
  return `<h4>事件</h4>
    <div class="table-responsive">
      <table class="table table-condensed">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          ${
            events.map((option) => {
              return `<tr>
                <td>${option.name}</td>
                <td>${option.explain}</td>
              </tr>`;
            }).join('')
          }
        </tbody>
      </table>
    </div>`;
}
function genProperties(properties) {
  if (!properties) {
    return '';
  }
  return `<h4>属性</h4>
    <div class="table-responsive">
      <table class="table table-condensed">
        <thead>
          <tr>
            <th>属性名</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          ${
            properties.map((option) => {
              return `<tr>
                <td>${option.name}</td>
                <td>${option.explain}</td>
              </tr>`;
            }).join('')
          }
        </tbody>
      </table>
    </div>`;
}

module.exports = api.map((item) => {
  return `<h3>${item.title}</h3>`
    + genOptions(item.options)
    + genMethods(item.methods)
    + genProperties(item.properties)
    + genEvents(item.events);
}).join('\n');