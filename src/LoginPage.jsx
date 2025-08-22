import { StyledFirebaseAuth } from "react-firebaseui";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import App from './App.jsx';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";




export function LoginPage(){
    //const [currUser, setCurrUser] = useState([]);
    
    const navigate = useNavigate();
    const authenticator = getAuth();

    // const configObj = {
    //     signInOptions: [ 
    //       GoogleAuthProvider.PROVIDER_ID,
    //       EmailAuthProvider.PROVIDER_ID, 
    //     ],
    //     signInFlow: 'popup', //don't redirect to authenticate
    //     credentialHelper: 'none', //don't show the email account chooser
    //     callbacks: { //"lifecycle" callbacks
    //       signInSuccessWithAuthResult: () => {
    //         console.log('user is logged in')
    //         navigate('/');
            
    //         return false; //don't redirect after authentication
    //       }
    //     }
    // }

    const configObj = {
        signInOptions: [ 
          GoogleAuthProvider.PROVIDER_ID,
          EmailAuthProvider.PROVIDER_ID, 
        ],
        signInFlow: 'popup', //don't redirect to authenticate
        credentialHelper: 'none', //don't show the email account chooser
        callbacks: { //"lifecycle" callbacks
          signInSuccessWithAuthResult: () => {
            console.log('user is logged in')
            navigate('/home');
            // Don't navigate here, let the App.jsx useEffect handle it based on currUser
            return false; //don't redirect after authentication
          }
        }
    }
    

        
    

    

    return (
        <div className="container-fluid">
            {/* Hero Section */}
            <section className="hero-section text-center py-5">
                <div className="container">
                    <h1 className="display-3 fw-bold mb-4">Welcome to Unfold</h1>
                    <p className="lead mb-5">Your digital wellness garden for reflection, growth, and joy</p>
                    
                    <div className="d-flex justify-content-center mb-5 pt-4">
                        <img src="img/cute_lil_bear.png" alt="Cute bear mascot" className="img-fluid hero-mascot cute-lil-bear-img" style={{maxHeight: '200px'}} />
                    </div>
                </div>
            </section>
            <section className="Login">
                <StyledFirebaseAuth 
                    firebaseAuth={authenticator}
                    uiConfig={configObj}
                />
                
            </section>
        </div>
    )
}