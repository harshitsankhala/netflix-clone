import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";

{
  /* <httpProtocol>  
    <customHeaders>  
     <add name="Access-Control-Allow-Origin" value="*" />  
     <add name="Access-Control-Allow-Headers" value="Content-Type" />  
     <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE, OPTIONS" />  
    </customHeaders>  
  </httpProtocol>  */
}

//api key => ffcb6dc3ddd0b17464573898ca399086
//api req example => https://api.themoviedb.org/3/movie/550?api_key=ffcb6dc3ddd0b17464573898ca399086
// api read access token v4 =>eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmNiNmRjM2RkZDBiMTc0NjQ1NzM4OThjYTM5OTA4NiIsInN1YiI6IjYwODdlNGI4OWE4YThhMDAyODkwOWFjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dNFt_kXi2VIFYOYePa30H_qI93PHPcq1VerlmP4pFQk
//https://event.webinarjam.com/live/2/lqr3vumiqupz4yb7gkz
function App() {
  return (
    <div className="App">
      <Banner fetchUrl={request.fetchNetflixOriginals} />
      <Row
        title={`Netflix Originals`}
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={`Trending`} fetchUrl={request.fetchTrending} />
      <Row title={`Top Rated`} fetchUrl={request.fetchTopRated} />
      <Row title={`Action Movies`} fetchUrl={request.fetchActionMovies} />
      <Row title={`Comedy Movies`} fetchUrl={request.fetchComedyMovies} />
      <Row title={`Horror Movies`} fetchUrl={request.fetchHorrorMovies} />
      <Row title={`Romance Movies`} fetchUrl={request.fetchRomanceMovies} />
      {/* <Row title={`Documentries`} fetchUrl={request.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
