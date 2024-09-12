import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import ToastService from "primevue/toastservice";
import ConfirmDialog from "primevue/confirmdialog";
import DataTable from "primevue/datatable";
import Select from "primevue/select";
import Dialog from "primevue/dialog";
import Checkbox from "primevue/checkbox";
import FileUpload from "primevue/fileupload";
import FloatLabel from "primevue/floatlabel";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Menu from "primevue/menu";
import Rating from "primevue/rating";
import Drawer from "primevue/drawer";
import Tag from "primevue/tag";
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar";
import Textarea from "primevue/textarea";
import Row from "primevue/row";
import IconField from "primevue/iconfield";
import Column from "primevue/column";
import Card from "primevue/card";
import Button from "primevue/button";
import i18n from "./i18n.js";


const app = createApp(App);

app.use(Primevue, { ripple: true, theme: 'aura' });
app.use(ConfirmationService)
    .use(DialogService)
    .use(ToastService);
app.component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-column', Column)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-checkbox', Checkbox)
    .component('pv-data-table', DataTable)
    .component('pv-dialog', Dialog)
    .component('pv-select', Select)
    .component('pv-file-upload', FileUpload)
    .component('pv-float-label', FloatLabel)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-input-text', InputText)
    .component('pv-input-number', InputNumber)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-drawer', Drawer)
    .component('pv-tag', Tag)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-toast', Toast);

app.use(i18n);

app.mount('#app');
