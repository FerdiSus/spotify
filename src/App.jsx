import { useState } from "react"

function App()
{
  return (
    <>
      <div className="row mx-1">
        <div className="col-3 p-0">
          <Sidebar/>
        </div>
        <div className="col p-0">
          <Main/>
        </div>
      </div>
    </> 
  )
}

function Sidebar()
{
  return(
    <>
      <TopSidebar/>
    </>
  )
}

function MusicCard(props)
{
  const [togglePlay, setTogglePlay] = useState(false);

  return(
    <div key={props.key} className="col-3 text-white pe-2">
      <div className="card" style={{backgroundColor: togglePlay ? 'grey' : 'transparent'}}>
        <div className="card-body">
          <div style={{position: 'relative'}} onMouseOver={() => setTogglePlay(true)} onMouseOut={() => setTogglePlay(false)}>
            <img src={props.item.image} style={{width: '100%'}}/>
            <div style={{position: 'absolute', right: 10, bottom:  10}} className={togglePlay ? 'd-block' : 'd-none'}>
              <div className="bg-success d-flex justify-content-center align-items-center" style={{borderRadius: 50, width: 50, height: 50}}>
                <i style={{color: "black", fontSize: 30} }className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
          <span className="h5 text-white">{props.item.title}</span>
          <p className="text-white" style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap', maxLines: 2}}>{props.item.desc}</p>
        
        </div>

      </div>
    </div>
  )
}

function Section(props)
{
  return(
    <div>
      <div className="d-flex justify-content-between">
        <span className="h3 text-white">{props.title}</span>
        <a onClick={props.showAll} className="text-white">Show all</a>
      </div>
      <div className="row">
        {
          props.data?.map((item, key) =>  {
            return(
              <MusicCard key={key} item={item}/>
            )
          })  
        }
      </div>
    </div>
  )
}

function Main()
{
  return(
    <div className="card bg-dark mt-2">
      <div className="card-header d-flex justify-content-between">
        <div className="d-flex float-left">
          <ButtonNav icon="bi bi-chevron-left" onClick={() => {}}/>
          <ButtonNav icon="bi bi-chevron-right" onClick={() => {}}/>
        </div>
        <div className="d-flex float-left">
          <ButtonAuth label="Sign up" mode="dark" onClick={() => {}}/>
          <ButtonAuth label="Login" mode="light" onClick={() => {}}/>
        </div>
      </div>
      <div className="card-body">
        <Section title="Spotify Playlist" 
          showAll={() => {}} 
          data={[
            {
              title : "Today\'s Top Hits",
              desc  : "Post Malone is the top op the Hottest asdasdasdasdasd",
              image : "https://graphicriver.img.customer.envatousercontent.com/files/301270450/ayahuasca-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=2f4aaed2c4645203879a845ad1b3fb7a",
              onclick : () => {}
            },
            {
              title : "Today\'s Top Hits",
              desc  : "Post Malone is the top op the Hottest asdasdasdasdasd",
              image : "https://graphicriver.img.customer.envatousercontent.com/files/297091070/housemusic-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1c36024c82257c5b1c5cc117af8627fc",
              onclick : () => {}
            },
            {
              title : "Today\'s Top Hits",
              desc  : "Post Malone is the top op the Hottest asdasdasdasdasd",
              image : "https://graphicriver.img.customer.envatousercontent.com/files/306906944/chlorine-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=a3b67c63fa0fbad79f1a3482f2b0a5a3",
              onclick : () => {}
            },
            {
              title : "Today\'s Top Hits",
              desc  : "Post Malone is the top op the Hottest asdasdasdasdasd",
              image : "https://graphicriver.img.customer.envatousercontent.com/files/301907403/nextroom-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=6faa53ecd772344dcdd43e36aa68a3c6",
              onclick : () => {}
            }
          ]}
          />
        <Section title="Focus" 
          showAll={() => {}} 
          data={[
            {
              title : "Today\'s Top Hits",
              desc  : "Post Malone is the top op the Hottest asdasdasdasdasd",
              image : "https://graphicriver.img.customer.envatousercontent.com/files/301270450/ayahuasca-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=2f4aaed2c4645203879a845ad1b3fb7a",
              onclick : () => {}
            },
            {
              title : "Today\'s Top Hits",
              desc  : "Post Malone is the top op the Hottest asdasdasdasdasd",
              image : "https://graphicriver.img.customer.envatousercontent.com/files/297091070/housemusic-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=1c36024c82257c5b1c5cc117af8627fc",
              onclick : () => {}
            },
            {
              title : "Today\'s Top Hits",
              desc  : "Post Malone is the top op the Hottest asdasdasdasdasd",
              image : "https://graphicriver.img.customer.envatousercontent.com/files/306906944/chlorine-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=a3b67c63fa0fbad79f1a3482f2b0a5a3",
              onclick : () => {}
            },
            {
              title : "Today\'s Top Hits",
              desc  : "Post Malone is the top op the Hottest asdasdasdasdasd",
              image : "https://graphicriver.img.customer.envatousercontent.com/files/301907403/nextroom-albumcover-template-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=6faa53ecd772344dcdd43e36aa68a3c6",
              onclick : () => {}
            }
          ]}
          />
      </div>
    </div>
  )
}

function ButtonNav(props)
{
  return(
    <div className="d-flex text-white justify-content-center align-items-center m-1" style={{borderRadius: 25, backgroundColor: "black", width: 30, height: 30}} onClick={props.onClick}>
      <i style={{fontSize: 20}} className={props.icon}></i>
    </div>
  )
}

function ButtonAuth(props)
{
  return(
    <div className="px-3 py-2" onClick={props.onClick} style={{backgroundColor: props.mode === 'dark' ? 'transparent' : 'white', borderRadius: 20}}>
      <span style={{color: props.mode === 'dark' ? 'lightgrey' : 'black', fontWeight: "bold"}} className="">{props.label}</span>
    </div>
  )
}

function TopSidebar()
{
  return (
    <div className="card bg-dark m-2">
      <div className="card-body">
        <Menu icon="bi bi-house-fill" label="Beranda" onClick={() => {}}></Menu>
        <Menu icon="bi bi-search" label="Kalender" onClick={() => {}}></Menu>
      </div>
    </div>
  )
}

function Menu(props)
{
  return(
    <div className="d-flex py-1 text-white justify-content-start align-item-center" onClick={props.onClick}>
      <div className="pe-2">
        <i style={{fontSize: 10}} className={props.icon}></i>
      </div>
      <div>
        <span style={{fontSize: 20}} className="">{props.label}</span>
      </div>
    </div>
  )
}

export default App