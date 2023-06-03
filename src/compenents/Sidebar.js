
import { Link, useNavigate } from 'react-router-dom';
import erasmusdays_logo from "../erasmusdays_logo.jpg";
import axios from 'axios';
import { useState } from 'react';
import SignOut from '../functions/SignOut'
function Sidebar(props) {
    const navigate = useNavigate();
    const [formdisable, setFormdisable] = useState('');
    const [gordisable, setGordisable] = useState('');
    const [guncelledisable, setGuncelledisable] = useState('');

    const username = sessionStorage.getItem('username');
    const sidebarKontrol = async () => {
        const id = sessionStorage.getItem("id");

            try {
                const response = await axios.post("http://localhost:3001/sidebarKontrol", { id });
            if (response.status == 200) {

                setFormdisable(" disabled");
                setGordisable(" ");
                setGuncelledisable(" ");
                

            }
            } catch (error) {
                
                setFormdisable(" ");
                setGordisable(" disabled");
                setGuncelledisable(" disabled");
            }
            
            
            

       
    }
    sidebarKontrol();

    return (
        <>

            <div class="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white" style={{ width: "280px", height: "100%", }}>
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white link-body-emphasis text-decoration-none">
                    <img className='mx-3' src={erasmusdays_logo} width={100} style={{ borderRadius: 100 }} />



                </a><span class="fs-4">Erasmus Programı </span>

                <hr />
                <ul class="nav nav-pills flex-column mb-auto text-white">
                    <li class="nav-item">
                        <Link className={`nav-link ${props.form_active} ${formdisable}`}
                            aria-current="page"
                            to={`${props.form_to}`}
                        >
                            Başvuru Formu
                        </Link>
                    </li>
                    <li>
                        <Link className={`nav-link ${props.gor_active} ${gordisable}`}
                            aria-current="page"
                            to={`${props.gor_to}`}
                        >
                            Başvuru Görüntüle</Link>
                    </li>
                    <li>
                        <a className="dropdown-item">
                            <Link className={`nav-link ${props.guncelle_active} ${guncelledisable}`}
                                aria-current="page"
                                to='/portal/BasvuruGuncelle'
                            >
                                Başvuru Güncelle
                            </Link>
                        </a>
                    </li>
               

                </ul>
                <hr />
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center link-body-emphasis text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                        <strong>{username}</strong>
                    </a>
                    <ul class="dropdown-menu text-small shadow" >
                        <li><Link className='dropdown-item'
                            aria-current="page"
                            to='/sifreDegistir'
                        >
                            Şifre Değiştir</Link></li>
                        <li><a className="dropdown-item" href="#" onClick={() => SignOut(navigate)}>Çıkış Yap</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Sidebar;