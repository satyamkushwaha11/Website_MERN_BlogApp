import { Subject } from "rxjs";

export const DrawerOpen = new Subject();
export const DrawerClose = new Subject();

export const DialogOpen = new Subject();
export const DialogClose = new Subject();

export const PageLoader = new Subject();
export const handleLoader = new Subject();
export const SnackbarSubject = new Subject();

export const SideNavbarToggleSubject = new Subject();
