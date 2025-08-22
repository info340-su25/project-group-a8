
import { getAuth, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignOut() {
    const navigate = useNavigate();
    //added by chat instead of using a const signout method
    useEffect (()=> {
        console.log("Signing Out");
        const auth = getAuth();
        signOut(auth)
        //this was added by chatGPT to know how to do a set a wait time for this page
        // before navigating 
        .then(() => {
            console.log("Sign Out Successful");
            setTimeout(() => {
                navigate("/login");
            }, 3000);   
        })
        .catch((error) => {
            console.error("Error signing out:", error);
            navigate("/login");
        });
    }, [navigate]);
    return( 
        <div className="container-fluid">
            {/* Hero Section */}
            <section className="hero-section text-center py-5">
                <div className="container">
                    <h1 className="display-3 fw-bold mb-4">See You Soon!</h1>
                    
                    <div className="d-flex justify-content-center mb-5">
                        <img src="img/cute_lil_bear.png" alt="Cute bear mascot" className="img-fluid hero-mascot cute-lil-bear-img" style={{maxHeight: '500px'}} />
                    </div>
                    <p> Signing you out...</p>
                </div>
            </section>
        </div>
    );

}