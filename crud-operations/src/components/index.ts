import { lazy } from 'react';

const Button = lazy(() => import('./Button'));
const ErrorFallback = lazy(() => import('./ErrorBoundary'));
const Header = lazy(() => import('./Header'));
const HeaderTable = lazy(() => import('./HeaderTable'));
const IconButton = lazy(() => import('./IconButton'));
const Input = lazy(() => import('./Input'));
const Logo = lazy(() => import('./Logo'));
const MenuBar = lazy(() => import('./MenuBar'));
const Modal = lazy(() => import('./Modal'));
const AddStudentModal = lazy(() => import('./Modal/addStudentModal'));
const EditStudentModal = lazy(() => import('./Modal/editStudentModal'));
const DeleteStudentModal = lazy(() => import('./Modal/deleteStudentModal'));
const ToggleStudentModal = lazy(() => import('./Modal/toggleStudentModal'));
const StudentItem = lazy(() => import('./StudentItem'));
const StudentList = lazy(() => import('./StudentList'));
const Text = lazy(() => import('./Text'));
const StudentInfo = lazy(() => import('./StudentInfo'));

export { Button, ErrorFallback, Header, HeaderTable, IconButton, Input, Logo, MenuBar, Modal, AddStudentModal, EditStudentModal, DeleteStudentModal, ToggleStudentModal, StudentItem, StudentList, Text, StudentInfo };