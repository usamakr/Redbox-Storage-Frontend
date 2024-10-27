import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import { customerProtectedRoutes } from './orderPortalRoutes'
import { externalAppProtectedRoutes } from './externalAppRoutes'
import { adminProtectedRoutes } from './adminRoutes'

// Routes which everyone can see
export const publicRoutes: Routes = [...authRoute]

// Protected routes consist of three main routes with subdomains
/*
1) Admin dashboard routes
2) Order portal routes
3) External App routes
*/

export const appRoutes: Routes = [...externalAppProtectedRoutes]
export const adminRoutes: Routes = [...adminProtectedRoutes]
export const orderportalRoutes: Routes = [...customerProtectedRoutes]
