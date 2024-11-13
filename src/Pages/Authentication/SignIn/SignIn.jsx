import './SignIn.scss'

function SignIn() {
    return (
        <section className="bg-white py-3 py-md-5 py-xl-8">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-12 col-md-6 col-xl-7">
                        <div className="d-flex justify-content-center">
                            <div className="col-12 col-xl-9">
                                <img
                                    className="img-fluid rounded mb-4"
                                    loading="lazy"
                                    src={"../../../assets/images/Logo.png"}
                                    alt="Liceria Logo"
                                />
                                <hr className="border-primary-subtle mb-4" />
                                <h1 className="mb-4">We bring you high quality products!</h1>
                                <p className="lead mb-5">We want to create a green shopping space to protect the environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-5">
                        <div className="card border-0 rounded-4 shadow-lg">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-4">
                                            <h3>Sign in</h3>
                                            <p>Do not have an account? <a href="/signup" className="custom-color">Sign up</a></p>
                                        </div>
                                    </div>
                                </div>
                                <form action="#!">
                                    <div className="row gy-3 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    required
                                                />
                                                <label htmlFor="email" className="form-label">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"
                                                    required
                                                />
                                                <label htmlFor="password" className="form-label">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    name="remember_me"
                                                    id="remember_me"
                                                />
                                                <label className="form-check-label text-secondary" htmlFor="remember_me">
                                                    Keep me logged in
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="d-grid">
                                                <button className="btn btn-primary btn-lg custom-btn" type="submit">Log in</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                                            <a href="#!" className="custom-color">Forgot password</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="mt-4 mb-4">Or continue with</p>
                                        <div className="d-flex gap-2 gap-sm-3 justify-content-center">
                                            <a href="#!" className="btn btn-outline-danger bsb-btn-circle bsb-btn-circle-2xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                </svg>
                                            </a>
                                            <a href="#!" className="btn btn-outline-primary bsb-btn-circle bsb-btn-circle-2xl">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SignIn