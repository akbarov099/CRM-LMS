// src/routes/routes.jsx

import { Dashboard } from "../modules/Dashboard/Dashboard";
import { Admin } from "../modules/Admin/Admin";
import { Groups } from "../modules/Groups/Groups";
import { Students } from "../modules/Students/Students";
import { Payment } from "../modules/Payment/Payment";
import { Leads } from "../modules/Leads/Leads";
import MainLayout from "../layout/MainLayout";
import { AdminToAdd } from "../modules/Admin/pages/AdminToAdd";
import { Profile } from "../modules/Profile/Profile";
import { GroupsToAdd } from "../modules/Groups/pages/GroupsToAdd";
import { StudentsToAdd } from "../modules/Students/pages/StudentsToAdd";
import { LeadsArxiv } from "../modules/Leads/components/LeadsArxiv";
import { Courses } from "../modules/Courses/Courses";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },

      {
        path: "admin",
        children: [
          { index: true, element: <Admin /> },
          { path: "add", element: <AdminToAdd /> }
        ]
      },
      {
        path: "courses",
        children: [
          { index: true, element: <Courses /> },
        ]
      },
      {
        path: "groups",
        children: [
          { index: true, element: <Groups /> },
          { path: "add", element: <GroupsToAdd /> }
        ]
      },
      {
        path: "students",
        children: [
          { index: true, element: <Students /> },
          { path: "add", element: <StudentsToAdd /> }
        ]
      },
      { path: "payment", element: <Payment /> },
      {
        path: "leads",
        children: [
          { index: true, element: <Leads /> },
          { path: "arxiv", element: <LeadsArxiv /> }
        ]
      },
      { path: "profile", element: <Profile /> }
    ],
  },
];
