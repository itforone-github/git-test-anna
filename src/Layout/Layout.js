import Header from "Components/Header";
import Footer from "Components/Footer";

function Layout(props) {
    return (
        <>
        <div className="page-wrapper chiller-theme toggled">
            <Header />

            <main className="page-content">
                <div className="container-fluid">
                    <h2>
                        <strong></strong>
                        <span></span>
                    </h2>
                    {props.children}
                </div>
            </main>

            <Footer/>
        </div>
        </>
    );
}

export default Layout;