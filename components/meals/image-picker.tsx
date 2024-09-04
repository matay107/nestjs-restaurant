'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }: { label: string, name: string }) {
    const [pickedImage, setPickedImage] = useState<string | null>(null);
    const imageInput = useRef<HTMLInputElement>(null);

    function handlePickClick() {
        imageInput.current?.click();
    }

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) {
            setPickedImage(null);
            return;
        }
    
        const reader = new FileReader();
        reader.onload = (evt) => {
            // console.log(evt.target.result);
            setPickedImage(evt.target?.result as string);
        };
        reader.readAsDataURL(file);
    }

    return <>
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image.</p>}
                    {pickedImage && <Image src={pickedImage} fill alt='img'/>}
                </div>
                <input ref={imageInput} type="file" id={name} accept="image/png,image/jepg" name={name}
                    className={classes.input} onChange={handleImageChange} required />
                <button className={classes.button} type='button' onClick={handlePickClick}> Pick on Image</button>
            </div>
        </div>
    </>
}