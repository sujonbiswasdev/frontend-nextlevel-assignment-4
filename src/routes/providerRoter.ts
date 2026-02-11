import { Route } from "@/types";

export const ProviderRoutes: Route[] = [
  {
    id:'1',
    title: "Blog Management",
    items: [
      {
        title: "Create Blog",
        url: "/dashboard/create-blog",
      },
      {
        title: "History",
        url: "/dashboard/history",
      },
    ],
  },
  //  {
  //   title: "Blog ",
  //   items: [
  //     {
  //       title: " Blog",
  //       url: "/dashboard/create-blog",
  //     },
  //     {
  //       title: "History",
  //       url: "/dashboard/history",
  //     },
  //   ],
  // },
];