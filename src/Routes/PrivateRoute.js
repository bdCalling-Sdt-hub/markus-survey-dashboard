
// import { Navigate, useLocation } from "react-router-dom";
// import { useGetProfileQuery } from "../redux/features/auth/authApi";

// const PrivateRoute = ({ children }) => {
//     const {data:profile, isLoading} = useGetProfileQuery();
//     console.log(profile)
//   const location = useLocation();


//   if (isLoading) {
//     return null;
//   }

//   if (profile && (profile?.role === "admin" || profile?.role === "super_admin") ) {
//     return children;
//   }

//   return <Navigate to="/auth/login" state={{ from: location }} />;
// };

// export default PrivateRoute;