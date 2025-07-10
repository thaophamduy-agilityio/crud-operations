import { lazy } from 'react';

const HomeIcon = lazy(() => import('./Home'));
const CourseIcon = lazy(() => import('./Course'));
const StudentIcon = lazy(() => import('./Student'));
const PaymentIcon = lazy(() => import('./Payment'));
const ReportIcon = lazy(() => import('./Report'));
const SettingIcon = lazy(() => import('./Setting'));
const LogoutIcon = lazy(() => import('./Logout'));
const BackIcon = lazy(() => import('./Back'));
const NotificationIcon = lazy(() => import('./Notification'));
const SortIcon = lazy(() => import('./Sort'));
const EditIcon = lazy(() => import('./Edit'));
const DeleteIcon = lazy(() => import('./Delete'));
const CloseIcon = lazy(() => import('./Close'));

export { HomeIcon, CourseIcon, StudentIcon, PaymentIcon, ReportIcon, SettingIcon, LogoutIcon, BackIcon, NotificationIcon, SortIcon, EditIcon, DeleteIcon, CloseIcon };