import List from "./List";
import Details from "./Details";
import Create from "./Create";
import Edit from "./Edit";

const BlogRoutes = [
  {
    component: Details,
    path: "/blog/details/:id",
    exact: true,
    type: "public",
  },
  {
    component: List,
    path: "/blog/list",
    exact: true,
    type: "public",
  },
  {
    component: Create,
    path: "/blog/create",
    exact: true,
    type: "public",
  },
  {
    component: Edit,
    path: "/blog/edit/:id",
    exact: true,
    type: "public",
  },
];

export default BlogRoutes;