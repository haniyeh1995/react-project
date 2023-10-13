import { useState } from 'react'
import Header from './header/header.jsx'
import profileimg from './header/pub/profilepic.png'
import Leftside from './leftside/Leftside.jsx'
import StoryList from './story/StoryList.jsx'
import profilePic from "./story/public/1.png"
import profilePic2 from "./story/public/2.png"
import profilePic3 from "./story/public/3.png"
import profilePic4 from "./story/public/4.png"
import profilePic5 from "./story/public/5.png"
import CreatePost from './Post/CreatePost'
import PostList from "./Post/PostList"
import SuggestBlock from "./SuggestBlock/SuggestBlock.jsx"
import smithImg from "./Post/public/1.png"
import stiveImg from "./Post/public/3.png"
import robertImg from "./Post/public/2.png"
import profileIcon1 from './SuggestBlock/public-pages/1.png'
import profileIcon2 from './SuggestBlock/public-pages/2.png'
import profileIcon3 from './SuggestBlock/public-pages/3.png'
import profileIcon4 from './SuggestBlock/public-pages/4.png'
import profileIcon5 from './SuggestBlock/public-pages/5.png'
import profileIcon6 from './SuggestBlock/public-pages/6.png'
import profileIcon7 from './SuggestBlock/public-contact/1.png'
import profileIcon8 from './SuggestBlock/public-contact/2.png'
import profileIcon9 from './SuggestBlock/public-contact/3.png'
import profileIcon10 from './SuggestBlock/public-contact/4.png'
import profileIcon11 from './SuggestBlock/public-contact/5.png'
import profileIcon12 from './SuggestBlock/public-contact/6.png'
import './App.css'


function App() {
  const Tabs = [
    { text: "Explore", link: "#" },
    { text: "Community post", link: "#" },
    { text: "Pages", link: "#" },
  ]
  const profileInfo = {
    nickname: "Chandan S",
    username: "@uiuxchandan",
    profileimg: profileimg,
  }
  const [selectedView, setSelectedView] = useState(0)

  const defaultStories = [{
    profileURL: profilePic,
    username: "Esther Howard",
    id: "1",
    content: profilePic,
    seen: false,
  }, {
    profileURL: profilePic2,
    username: "Arlene McCoy",
    id: "2",
    content: profilePic,
    seen: true,
  }, {
    profileURL: profilePic3,
    username: "Robert Fox",
    id: "3",
    content: profilePic,
    seen: false,
  }, {
    profileURL: profilePic4,
    username: "Albert Flores",
    id: "4",
    content: profilePic,
    seen: false,
  }, {
    profileURL: profilePic5,
    username: "Annette Black",
    id: "5",
    content: profilePic,
    seen: false,
  }]

  const [stories, setStories] = useState(defaultStories.sort((a, b) => {
    if (a.seen && !b.seen) {
      return 1;
    } else if (!a.seen && b.seen) {
      return -1;
    } else {
      return 0;
    }
  }))

  function showStory(id) {
    const idStory = id
    const newStories = stories.map((story) => (story.id == String(idStory) ? { ...story, "seen": true } : story))
    setStories([...newStories.sort((a, b) => {
      if (a.seen && !b.seen) {
        return 1;
      } else if (!a.seen && b.seen) {
        return -1;
      } else {
        return 0;
      }
    })])

    const storyContent = "Imagine this is Story u are watching !"
    alert(storyContent)
  }

  function addStory() {}

  const suggestedPages ={
    title:"Contacts",
    list:[
        {name:"Graphic design",imgURL:profileIcon1},
        {name:"Technology news update",imgURL:profileIcon2},
        {name:"Freelancing tips",imgURL:profileIcon3},
        {name:"Marketing",imgURL:profileIcon4},
        {name:"Blender tutorials",imgURL:profileIcon5},
        {name:"Power of learning",imgURL:profileIcon6},
    ]
    ,

  }
  const suggestedContacts ={
    title:"Suggested Contacts",
    list:[
        {name:"Bessie Cooper",imgURL:profileIcon7},
        {name:"Savannah Nguyen",imgURL:profileIcon8},
        {name:"Ralph Edwards",imgURL:profileIcon9},
        {name:"Jerome Bell",imgURL:profileIcon10},
        {name:"Ronald Richards",imgURL:profileIcon11},
        {name:"Dianne Russell",imgURL:profileIcon12},
    ]
    ,

  }

  const defaultPosts = [{
    id:1,
    createdAt:'12h ago ',
    textContent : "In the fast-paced world of corporate life, it's crucial to prioritize your mental peace. Take moments to breathe, reflect, and recharge. Seek solace in small rituals, like morning walks, deep breaths, or a quick meditation session during breaks. #mentalpeace #corporatelife",
    likes: "2.8K Likes",
    commentsCount: 7,
    Creator :{
        nickname:"Smith jems",
        profileImg:smithImg
    },
    category:0,

},{
    id:2,
    createdAt:'1d ago ',
    textContent : "Creativity is intelligence having fun! #design #stevejobs",
    likes: "2.8K",
    commentsCount: 8,
    Creator :{
        nickname:"Robert Fox",
        profileImg:robertImg
    },
    img:stiveImg
    ,
    category:0,


},
]


const [posts,setPost] = useState(defaultPosts)

const viewPosts = posts.filter((post => post.category == selectedView ))
function viewHandler() {
  console.log("OK")
}



function createPost(post) {

  setPost(
    [
      post,
      ...posts,
      
    ]
  )

}


  return (
    <>
      <div className='container'>
        <div className='left'>
          <Leftside />
        </div>
        <div className='main'>
          <div className='header'>
            <Header Tabs={Tabs} selectedView={selectedView} content={profileInfo} setSelectedView={setSelectedView} />
          </div>
          <div className='main-content-section'>
            <div className="left-side">
              <div className="stories">
                <StoryList showStory={showStory} stories={stories} addStory={addStory} />
              </div>
              <div className="posts">
                <CreatePost profileimg={profileInfo.profileimg} createPost={createPost} selectedView={selectedView} />
                <PostList profileimg={profileInfo.profileimg} viewPosts={viewPosts} />
              </div>
            </div>
            <div className="right-side">
              <SuggestBlock key={suggestedContacts.title} suggested={suggestedContacts} onClick={viewHandler} />
              <SuggestBlock key={suggestedPages.title} suggested={suggestedPages} onClick={viewHandler} />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
