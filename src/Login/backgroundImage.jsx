let backgroundImageArray = [
    "/Images/Login/LoginBackground/loginBackgroundImage.jpg", 
    "/Images/Login/LoginBackground/loginBackgroundImage2.jpg", 
    "/Images/Login/LoginBackground/loginBackgroundImage3.jpg", 
    "/Images/Login/LoginBackground/loginBackgroundImage5.jpg", 
    "/Images/Login/LoginBackground/loginBackgroundImage6.jpg", 
    "/Images/Login/LoginBackground/loginBackgroundImage8.jpg", 
    "/Images/Login/LoginBackground/loginBackgroundImage9.jpg"
]
    
const LoadRandomPicture = () => backgroundImageArray[Math.floor(Math.random() * backgroundImageArray.length)]
        
export default LoadRandomPicture