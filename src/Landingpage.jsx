import Navbar from './components/navbar';
import AuthForm from './components/AuthForm';
import UniversityCard from './components/Card';
import Logo from './assets/Logo.png'; 
import EducationInEgypt from './components/Past';

function Landingpage() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="university-card">
                    <UniversityCard 
                        image={Logo}
                        name="Alamein International University"
                        description="A modern university providing world-class education and research opportunities."
                    />
                </div>

                <div className="auth-form">
                    <AuthForm />
                </div>
            </div>

            <EducationInEgypt />
        </>
    );
}

export default Landingpage;