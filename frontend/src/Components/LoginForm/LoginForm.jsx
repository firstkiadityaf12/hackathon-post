import React from "react";
import './LoginForm.css';
import { AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Masuk</h1>
                <p className="paragraf-open">Silahkan login untuk melanjutkan ke akun Anda</p>
                {/* username */}
                <div className="input-box">
                    <input type="text" placeholder="Email anda" required />
                </div>
                {/* password */}
                <div className="input-box">
                    <input type="password" placeholder="Password anda" required />
                    <AiFillEyeInvisible className="icon"/>
                </div>
                {/* tetap masuk */}
                <div className="remember-forgot">
                    <label><input type="checkbox" />Tetap masuk</label>
                </div>
                {/* button */}
                <button type="submit">Masuk</button>
                {/* divider garis atau garis*/}
                <div className="block">
                    <div className="divider"></div>
                        <p className="text-center">atau</p>
                    <div className="divider"></div>
                </div>
                {/* google login */}
                <div className="login-google" type="submit">Masuk dengan Google<FcGoogle className="icon-google"/></div>
                {/* register */}
                <div className="register-link">
                    <p>Belum memiliki akun? <a href="#">Daftar</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;