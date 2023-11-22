import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { AiFillSkype } from "react-icons/ai";

export const routes = [
  {
    path: '/',
    text: 'TRANG CHỦ',
  },
  {
    path: '/service',
    text: 'DỊCH VỤ',
  },
  {
    path: '/introduce',
    text: 'GIỚI THIỆU',
  },
  {
    path: "#",
    text: "TIN TỨC",
  },
  {
    path: "/shop",
    text: "CỬA HÀNG",
  },
  {
    path: "#",
    text: "LIÊN HỆ",
  },
];

export const info = [
  {
    icon: IoLocationSharp,
    text: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
  },
  {
    icon: FaPhoneAlt,
    text: "1900 636 648",
  },
  {
    icon: TbMailFilled,
    text: "demonhunterg@gmail.com<br/>mon@mona.media",
  },
  {
    icon: AiFillSkype,
    text: "demonhunterp",
  },
];

export const products = [
  { img: "/img/shop/product1.jpg", title: "Body Lotion", price: "170,000" },
  { img: "/img/shop/product2.jpg", title: "Organic Bath", price: "180,000" },
  { img: "/img/shop/product3.jpg", title: "Organic Scrub", price: "250,000" },
  { img: "/img/shop/product4.jpg", title: "Organic Soap", price: "90,000" },
  { img: "/img/shop/product5.jpg", title: "Organic Cream", price: "280,000" },
  { img: "/img/shop/product6.jpg", title: "Sponge", price: "90,000" },
];

export const listProductSidebar = [
  { img: "/img/shop/sidebar1.jpg", title: "Body Lotion", price: "90,000" },
  { img: "/img/shop/sidebar2.jpg", title: "Smooth Cream", price: "280,000" },
  { img: "/img/shop/sidebar3.jpg", title: "Organic Soap", price: "90,000" },
  { img: "/img/shop/sidebar4.jpg", title: "Organic Scrub", price: "250,000" },
  { img: "/img/shop/sidebar5.jpg", title: "Organic Bath", price: "180,000" },
];

export const listBlogSidebar = [
  {
    img: "https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/dino-reichmuth-A5rCN8626Ck-unsplash-edited-1024x468-1-150x150.jpg",
    description: "Một buổi tối với Kayla & Ieva về tất cả mọi thứ Mang thai",
  },
  {
    img: "https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/slice-1-150x150.jpg",
    description: "Thứ tự đúng để áp dụng các sản phẩm chăm sóc da của bạn",
  },
  {
    img: "https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/utomhuspool_5-150x150.jpg",
    description: "10 spa ở Ireland để được điều trị Spa cho bà bầu",
  },
  {
    img: "https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/LeSpa-02-150x150.jpg",
    description: "The Well Spa in Waterford Ra mắt Spa mùa hè ngoài trời",
  },
  {
    img: "https://mauweb.monamedia.net/grandspa/wp-content/uploads/2020/05/369127-150x150.jpg",
    description:
      "Giới thiệu Khách sạn Spa Clare mới nhất: Khách sạn & Spa Killaloe",
  },
];
