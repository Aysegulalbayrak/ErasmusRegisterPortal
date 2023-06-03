import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Kayit() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate =useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != passRepeat) {
            setError("Şifreler eşleşmiyor");
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:3001/kayit',
            {email,password}
            );

            if(response.status===200){
                setSuccess('Kayıt Başarılı. Giriş yapabilirsiniz.');
                setEmail('');
                setPassword('');
                setPassRepeat('');
                setError('');
                setTimeout( () => {
                    navigate('/');
                }, 2000); 
            }
            else{
                setError('Kayıt oluştururken hata oluştu.')
            }
            
        } catch (err) {
            setError('Kayıt oluştururken beklenmedik bir hata oluştu.')
            
        }


    }

    return (
        <>
            <div className=" text-dark   py-5 ">
                <div class="row d-flex justify-content-center">
                    <div class="bg-light col-4 rounded border border-warnin p-5">

                        <form onSubmit={handleSubmit}>
                            <i className="fa-solid fa-pen-nib fa-4x"></i>
                            <h1 className="h3 mb-3 fw-normal">Kayıt Ol</h1>

                            <div className="form-floating py-2">
                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <label for="floatingInput">Email adresi</label>
                            </div>
                            <div className="form-floating py-2">
                                <input type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Şifrenizi Giriniz"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label for="floatingPassword">Şifrenizi Giriniz</label>
                            </div>
                            <div className="form-floating py-2">
                                <input type="password"
                                    className="form-control"
                                    id="passRepeat"
                                    placeholder="Tekrar Şifrenizi Giriniz"
                                    value={passRepeat}
                                    onChange={(e) => setPassRepeat(e.target.value)}
                                    required

                                />
                                <label for="floatingPassword">Tekrar Şifrenizi Giriniz</label>
                            </div>
                            <button type="submit" className="w-100 btn btn-warning" >Kayıt Ol</button>
                        </form>
                        {success && <p style={{ color: 'green' }}>{success}</p>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <p>
                            Hesabınız var mı? <Link to="/">Giriş Yap</Link>
                        </p>


                    </div>
                </div>

            </div>

        </>
    );
}
export default Kayit;