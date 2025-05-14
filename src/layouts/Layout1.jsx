import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom";

export default function Layout1() {
    return(
        <>
            <AppHeader/>
            <main className="">
                <Outlet/>
            </main>
            <AppFooter/>
        </>
    );
}