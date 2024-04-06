export const validation = (email,password) => {
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPassword = /^(?=.*[!@#$%^&*-])(?=.*[0-9])(?=.*[A-Z]).{8,20}$/.test(password);

    if(!isEmail) return "Email Id is not valid";
    if(!isPassword) return "password is not valid";

    return null;
};