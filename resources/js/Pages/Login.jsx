import React from "react";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import { useForm } from "@inertiajs/react";

const Login = () => {
    const { data, setData, post, errors } = useForm();

    const submit = (e) => {
        e.preventDefault();
        post(route("student.login"));
    };
    return (
        <div>
            <Header />

            <div className="mt-5">
                <h1 className="text-center"> Please Login </h1>
                <form
                    className="space-y-6"
                    onSubmit={submit}
                    method="POST"
                    action={route("student.login")}
                    style={{
                        border: "2px solid black",
                        marginLeft: "50px",
                        marginTop: "50px",
                    }}
                >
                    <div className="row my-3">
                        <input
                            type="text"
                            name="email"
                            value={data.email}
                            placeholder="Enter Email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </div>
                    <div className="row my-3">
                        <input
                            type="text"
                            name="password"
                            placeholder="Enter Password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                    </div>
                    <button className="btn btn-warning" type="submit">
                        {" "}
                        SUBMIT{" "}
                    </button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
