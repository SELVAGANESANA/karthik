import React from "react";
import './gallery.css';
import pro2 from '../../assets/pro2.jpg'
import pro3 from '../../assets/pro3.jpg';
import pro4 from '../../assets/pro4.jpg';
import pro5 from '../../assets/pro5.jpg';
import pro6 from '../../assets/pro6.jpg';
import pro7 from '../../assets/pro7.jpg';
import pro8 from '../../assets/pro8.jpg';
import pro9 from '../../assets/pro9.jpg';
import pro10 from '../../assets/pro10.jpg';
import pro11 from '../../assets/pro11.jpg';
import pro12 from '../../assets/pro12.jpg';
import pro13 from '../../assets/pro13.jpg';
import pro14 from '../../assets/pro14.jpg';
import pro15 from '../../assets/pro15.jpg';
import pro16 from '../../assets/pro16.jpg';
import pro17 from '../../assets/pro17.jpg';
import pro18 from '../../assets/pro18.jpg';
import pro19 from '../../assets/pro19.jpg';
import pro20 from '../../assets/pro20.jpg';
import pro21 from '../../assets/pro21.jpg';
import pro22 from '../../assets/pro22.jpg';
import pro23 from '../../assets/pro23.jpg';
import pro24 from '../../assets/pro24.jpg';
import pro25 from '../../assets/pro25.jpg';
import pro26 from '../../assets/pro26.jpg';
import pro27 from '../../assets/pro27.jpg';
import pro28 from '../../assets/pro28.jpg';
import pro29 from '../../assets/pro29.jpg';
import pro30 from '../../assets/pro30.jpg';
import pro31 from '../../assets/pro31.jpg';
import pro32 from '../../assets/pro32.jpg';
import pro33 from '../../assets/pro33.jpg';
import pro34 from '../../assets/pro34.jpg';
import pro35 from '../../assets/pro35.jpg';
import pro36 from '../../assets/pro36.jpg';
import pro37 from '../../assets/pro37.jpg';
import pro38 from '../../assets/pro38.jpg';
import pro39 from '../../assets/pro39.jpg';
import pro40 from '../../assets/pro40.jpg';
import pro41 from '../../assets/pro41.jpg';

const Gallery= ()=>{
 
    const galleryimg = [
  pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10,
  pro11, pro12, pro13, pro14, pro15, pro16, pro17, pro18, pro19, pro20,
  pro21, pro22, pro23, pro24, pro25, pro26, pro27, pro28, pro29, pro30,
  pro31, pro32, pro33, pro34, pro35, pro36, pro37, pro38, pro39, pro40,pro41
];


    return(
        <div className="overallgallery">
            <div className="galimg">
            {galleryimg.map((galimg,index)=>(
                <img key={index} src={galimg} alt="" />
            ))}
            </div>
        </div>
    )
}

export default Gallery;