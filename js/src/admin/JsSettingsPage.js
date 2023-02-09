import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

const settingsPrefix = 'briantran-inject-header.';

export default class JsSettingsPage extends ExtensionPage {
  content() {
    return [
      m('.container', [
        m('.JsSettingsPage', [
          m('h3', app.translator.trans('briantran-inject-header.admin.inject_header_label')),
          m('.Form-group', [
            m('label', app.translator.trans('briantran-inject-header.admin.js_code')),
                m('input.FormControl', {
                  bidi: this.setting(settingsPrefix + 'js_code'),
                  placeholder: 'Copy and paste the js code here',
                }),
          ]),
          this.submitButton(),
        ]),
      ]),
    ];
  }
}
