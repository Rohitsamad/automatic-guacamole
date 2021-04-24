import React from 'react';

const Login = (props) => {

    const {email, setEmail, password, setPassword, handleLogin, handlesignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <label>username</label>
                <input 
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value) }
                />
                <p className="errorMsg">{emailError}</p>
                <label>password</label>
                <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value) } 
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Log in</button>
                        <p>
                            Dont have an account ?
                            <span onClick={() => setHasAccount(!hasAccount)}>sign up</span>
                        </p>
                        </>
                    ) : (
                        <>
                        <button onClick={handlesignup}>sign up</button>
                        <p>
                            Have an account ?
                            <span onClick={() => setHasAccount(!hasAccount)}>log in</span>
                        </p>
                        </>
                    )}
                 </div>
            </div>
            </section>
    )
}

export default Login;