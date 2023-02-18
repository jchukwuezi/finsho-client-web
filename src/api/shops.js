export const registerShop = async (shopName, shopLocation, shopEmail, password) =>{
    let alertMsg = ""
    fetch("http://localhost:4000/api/shops/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: shopName,
            location: shopLocation,
            email: shopEmail,
            password: password
        })
    })
    .then(async res => {
        if(!res.ok){
            const errorMsg = await res.text()
            alertMsg = errorMsg;
        }
        const successMsg = await res.text()
        alertMsg = successMsg
    })

    return alertMsg;
}
