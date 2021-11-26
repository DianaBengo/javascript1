
import { API_URL } from "../../config/index";
import Layout from  "../../Components/Layout";
export default function Eventpage(props) {
const titleName=props.eventMello.name.split (" ");
  return (
    <Layout title ={`${titleName[0]} ${titleName[1]}`}>
       
<div>

      <h1>{props.eventMello.name}</h1>
      </div>
      </Layout>
  
    
  );
}
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: { eventMello: events[0] },
  };
}
