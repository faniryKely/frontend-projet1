import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./user";


export default function Home() {
  return (
    <>
      <div>

        <h1> Bienvenue sur patrimoine interface</h1>
      </div>
      
      <HomePage /> 
    </>
  );
}
