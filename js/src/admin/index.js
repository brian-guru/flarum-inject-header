import app from 'flarum/admin/app';

app.initializers.add('briantran-inject-header', (app) => {
  app.extensionData.for('briantran-inject-header')
  .registerSetting({
    setting: 'briantran-inject-header.js_code',
    type: 'string',
    label: app.translator.trans('briantran-inject-header.admin.inject_header_label'),
    help: app.translator.trans('briantran-inject-header.admin.js_code'),
  });
});
