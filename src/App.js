import DonationForm from './Components/DonationForm/DonationForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentIntegrationForm from './Components/DonationForm/PaymentIntegrationForm';
import Sidebar from './Components/StudentPortal/Sidebar/Sidebar';
import Courses from './Components/StudentPortal/Courses/Courses';
import Assignments from './Components/StudentPortal/Assignments/Assignments';
import StudentProfile from './Components/StudentPortal/StudentProfile/StudentProfile';
import LiveClasses from './Components/StudentPortal/LiveClasses/LiveClasses';
import { CourseProvider } from './Context/CreateContext';
function App() {
  return (
    <>
      <BrowserRouter>
        <CourseProvider>
          <Routes>
            <Route path='/' element={<Sidebar />}></Route>
            <Route path='/profile' element={<StudentProfile />}></Route>
            <Route path='/courses' element={<Courses />}></Route>
            <Route path='/schedule' element={<LiveClasses />}></Route>
            <Route path='/profile' element={<StudentProfile />}></Route>
            <Route path='/assignments' element={<Assignments />}></Route>
          </Routes>
        </CourseProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
