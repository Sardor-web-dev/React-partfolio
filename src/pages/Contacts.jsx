const Contacts = () => {
    return(
        <>
            <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Samarkand, Uzbekistan</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+998883928811">+998 (88) 392 88 11</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="dzamolovsardor5@gmail.com">dzamolovsardor5@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
        </>
    );
}

export default Contacts;