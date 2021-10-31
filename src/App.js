import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Bookings from './Pages/Bookings/Bookings';
import ManageAllBookings from './Pages/ManageAllBookings/ManageAllBookings';
import AddNewTourPlan from './Pages/AddNewTourPlan/AddNewTourPlan';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/Not Found/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import MyBookings from './Pages/MyBookings/MyBookings';

function App() {
  return (
    <div className="App">
      <AuthProvider>
          <BrowserRouter>
            <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>

                <Route path="/home">
                  <Home></Home>
                </Route>

                <Route path="/login">
                  <Login></Login>
                </Route>

                <PrivateRoute path="/bookings/:serviceId">
                  <Bookings></Bookings>
                </PrivateRoute>

                <PrivateRoute path="/mybookings">
                  <MyBookings></MyBookings>
                </PrivateRoute>

                <PrivateRoute path="/managebookings">
                  <ManageAllBookings></ManageAllBookings>
                </PrivateRoute>

                <PrivateRoute path="/addnewtour">
                  <AddNewTourPlan></AddNewTourPlan>
                </PrivateRoute>

                <Route path="/*">
                  <NotFound></NotFound>
                </Route>

              </Switch>
          </BrowserRouter>
          <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
