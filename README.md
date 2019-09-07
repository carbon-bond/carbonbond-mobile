搭建開發環境請參閱以下連結
https://reactnative.cn/docs/getting-started/

為了讓手機可以即時從 JS server 抓資料，電腦必須使用實體 IP，或是讓手機與電腦連同一個區網。

如果 `yarn run-android` 無法順利開啟 JS Server，可以在一個終端裡執行 `yarn start`，另一個終端執行 `yarn run-android`。

如果出現了 `Keystore file '[Project-Folder]/android/app/debug.keystore' not found for signing config 'debug'` 的問題，解決方式為：
```sh
cd android/app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```