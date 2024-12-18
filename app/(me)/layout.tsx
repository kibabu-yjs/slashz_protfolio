'use client';
import Drawer from "../components/drawer";
import LayOutNav from "../components/navbar";

export default function Page({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    return <>
        <div className="bg-black h-screen">
            <LayOutNav />
            <Drawer />
            {children}
        </div>
    </>
}