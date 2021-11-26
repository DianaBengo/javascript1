import Layout from "../Components/Layout";
import EventItem from "../Components/EventItem";
import { API_URL } from "../config/index";

export default function HomaPage(props) {
  // console.log(props.events);
  return (
    <div>
      <Layout title="events page">
        <h1>Music Events</h1>
        {props.eventsinfo.map((event) => {
          return <EventItem key={event.id} eventData={event} />;
        })}
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: { eventsinfo: events },
  };
}
