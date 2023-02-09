import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import ItemList from 'flarum/common/utils/ItemList';


export default class JsSettingsPage extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);
    this.setting = this.setting.bind(this);
  }
  content() {
    return [
      <div className="container">
          <div className="Form">{this.settingsItems().toArray()}</div>
      </div>,
    ];
  }

  settingsItems() {
    const items = new ItemList();

    items.add('settings-fields', <div className="Form-group">{this.settingsFields().toArray()}</div>, 100);

    items.add('submit', this.submitButton(), 0);

    return items;
  }

  settingsFields() {
    const items = new ItemList();

    items.add('inject_header_label', <h2>{app.translator.trans('briantran-inject-header.admin.inject_header_label')}</h2>, 110);

    items.add(
      'js_code',
      <div className="Form-group">
        <label>{app.translator.trans('briantran-inject-header.admin.js_code')}</label>
        <textarea required className="FormControl" bidi={this.setting('briantran-inject-header.js_code')} />
      </div>,
      100
    );
    return items;
  }
}
