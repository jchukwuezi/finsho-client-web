import {create} from "zustand";
import jwtDecode from "jwt-decode";

export const mainStore = create ((set)=>({
    isAuth: false,
    token: null,
    name: null,
    email: null,
    id: null,

    setToken: (token) => {
        set({token, isAuth: true}); //if there's a token, auth is true
        try{
            const {name, email, id} = jwtDecode(token)
            set({name, email, id})
        }
        catch(error){
            console.error("Invalid JWT Token ", error)
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