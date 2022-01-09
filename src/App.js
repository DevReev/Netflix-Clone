import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import { IonApp, IonContent,} from '@ionic/react';

function App() {
  return (
    <IonApp>
      {/* <IonContent> */}
      <div className="app">
        {/* <h1>Netflix</h1> */}
        <Nav />
        <Banner />
        <Row title='Trending' fetchUrl={requests.fetchTrending} isLarge/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
        <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Mystery' fetchUrl={requests.fetchMystery}/>
        <Row title='SciFi' fetchUrl={requests.fetchSciFi}/>
        <Row title='Western' fetchUrl={requests.fetchWestern}/>
        <Row title='Animation' fetchUrl={requests.fetchAnimation}/>
        <Row title='TV' fetchUrl={requests.fetchTV}/>
      </div>
      {/* </IonContent> */}
    </IonApp>
  );
}

export default App;
