import HomePage from "../pages/home/HomePage";
import DefaultPage from "../pages/product/DefaultPage";
import AnalyticsPage from "../pages/product/AnalyticsPage";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import AlertPage from "../pages/order/AlertPage";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import ProductPageLayout from "../pages/product/ProductPageLayout";
import OrderPageLayout from "../pages/order/OrderPageLayout";
import GuestPageLayout from "../pages/guest/GuestPageLayout";
import GuestDefaultPage from "../pages/guest/GuestDefaultPage";
import GuestRegisterForm from '../pages/guest/GuestRegisterForm';
import GuestEditForm from "../pages/guest/GuestEditForm";
import StaffPageLayout from "../pages/staff/StaffPageLayout";
import StaffDefaultPage from "../pages/staff/StaffDefaultPage";
import StaffRegisterForm from "../pages/staff/StaffRegisterForm";
import StaffEditForm from "../pages/staff/StaffEditFrom";
import ProductAddForm from "../pages/product/ProductAddForm";
import ProductEditForm from "../pages/product/ProductEditform"
import LoginDefaultPage from "../pages/login/LoginDefaultPage";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountPageLayout from "../pages/account/AccountPageLayout";
import AccountDefaultPage from "../pages/account/AccountDefaultPage";
import LoginPageLayout from "../pages/login/LoginPageLayout";
import React from "react";


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
        path: "/admin/product/list",
        element: <DefaultPage />,
        state: "product.list",
        sidebarProps: {
          displayText: "Danh sách sản phẩm",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
      {
        path: "/admin/product/add",
        element: <ProductAddForm />,
        state: "product.add",
      },
      {
        path: "/admin/product/edit/:id",
        element: <ProductEditForm />,
        state: "product.edit",
      },
    ],
  },
  {
    path: "/admin/order",
    element: <OrderPageLayout />,
    state: "order",
    sidebarProps: {
      displayText: "Quản lý dịch vụ",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/admin/order/list",
        element: <AlertPage />,
        state: "order.list",
        sidebarProps: {
          displayText: "Danh sách dịch vụ",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
    ],
  },
  {
    path: "/admin/customer",
    element: <GuestPageLayout />,
    state: "customer",
    sidebarProps: {
      displayText: "Quản lý khách hàng",
      icon: <ArticleOutlinedIcon />,
    },
    child: [
      {
        path: "/admin/customer/list",
        element: <GuestDefaultPage />,
        state: "customer.list",
        sidebarProps: {
          displayText: "Danh sách khách hàng",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
      {
        path: "/admin/customer/register",
        element: <GuestRegisterForm />,
        state: "customer.register",
      },
      {
        path: "/admin/customer/edit/:id",
        element: <GuestEditForm />,
        state: "customer.edit",
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
        path: "/admin/staff/list",
        element: <StaffDefaultPage />,
        state: "staff.list",
        sidebarProps: {
          displayText: "Danh sách nhân viên",
          icon: (
            <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />
          ),
        },
      },
      {
        path: "/admin/staff/register",
        element: <StaffRegisterForm />,
        state: "staff.register",
      },
      {
        path: "/admin/staff/edit/:id",
        element: <StaffEditForm />,
        state: "staff.edit",
      },
    ],
  },
  {
    label: "Đăng xuất hệ thống",
    path: "/admin/logout",
    element: <LoginDefaultPage />,
    state: "logout",
    sidebarProps: {
      displayText: "Đăng xuất",
      icon: <FiberManualRecordOutlinedIcon sx={{ width: 10, height: 10 }} />,
    },
  },
];

export default appRoutes;
