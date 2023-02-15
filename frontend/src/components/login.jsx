import { useContext, useState }  from 'react';
import { useHistory } from 'react-router'

    function Login() {

        const history = useHistory()
    
        const { setCurrentUser } = useContext(CurrentUser)
    
        const [credentials, setCredentials] = useState({
            email: '',
            password: ''
        })
    
        const [errorMessage, setErrorMessage] = useState(null)
    
        async function handleSubmit(e) {
            e.preventDefault()
           const response = await fetch('http://localhost:5000/authentication/', {
            method: 'POST',
            headers: {
                'Content.Type': 'application/json'
            },
            body: JSON.stringify(credentials)
           });
           const data = await response.json();
           
           if (response.status === 200) {
            setCurrentUser(data.user)
            history.push('/')
           } else {
            setErrorMessage(data.message)
           }
        }
    
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
export default Login
