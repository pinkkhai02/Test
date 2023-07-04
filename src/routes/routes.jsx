import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../components/layouts/DefaullLayout";
import IDCard from "../pages/IDCard/IDCard";
import HomePage from "../pages/HomePage";
import ActivitySchedule from "../pages/ActivitySchedule/ActivitySchedule";
import FormAddIDCard from "../pages/IDCard/FormAddIDCard";
import ActivityScheduleDetail from "../pages/ActivitySchedule/ActivityScheduleDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        <Route
          path="/id-card"
          element={
            <DefaultLayout>
              <IDCard />
            </DefaultLayout>
          }
        />
        <Route
          path="/id-card/add"
          element={
            <DefaultLayout>
              <FormAddIDCard />
            </DefaultLayout>
          }
        />
        <Route
          path="/activity-schedule"
          element={
            <DefaultLayout>
              <ActivitySchedule />
            </DefaultLayout>
          }
        />
        <Route
          path="/activity-schedule/detail/:code"
          element={
            <DefaultLayout>
              <ActivitySchedule />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
