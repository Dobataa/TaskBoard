import { Box } from "@mui/material";
import type { ReactNode } from "react";
import { NavBar } from "../components";

export default function Layout({ children }: {children: ReactNode}){
    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>
            <NavBar/>

            <Box sx={{ padding: 2 }}>
                {children}
            </Box>
        </Box>
    )
}