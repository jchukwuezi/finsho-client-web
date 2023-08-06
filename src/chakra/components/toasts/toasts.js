import {toast} from 'react-toastify'
//function to display toast function
export const notify = (message) => {
    toast(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }); 
}