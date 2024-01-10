

function Header() {

    return(

        <header className="mb-10 md:flex md:flex-col md:items-start md:justify-center h-full">

            <div className="text-center md:text-left">

                <h1 className="text-white font-semiBold text-[1.6rem] ss:text-[2.5rem] md:text-[3rem] mb-5">Learn to code by <br /> watching others</h1>

                <p className="text-gray-200 font-medium text-[.6rem] ss:text-[1.2rem] md:text-[.9rem] lg:text-[1.4rem]">See how experienced developers solve <br className="block md:hidden"/> problems in real-time. <br className="hidden md:block"/> Watching <br className="block md:hidden"/> scripted tutorials is great, but <br className="block md:hidden"/> understanding how <br className="hidden md:block"/> developers think is <br className="block md:hidden"/> invaluable</p>

            </div>

        </header>

    )
}

export default Header;