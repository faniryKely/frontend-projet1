"use client"

import{react} from 'react'
import styles from "./page.module.css";
import React, { useState } from 'react';
import Image from 'next/image';
import ilo from './assets/ilo.png'
import zety from './assets/zety.png'
import marck from './assets/marck.png'

const HomePage = () => {

    const [selectedMenu, setSelectedMenu] = useState('');

   
    const handleChange = (event) => {
      setSelectedMenu(event.target.value);
    };
  
    
    const images = {
      ilo,
      zety,
      marck
    };
  
    return (
      <>
      <div className={styles.bigContainer}>
      <div className={styles.Container}>
            <div className={styles.inputContainer}>
                <h2 className={styles.pat}>patrimoine</h2> 
                <select onChange={handleChange} value={selectedMenu} className={styles.selectInput}>
                    <option value="" disabled>user...</option>
                    <option value="ilo">ilo</option>
                    <option value="zety">zety</option>
                    <option value="marck">marck</option>
                </select>
            </div>
            <div className={styles.checkboxContainer}>
                <label>
                <input type="checkbox" /> Agregat
                </label>
                <label>
                <input type="checkbox" /> Immobilisations
                </label>
                <label>
                <input type="checkbox" /> Trésorerie
                </label>
                <label>
                <input type="checkbox" /> Obligations
                </label>
            </div>
            <div className={styles.dateContainer}>
                <div className={styles.dateInput}>
                    <label>Date de début</label>
                    <input type="date" />
                </div>
                <div className={styles.dateInput}>
                    <label>Date de fin</label>
                    <input type="date" />
                </div>
            </div>
            <div className={styles.messageContainer}>
                    <input type="text" placeholder="Entrez votre message ici..." className={styles.messageInput} />
                    <input type="text" placeholder="Entrez un autre message ici..." className={styles.messageInput} />
            </div>
        </div>
        <div className={styles.imgContainer}>
             {selectedMenu && (
                <div className={styles.imageContainer}>
                    <Image src={images[selectedMenu]} alt={selectedMenu} width={100} height={100} />
                </div>
                )}
        </div>
        
      </div>
      </>
    );
  };
  export default HomePage;
  