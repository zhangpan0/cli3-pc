import {
  Button,
  Select,
  Option,
  Loading,
  Notification,
  MessageBox,
  Message,
  Row,
  Col,
  Form,
  FormItem,
  Table,
  Tag,
  TableColumn,
  Pagination,
  Input,
  InputNumber,
  Tabs,
  TabPane,
  Tooltip,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Upload,
  DatePicker,
  Badge,
  Autocomplete,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Scrollbar,
  InfiniteScroll,
  ColorPicker,
  Progress,
  Divider
} from 'element-ui'

// 全局组件
const ELEMENT_COMPONENT = {
  Button,
  Select,
  Option,
  Row,
  Col,
  Form,
  FormItem,
  Table,
  Tag,
  TableColumn,
  Pagination,
  Input,
  InputNumber,
  Tabs,
  TabPane,
  Tooltip,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Switch,
  Breadcrumb,
  BreadcrumbItem,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Upload,
  DatePicker,
  Badge,
  Autocomplete,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Scrollbar,
  InfiniteScroll,
  ColorPicker,
  Progress,
  Divider
}

export default {
  install (Vue) {
    for (const i in ELEMENT_COMPONENT) {
      Vue.use(ELEMENT_COMPONENT[i])
    }
    // Vue.prototype.$loading = Loading.service;
    // Vue.prototype.$msgbox = MessageBox;
    // Vue.prototype.$alert = MessageBox.alert;
    // Vue.prototype.$confirm = MessageBox.confirm;
    // Vue.prototype.$prompt = MessageBox.prompt;
    // Vue.prototype.$notify = Notification;
    // Vue.prototype.$message = Message;
    Vue.use(Loading.directive)
  }
}
