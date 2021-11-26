import Link from "next/link";
import image from "next/image";
import styles from "../styles/EventItem.module.css";

export default function EventItem(props) {
    return (
        <div className ={styles.event}>
            <div className={styles.img}>
        
               <img
               src={
                   props.eventData.image
                ?  props.eventData.image
               : "/images/event-default.png"}
               width ={200}
               height={150}
               />       
    </div>
         <div className={styles.info}>
             <span>{props.eventData.date}at {props.eventData.time}</span>
             <h3>{props.eventData.name}</h3>
             <h2>{props.eventData.performers}</h2>
             
             </div> 

             <div className= {styles.link}>
             <Link href={`/events/${props.eventData.slug}`}>
             <a >Details</a>
             </Link>
             </div>
        </div>
    );
}
