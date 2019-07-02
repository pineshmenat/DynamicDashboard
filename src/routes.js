import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import PostCards from "./views/PostCards";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-posts" />
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: PostCards
  }
];
