import React, { useState } from "react";

const Signup = ({ closeSignup }) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = () => {};

    return (
        <div className="w-full md:w-[50%] px-5 md:px-[2vw] lg:px-[4vw]">
            <form onSubmit={handleSignup}>
                <h1 className="font-bold text-3xl text-center mb-6 dark:text-white">Sign up</h1>
                <input
                    className="w-full bg-[#EEEEEE] dark:bg-slate-600  dark:text-white px-3 py-2 my-1.5 outline-none text-sm"
                    type="text"
                    placeholder="Name"
                    value={user.name}
                    onChange={(e) => setUser({ name: e.target.value })}
                />
                <input
                    className="w-full bg-[#EEEEEE] dark:bg-slate-600  dark:text-white px-3 py-2 my-1.5 outline-none text-sm"
                    type="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => setUser({ email: e.target.value })}
                />
                <input
                    className="w-full bg-[#EEEEEE] dark:bg-slate-600  dark:text-white px-3 py-2 my-1.5 outline-none text-sm"
                    type="tel"
                    placeholder="phone (Optional)"
                    value={user.phone}
                    onChange={(e) => setUser({ phone: e.target.value })}
                />
                <input
                    className="w-full bg-[#EEEEEE] dark:bg-slate-600  dark:text-white px-3 py-2 my-1.5 outline-none text-sm"
                    type="password"
                    placeholder="Create Password"
                    value={user.password}
                    onChange={(e) => setUser({ password: e.target.value })}
                />
                <input
                    className="w-full bg-[#EEEEEE] dark:bg-slate-600  dark:text-white px-3 py-2 my-1.5 outline-none text-sm"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="w-full flex justify-center mt-4">
                    <button className="px-10 py-2 bg-[#06CF9C] rounded-full text-white uppercase font-medium text-sm">
                        {loading ? "Signup..." : "Sign up"}
                        {loading && (
                            <div className="loading-overlay-btn">
                                <ClipLoader color="#620c88" />
                            </div>
                        )}
                    </button>
                </div>
            </form>
            <p className="text-sm text-center mt-5 dark:text-white">
                Already have account?
                <span
                    onClick={closeSignup}
                    className="text-blue-500 cursor-pointer">{" "}Sign in </span>
            </p>
        </div>
    );
};

export default Signup;
