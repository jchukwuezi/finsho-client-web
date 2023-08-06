import {create} from "zustand";
import jwt_decode from "jwt-decode";

export const mainStore = create ((set)=>({
    isAuth: false,
    token: null,
    name: '',
    email: '',
    id: '',

    setToken: (tokenPassedIn) => {
        if (tokenPassedIn !== ""){
            set({token: tokenPassedIn, isAuth: true}); //if there's a token, auth is true
            try{
                const decodedToken = jwt_decode(tokenPassedIn);
                set({name:decodedToken.payload.name, email:decodedToken.payload.email, id:decodedToken.payload.id})
            }
            catch(error){
                console.error("Invalid JWT Token ", error)
            }
        }

        else{
            console.log("token passed in was null")   
        }
     
    },


    logout: () => {
        set({ isAuth: false, token: null, name: '', email: '', id: '' });
    }
    
}))