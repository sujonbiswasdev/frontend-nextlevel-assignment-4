import { Route } from "@/types";


export const adminRoutes: Route[] = [
  {
    id:'1',
    title: "users",
    url: "/admin-dashboard/users",
    items: [
      {
        title: "/",
        url: "/analytics",
      },
    ],
  },
  //  {
  //   title: "meals",
  //   items: [
  //     {
  //       title: "Analytics",
  //       url: "/analytics",
  //     },
  //   ],
  // },
  //  {
  //   title: "category",
  //   items: [
  //     {
  //       title: "Analytics",
  //       url: "/analytics",
  //     },
  //   ],
  // },
  //   {
  //   title: "setting",
  //   items: [
  //     {
  //       title: "Analytics",
  //       url: "/analytics",
  //     },
  //   ],
  // },
  //   {
  //   title: "logout",
  //   items: [
  //     {
  //       title: "Analytics",
  //       url: "/analytics",
  //     },
  //   ],
  // },
];