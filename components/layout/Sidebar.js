import Link from 'next/link'

export default function Sidebar({ handleSidebar, isSidebar }) {
    return (
        <>
            <div className="form-back-drop" onClick={handleSidebar}></div>
            <section className="hidden-bar">
                <div className="inner-box text-center">
                    <div className="cross-icon" onClick={handleSidebar}><span className="fa fa-times" /></div>
                    <div className="title">
                        <h4>Contactez-nous</h4>
                    </div>
                    {/*Appointment Form*/}
                    <div className="appointment-form">
                        <form method="post" action="contact">
                            <div className="form-group">
                                <input type="text" name="text" placeholder="nom" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email " required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Message" rows={5} />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="theme-btn style-two">Envoyer</button>
                            </div>
                        </form>
                    </div>
                  
                </div>
            </section>

        </>
    )
}
