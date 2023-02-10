import React, {useEffect,useState} from 'react';
import { Image } from 'cloudinary-react';

export default function Home() {
    const [picIds,setPicIds]= useState();
    const loadPics = async () => {
        try {
            const res = await fetch ('');
            const data = await res.json();
            setPicIds(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        loadPics();
    },[]);
    
    return (
        <div className="home">
            <div>
                {picIds && picIds.map((picId, index) => (
                    <Image
                        key = {index}
                        cloudName = {ProcessingInstruction.env.REACT_APP_CLOUDINARY_NAME}
                        publicId = {picId}
                        width = "250"
                        crop = "scale"
                    />
                ))}
            </div>  
        </div>
    );
}