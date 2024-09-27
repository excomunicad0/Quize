import { useAppSelector } from "@/shared/hooks/reduxhooks";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

export const PublicRoute: React.FC<{ children: JSX.Element }> = ({
    children,
}) => {
    const { user, loading } = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(user) {
            navigate(-1)
        }
    }, [user, navigate, location.state])

    if(loading) {
        return <Loader />
    }
    return children;
}