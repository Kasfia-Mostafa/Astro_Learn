import { createBrowserRouter } from "react-router";
import Root from "../Components/Pages/Root/Root";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import AllCourses from "../Components/Pages/AllCourses/AllCourses";
import CourseDetails from "../Components/Pages/AllCourses/CourseDetails";
import { Component } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/courses.json"),
      },
      {
        index: true,
        path: "/allCourses",
        Component: AllCourses,
        loader: () => fetch("/courses.json"),
      },
      {
        index: true,
        path: "/course/:id",
        Component: CourseDetails,
        loader: () => fetch("/courses.json"),
      },
    ],
  },
]);
