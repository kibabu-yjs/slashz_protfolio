export default function Page({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){

    return <>
        <div className="bg-black flex flex-1">
            {children}
        </div>
    </>
}