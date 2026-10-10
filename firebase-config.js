// 社用車管理アプリ Firebase 設定（プロジェクト: sharyo-demo）
// Firebase JS SDK v12.19.0（CDN / script type="module" で読み込む）
export const firebaseConfig = {
  apiKey: "AIzaSyD_2RnfR8H2fJRIMA2jA7yU_txu5vRD_SY",
  authDomain: "sharyo-demo.firebaseapp.com",
  projectId: "sharyo-demo",
  storageBucket: "sharyo-demo.firebasestorage.app",
  messagingSenderId: "612095565918",
  appId: "1:612095565918:web:4b5b6502a894bc14fb14cf"
};
export const FIREBASE_SDK_VERSION = "12.19.0";
// プッシュ通知の公開鍵（Firebase コンソール → プロジェクトの設定 → Cloud Messaging → ウェブプッシュ証明書 の「鍵ペア」）
// 空のあいだは通知の機能を出さない（sharyo-demo の鍵はまだ作っていない）
export const VAPID_KEY = "";
