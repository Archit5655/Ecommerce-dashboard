
export default function Authlayout({
    children,
  }: {
    children: React.ReactNode
  }){
    return(
        <div className=" flex  p-10 items-center justify-center  w-full h-full">
            {children}
        </div>
    )
  }
