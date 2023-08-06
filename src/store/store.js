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
     
    }


    //function to authenticate user
    /*
    setAuth: (isAuth, token) => {
        if(isAuth){
            const shop = jwtDecode(token)
            set({
                isAuth,
                shop: {
                    name: shop.name,
                    email: shop.email,
                    id: shop.id
                },
                token
            })        
        }

        else{
            set({isAuth, shop: null, token: null})
        }
    },


    logout: () => {
        set({ isAuthenticated: false, user: null, token: null });
    }
    */ 

    /*
    shop: {
        id: '',
        name: '',
        email: ''
    },

    token: '',
    isAuth: false,

    setShop : () => set((state) => ({
        shop: {
            ...state.shop,
            id: state.id,
            name: state.name,
            email: state.email
        }
    })),

    setTokenAndAuth: () => set((state) => ({
        token: state.token,
        isAuth: state.isAuth
    }))
    */
    

}))