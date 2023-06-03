import Sidebar from "./compenents/Sidebar";


function Portal(){
    return(
        <>
        <div className="row">
            <div className="col-4">
            <Sidebar 
                    gor_to="BasvuruGoruntule"
                    form_to="BasvuruFormu"/>
            
            </div>
            <div className="col-7 bg-white mt-1 h-50 w-90" >
           
                        <div className="bg-white  px-5 py-2" style={{borderRadius:15}}>

                            <h3>Başvuru Şartları</h3>

                            <div className="my-2">

                                <div className='row'>
                                    <div className='col-7'>
                                        <p>
                                            Erasmus Programı’na üniversite lisans programlarının (hazırlık dışında) birinci yılını tamamlamış, genel not ortalaması 2.20 nin üstünde olan tüm öğrenciler başvurabilir. Başvuran öğrencilerin yurtdışında eğitim alabilecek düzeyde (en az B1) yabancı dil bilmeleri gerekmektedir. Erasmus Programı’na katılım için başvuran öğrencilerin tümüne Erasmus Programı İngilizce Yeterlilik Sınavı verilir. Öğrenciler İngilizce dışında bir başka dilde programa katılmak istediklerinde, katılmak istedikleri dil düzeyini (en az B1) gösteren ulusal ya da uluslararası bir dil yeterlik belgesine sahip olmak zorundadırlar. Uluslararası yabancı dil yeterlik belgeleri YÖK dil denkliği tablosu esas alınarak puanlandırılır. Dil yeterlik sınavı sonucu ve öğrencinin genel not ortalaması aşağıdaki şekilde ağırlıklandırılarak, Erasmus puanı belirlenir. Erasmus programından faydalanmak için Erasmus puanının en az 60 olması gerekmektedir.
                                        </p>

                                    </div>
                                    

                                </div>
                                <ul>
                                    <li>Genel Not Ortalaması: %50</li>
                                    <li>Dil Sınavı Sonucu: %50</li>

                                </ul>
                            </div>
                            <div className="my-4">
                                <p>
                                    Erasmus başvuruları Erasmus duyurularda ilan edilen tarihler arasında online olarak alınır. Online başvuru formunun bir çıktısı alındıktan sonra öğrenci tarafından imzalanarak Erasmus Ofis’e teslim edilir. Erasmus değerlendirme sonuçları İstanbul Okan Üniversitesi web sayfasındaki duyurular bölümünde ve Erasmus web sayfasında ilan edilir.
                                </p>
                            </div>
                            <div className="my-4">

                                Erasmus başvuruları Erasmus duyurularda ilan edilen tarihler arasında online olarak alınır. Online başvuru formunun bir çıktısı alındıktan sonra öğrenci tarafından imzalanarak Erasmus Ofis’e teslim edilir. Erasmus değerlendirme sonuçları İstanbul Okan Üniversitesi web sayfasındaki duyurular bölümünde ve Erasmus web sayfasında ilan edilir.
                            </div>
                            <div className="my-4">

                                <p>
                                    <b>Önemli Açıklama: ERASMUS+</b>
                                    ERASMUS+ Programı, bir öğrencinin bir eğitim kademesinde, öğrenim ve staj hareketliliğine toplam katılım süresi 12 ayı geçmemek üzere, birçok kez katılımını olanaklı kılmaktadır. <b>Erasmus programından daha önce yararlanmış öğrenciler 2014-2015 yılı ve sonrasındaki yıllarda Erasmus Programına tekrar katılmak için başvurabilirler.</b>
                                    Sınava kayıt yaptırıp girmeyen ve sınav sonucuna göre Erasmus hareketliliğine hak kazanıp bu hakkı kullanmayan öğrencilerden girecekleri bir sonraki Erasmus sınavına göre hesaplanan Erasmus başarı puanından 5 puan kesilecek ve öğrenci o puanla sıralamaya alınacaktır.
                                </p>
                            </div>
                            <div className="my-4">

                                <p>
                                    <b>İkinci Kez Katılım Durumunda Puan Hesaplaması</b>
                                    Daha önce Erasmus programından yararlanmamış öğrencilere öncelik tanımak programın ilkelerinden birisidir. <b>Programa daha önce katılmış öğrencilerin Erasmus puanlarından 10 puan eksiltme yapılarak hesaplanması Ulusal Ajans tarafından kural olarak belirlenmiştir. </b>İkinci kez katılan öğrencilerin toplam Erasmus puanları hesaplandıktan sonra (%50 dil puanı + %50 GNO) çıkan sonuçtan 10 puan düşülecek ve öğrenci o puanla sıralamaya alınacaktır.
                                </p>


                            </div>
                        </div>
                    </div>
            </div>

        
            
        </>
    );
}
export default Portal;