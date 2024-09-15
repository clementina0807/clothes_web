import { createApp } from "vue";
import "@/assets/css/index.css";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";
import Antd from "ant-design-vue";
import i18n from "./i18n";
import "@/mock/index.js";

createApp(App).use(i18n).use(Antd).use(pinia).use(router).mount("#app");
