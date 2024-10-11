import Image from "next/image"
import Link from "next/link"

const page = () => {
    return (
        <div className="w-full border-2 border-red-600 flex flex-col items-center" >
            <div className="w-5/6 flex flex-row border-2 border-black mt-7 items-center h-24" >
                <div className="w-1/3 flex items-center" >
                    <Link href="/" >
                        <Image
                            src="/backarrow.png"
                            height={69}
                            width={80}
                            alt="backpage"
                        />
                    </Link>
                </div>
                <h1 className="w-1/3 text-center font-bold text-4xl ">MERMA DE VERDURA MENSUAL</h1>
                <div className="w-1/3" >
                </div>
            </div>
            <div className="w-5/6 flex flex-col items-center mt-7 h-36" >
                <div className="w-3/6 flex justify-center items-center h-10 border-t-4 border-x-4 rounded-t-2xl border-black " >
                    PERIODO DE MERMA: JULIO 2024
                </div>
                <div className="w-full flex flex-row items-center h-24 border-4 border-black rounded-2xl " >
                    <div className="w-1/3 flex justify-center">IMPORTE DE MERMA: $10,000.00</div>
                    <div className="w-1/3 flex justify-center">IMPORTE DE REPOSICIÓN: $5,000.00</div>
                    <div className="w-1/3 flex justify-center">IMPORTE FINAL: $5,000.00</div>
                </div>
            </div>

        </div>
    )
}

export default page