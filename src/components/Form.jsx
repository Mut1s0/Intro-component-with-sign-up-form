import iconError from "../assets/icon-error.svg";
import { useState } from "react"

function Form() {

    const [ form, setForm ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({});

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(form);
        setErrors(errors);
    }

    const validate = (form) => {
        let errors = {};

        // Add your validation logic here
        if (!form.firstName) errors.firstName = "First Name cannot be empty";
        if (!form.lastName) errors.lastName = "Last Name cannot be empty";
        if (!form.email) errors.email = "Looks like this is not a valid Email";
        if (!form.password) errors.password = "Password cannot be empty";

        return errors;
    }

    return(

        <section>

            <div className="flex flex-col gap-10 max-w-[450px] mx-auto md:max-w-[600px]">

                <article>

                    <div className="bg-blue py-5 rounded-[7px] cursor-pointer" id="button">

                        <p className="text-white font-semiBold text-center ss:text-[1.3rem]">Try it free 7 days <span className="text-gray-200 font-medium">then <br className="block md:hidden"/>&#36;20/mo.thereafter</span></p>

                    </div>

                </article>

                <div className="bg-white px-5 md:px-[40px] py-10 rounded-[10px]" id="form">

                    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>

                        <div className="relative">

                            <input 
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className={`block w-full border border-grayishBlue rounded-[3px] py-3 pl-5 placeholder:text-darkBlue font-bold focus:outline-none ${errors.firstName && 'border-red'}`}
                                value={form.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <img src={iconError} alt="Error" className="absolute bottom-[35px] right-[30px]" />}
                            {errors.firstName && <p className="text-red font-semiBold text-right">{errors.firstName}</p>}

                        </div>

                        <div className="relative">

                            <input 
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className={`block w-full border border-grayishBlue rounded-[3px] py-3 pl-5 placeholder:text-darkBlue font-bold focus:outline-none ${errors.firstName && 'border-red'}`}
                                value={form.lastName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <img src={iconError} alt="Error" className="absolute bottom-[35px] right-[30px]" />}
                            {errors.lastName && <p className="text-red font-semiBold text-right">{errors.lastName}</p>}

                        </div>

                        <div className="relative">

                            <input 
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className={`block w-full border border-grayishBlue rounded-[3px] py-3 pl-5 placeholder:text-darkBlue font-bold focus:outline-none ${errors.firstName && 'border-red'}`}
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.firstName && <img src={iconError} alt="Error" className="absolute bottom-[35px] right-[30px]" />}
                            {errors.email && <p className="text-red font-semiBold text-right">{errors.email}</p>}

                        </div>

                        <div className="relative">

                            <input 
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={`block w-full border border-grayishBlue rounded-[3px] py-3 pl-5 placeholder:text-darkBlue font-bold focus:outline-none ${errors.firstName && 'border-red'}`}
                                value={form.password}
                                onChange={handleChange}
                            />
                            {errors.firstName && <img src={iconError} alt="Error" className="absolute bottom-[35px] right-[30px]" />}
                            {errors.password && <p className="text-red font-semiBold text-right">{errors.password}</p>}

                        </div>

                        <button type="submit" className="bg-green hover:opacity-50 uppercase text-white font-medium py-4 px-2 rounded-[4px]">claim your free trial</button>

                    </form>

                    <p className="text-[.5rem] ss:text-[.8rem] text-center text-grayishBlue mt-5">By clicking the button, you are agreeing to <br className="block md:hidden"/> our <span className="text-red font-bold cursor-pointer">Terms and Services</span></p>

                </div>

            </div>

        </section>
    )
}

export default Form
