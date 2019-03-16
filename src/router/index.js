// 通讯录模块
import AddressBook from "../components/AddressBook";//通讯录
// 服务包模块
import EntryLink from "../components/EntryLink";//入口链接
import Performance from "../components/Performance";//运行情况
// 通知模块
import PreviewNotice from "../components/PreviewNotice";//查看通知
import PublishNotice from "../components/PublishNotice";//发布通知
// 客服专区模块
import Contact from "../components/Contact";//联系客服
// 意见反馈模块
import CommitBug from "../components/CommitBug";//我要提Bug
import CommitSuggest from "../components/CommitSuggest";//我有新需求

// 路由配置
const routes = [
    { 
        text: "通讯录",
        icon: "book",
        path: "/addressBook",
        component: AddressBook,
    },
    {
        module: "服务包",
        icon: "appstore",
        routes: [
            { 
                text: "入口链接",
                path: "/",//默认显示入口链接
                component: EntryLink,
                exact: true
            },
            {
                text: "运行情况",
                path: "/performance",
                component: Performance
            }
        ]
    },
    {
        module: "通知",
        icon: "notification",
        routes: [
            { 
                text: "查看通知",
                path: "/previewNotice",
                component: PreviewNotice
            },
            {
                text: "发布通知",
                path: "/publishNotice",
                component: PublishNotice
            }
        ]
    },
    {
        module: "客服专区",
        icon: "customer-service",
        routes: [
            { 
                text: "联系客服",
                path: "/contact",
                component: Contact
            }
        ]
    },
    {
        module: "意见反馈",
        icon: "message",
        routes:  [
            { 
                text: "我要提Bug",
                path: "/commitBug",
                component: CommitBug
            },
            {
                text: "我有新需求",
                path: "/commitSuggest",
                component: CommitSuggest
            }
        ]
    }
];

export default routes;