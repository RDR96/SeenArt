import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import LadingView from "src/views/landing"
import ContactView from "src/views/Contact"
import AboutView from "src/views/About"
import GalleryView from "src/views/Gallery"
import ProfilesView from "src/views/Profiles"
import ProjectsView from "src/views/Projects"
import NewsView from "src/views/News"
import AlliancesView from "src/views/Alliances"
import SportView from "src/views/Sport"

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    
    element: <MainLayout />,



    children: [
      { path: 'landing', element: <LadingView /> },
      {path: 'about', element: <AboutView />},
      { path: 'contact', element: <ContactView /> },
      { path: 'gallery', element: <GalleryView /> },
      { path: 'profiles', element: <ProfilesView /> },
      { path: 'projects', element: <ProjectsView /> },
      { path: 'news', element: <NewsView /> },            
      { path: 'alliances', element: <AlliancesView /> },            
      { path: 'sport', element: <SportView /> },            
      
      
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
