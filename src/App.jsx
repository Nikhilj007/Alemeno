import './App.css'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import CourseList from './components/CourseList'
import Student from './components/Student'
import CourseDescription from './components/CourseDescription'

function App() {
  const location= useLocation(); 
  const route = location.pathname.split('/')[1]; 

  return (
    <div style={{position:'relative'}}>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/student" element={<Student />} />
        <Route path="/course/:id" element={<CourseDescription />} />
      </Routes>
      <Link to={route==='student'?'/':'/student'} style={{position:'fixed', bottom:'4rem', right:'4rem',background:'red',padding:'4px 20px',color:'white'}}>{route==='student'?'Course List':'Student Dashboard'}</Link>
    </div>
  )
}

export default App
