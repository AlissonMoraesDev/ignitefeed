import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alissonmoraesdev.png',
      name: 'Alisson Moraes',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-09-29 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/valeskamoraes86.png',
      name: 'Valeska Moraes',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Oi, gente 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz com muita felicidade. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-09-28 09:21:00')
  }
]

// 

export  function App() {
  return (
    <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
         {posts.map(post => {
          return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
         })}
      </main>
    </div>
    </div>
  )
}
