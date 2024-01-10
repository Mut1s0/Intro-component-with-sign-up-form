

function Form() {

    return(

        <section>

            <div className="flex flex-col gap-10 max-w-[450px] mx-auto md:max-w-[600px]">

                <article>

                    <div className="bg-blue py-5 rounded-[7px] cursor-pointer" id="button">

                        <p className="text-white font-semiBold text-center ss:text-[1.3rem]">Try it free 7 days <span className="text-gray-200 font-medium">then <br className="block md:hidden"/>&#36;20/mo.thereafter</span></p>

                    </div>

                </article>

                <div className="bg-white px-5 md:px-[40px] py-10 rounded-[10px]" id="form">

                    <form className="flex flex-col gap-8">

                        <div>

                            <input 
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="block w-full border border-grayishBlue rounded-[3px] py-3 pl-5 placeholder:text-darkBlue font-bold focus:outline-none"
                            />

                        </div>

                        <div>

                            <input 
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="block w-full border border-grayishBlue rounded-[3px] py-3 pl-5 placeholder:text-darkBlue font-bold focus:outline-none"
                            />

                        </div>

                        <div>

                            <input 
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className="block w-full border border-grayishBlue rounded-[3px] py-3 pl-5 placeholder:text-darkBlue font-bold focus:outline-none"
                            />

                        </div>

                        <div>

                            <input 
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="block w-full border border-grayishBlue rounded-[3px] py-3 pl-5 placeholder:text-darkBlue font-bold focus:outline-none"
                            />

                        </div>

                        <button type="submit" className="bg-green uppercase text-white font-medium py-4 px-2 rounded-[4px]">claim your free trial</button>

                    </form>

                    <p className="text-[.5rem] ss:text-[.8rem] text-center text-grayishBlue mt-5">By clicking the button, you are agreeing to <br className="block md:hidden"/> our <span className="text-red font-bold">Terms and Services</span></p>

                </div>

            </div>

        </section>
    )
}

export default Form
