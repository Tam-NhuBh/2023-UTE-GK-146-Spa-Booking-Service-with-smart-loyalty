import HomePage from "../pages/home/HomePage";
import DefaultPage from "../pages/product/DefaultPage";
import AnalyticsPage from "../pages/product/AnalyticsPage";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AlertPage from "../pages/order/AlertPage";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import ProductPageLayout from "../pages/product/ProductPageLayout";
import OrderPageLayout from "../pages/order/OrderPageLayout";
import GuestPageLayout from "../pages/guest/GuestPageLayout";
import GuestDefaultPage from "../pages/guest/GuestDefaultPage";
import StaffPageLayout from "../pages/staff/StaffPageLayout";
import StaffDefaultPage from "../pages/staff/StaffDefaultPage";
import AccountPageLayout from "../pages/account/AccountPageLayout";
import AccountDefaultPage from "../pages/account/AccountDefaultPage";
import LoginPageLayout from "../pages/login/LoginPageLayout";
import LoginDefaultPage from "../pages/login/LoginDefaultPage";

const appRoutes = [
  {
    path: "/admin",
    element: <HomePage />,
    state: "home",
    sidebarProps: {
      displayText: "Hệ thống quản lý",
      icon: <HomeOutlinedIcon />,
    },
  },
  {
    label: "Danh mục quản lý",
    path: "/admin/product",
    element: <ProductPageLayout />,
    state: "product",
    sidebarProps: {
      displayText: "Quản lý sản phẩm",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        path: "/admin/product/default",
        element: <DefaultPage />,
        state: "product.default",
        sidebarProps: {
          displayText: "Danh sách sản phẩm",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
      {
        path: "/admin/product/analytics",
        element: <AnalyticsPage />,
        state: "product.analytics",
        sidebarProps: {
          displayText: "Danh mục sản phẩm",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
    ],
  },
  {
    path: "/admin/order",
    element: <OrderPageLayout />,
    state: "order",
    sidebarProps: {
      displayText: "Quản lý đơn hàng",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/admin/order/alert",
        element: <AlertPage />,
        state: "order.alert",
        sidebarProps: {
          displayText: "Danh sách đơn hàng",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
    ],
  },
  {
    path: "/admin/guest",
    element: <GuestPageLayout />,
    state: "guest",
    sidebarProps: {
      displayText: "Quản lý khách hàng",
      icon: <ArticleOutlinedIcon />,
    },
    child: [
      {
        path: "/admin/guest/default",
        element: <GuestDefaultPage />,
        state: "guest.default",
        sidebarProps: {
          displayText: "Danh sách khách hàng",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
    ],
  },
  {
    path: "/admin/staff",
    element: <StaffPageLayout />,
    state: "staff",
    sidebarProps: {
      displayText: "Quản lý nhân viên",
      icon: <FormatListBulletedOutlinedIcon />,
    },
    child: [
      {
        path: "/admin/staff/default",
        element: <StaffDefaultPage />,
        state: "staff.default",
        sidebarProps: {
          displayText: "Danh sách nhân viên",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
    ],
  },
  {
    path: "/admin/account",
    element: <AccountPageLayout />,
    state: "account",
    sidebarProps: {
      displayText: "Quản lý tài khoản",
      icon: <PersonOutlineOutlinedIcon />,
    },
    child: [
      {
        path: "/admin/account/default",
        element: <AccountDefaultPage />,
        state: "account.default",
        sidebarProps: {
          displayText: "Danh sách tài khoản",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
    ],
  },
  {
    label: "Đăng nhập hệ thống",
    path: "/admin/login",
    element: <LoginPageLayout />,
    state: "login",
    sidebarProps: {
      displayText: "Tài khoản",
      icon: <VerifiedUserOutlinedIcon />,
    },
    child: [
      {
        path: "/admin/login/default",
        element: <LoginDefaultPage />,
        state: "login.default",
        sidebarProps: {
          displayText: "Đăng nhập",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
    ],
  },
];

export default appRoutes;
