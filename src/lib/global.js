import moment from 'moment';
import { CLOUDINARY_API_BASE, CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from './config';
import { DialogOpen, DrawerClose, DrawerOpen, handleLoader, PageLoader, SnackbarSubject } from "./rxSubjects"
import { setLocalStorage } from './session';

/**
* @description method to open drawer
* @param params ("drawer_name", {drawer_data}, "opening_position")
*/
export const open_drawer = (...params) => {
  return DrawerOpen.next([...params])
}

/**
* @description method to close drawer
* @param params:string - drawer name to close
*/
export const close_drawer = (...params) => {
  DrawerClose.next([...params]);
}

/**
* @description method to open dialog
* @param params ("dialog_name", {dialog_data}, "opening_position")
*/
export const open_dialog = (...params) => {
  return DialogOpen.next([...params])
}

/**
* @description method to close dialog
* @param params ("dialog_name")
*/
export const close_dialog = (...params) => {
  return DialogOpen.next([...params])
}

/**
* @description method to start full page loader
*/
export const start_page_loader = () => {
  PageLoader.next(true)
}

/**
* @description method to stop full page loader
*/
export const stop_page_loader = () => {
  PageLoader.next(false)
}


export const findDayAgo = (date) => {
  return moment(date).fromNow();
};

/**
* @description method to open drawer with custom data
* @param drawerData: Object{}
*/
export const drawerToast = (drawerData = {}) => {
  setTimeout(() => {
    open_drawer("drawerToaster", drawerData, "bottom")
  }, 30);
};


/**
* @description this method is used to detect device type
* @return true/false
*/
export const detectDevice = () => {
  let isMobileViewServer = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i);
  return Boolean(isMobileViewServer);
};

 /**
 * @description method to show toastr
 * @param message toastr message
 * @param variant: 'variantSuccess' | 'variantError' | 'variantInfo' | 'variantWarning';
 * @param duration?: toastr duration - default: 2000 ms
 * @param vertical?: 'top' | 'bottom';
 * @param horizontal?: 'left' | 'center' | 'right';
 */
export const showToast = (message, variant, duration, vertical, horizontal) => {
  return SnackbarSubject.next({message, variant, duration, vertical, horizontal})
}

 /**
 * @description method to add session after login
 * @param data: Object - login response
 */
export const setSessionData = (data) => {
  setLocalStorage('email', data?.email);
  setLocalStorage('userId', data?.userId);
  setLocalStorage('fullname', data?.fullname);
  setLocalStorage('role', data?.role);
  setLocalStorage('profilePic', data?.profilePic);
  setLocalStorage('language', data?.language);
}

 /**
 * @description method to start full page loader
 */
export const startLoader = () => {
  return handleLoader.next(true);
};


 /**
 * @description method to start full page loader
 */
export const stopLoader = () => {
  return handleLoader.next(false);
};


/**
 * @description method to download blobdata
 * @author jagannath
 * @date 14/04/2021
 * @param blobData: Blob
 */
 export const downloadUserSheet = (blobData, filename) => {
  //  console.log('blobData', blobData)
  const blob = new Blob([blobData], { type: 'octet-stream' });
  let url = window.URL.createObjectURL(blob);
  var element = document.createElement('a');
  document.body.appendChild(element);  
  element.href = url;
  element.download = filename || 'data.xlsx';
  element.click();
  window.URL.revokeObjectURL(url)
  document.body.removeChild(element);
}





export const UploadImage = async (file, folderId) => {
  try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      data.append("folder", `${CLOUDINARY_CLOUD_NAME}/${folderId}`)
      const apiUrl = `${CLOUDINARY_API_BASE}${CLOUDINARY_CLOUD_NAME}/image/upload/`;
      const res = await fetch(apiUrl, {
        method: "POST",
        body: data
      });
      const resultJson = await res.json();
      // console.log(resultJson,'lllllllllllllllllll');
      return resultJson.error?resultJson:resultJson.secure_url;
    } catch (error) {
      console.error('failed to upload image: ', error)
      return null;
    }
}
export const UploadVideo = async (file, folderId) => {
  try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      data.append("folder", `${CLOUDINARY_CLOUD_NAME}/${folderId}`)
      const apiUrl = `${CLOUDINARY_API_BASE}${CLOUDINARY_CLOUD_NAME}/video/upload/`;
      const res = await fetch(apiUrl, {
        method: "POST",
        body: data
      });
      const resultJson = await res.json();
      return resultJson.secure_url;
    } catch (error) {
      console.error('failed to upload image: ', error)
      return null;
    }
}



/**
 * @description use this method to pause a task for sometime
 * @author jagannath
 * @date 09/09/2021
 * @param time time in milliseconds
 * @return Promise()
 */
 export const sleep = (time) =>
 new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve(true);
     }, time);
 });

/**
* @description use this method to parse query params
* @author jagannath
* @date 09/09/2021
* @param param url query params - search params
* @return ex: {key: value}
*/
export const parseQuery = (query) => {
 query = query.trim().replace(/^[?#&]/, "");
 const queryParam = {};
 for (const param of query.split("&")) {
     if (param === "") {
         continue;
     }
     console.log(param);
     let [key, value] = param.split("=");
     queryParam[key] = value;
 }
 return queryParam;
};

/**
* @description use this method to parse url pathname (routes into an array)
* @author jagannath
* @date 09/09/2021
* @param param url pathname
* @return string[] - ex: ["signup", "merchant"]
*/
export const parseParam = (param) => {
 param = param.trim().replace(/^[/#&]/, "");
 return param.split("/");
};
