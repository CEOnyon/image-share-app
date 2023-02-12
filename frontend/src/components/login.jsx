import React, { Component }  from 'react';


export default class Login extends Component {
    render(){
        return (
            
            <div className="login-form">
            <form>
                <h3>Log in</h3>
                    <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            </form>
            </div>
        );
    }
}

// const Login = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         console.log(e);
//     }

//     return (
//         <form className="login" onSubmit>
//             <h3>Login</h3>

//             <label>Email:</label>
//             <input
//                 type="email"
//                 onChange={(e) => setEmail(e.target.value)}
//                 value={email}
//             />
//             <label>Password</label>
//             <input
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//             />

//             <button>Login</button>
//         </form>
//     )

// }

// export default Login