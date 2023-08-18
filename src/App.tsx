import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BrowserRouter, NavLink, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import ListofPosts from "./pages/ListsofPosts";
import CreatePostPage from "./pages/CreatePostPage"




function App() {
  return (
         <BrowserRouter>
                <div className="container-fluid bg-light p-0">
                        <Header/>

                        {/*Main*/}
                        <div className="row">
                            {/*Left*/}
                            <div className="vh-100 col-md-3">
                                <div className="bg-white px-4 pt-5 vh-100 me-4">
                                    <ul className="list-group list-group-flush">
                                        <NavLink to="/"
                                                 className="list-group-item rounded-2 border-0 list-group-item-action">
                                <span
                                    className="rounded-circle bg-transparent p-2 me-2"><BsFillHouseDoorFill/></span> Home
                                        </NavLink>
                                        <NavLink to="/post"
                                                 className="list-group-item rounded-2 border-0 list-group-item-action">
                                            Create post
                                        </NavLink>
                                    </ul>
                                </div>
                            </div>

                            {/*Middle*/}
                            <div className="vh-100 col-7 px-4 pt-3 pb-8 ">
                                <div className="bg-white p-5 rounded-3">
                                <Routes>
                                  <Route path="/" element={<ListofPosts />} />
                                  <Route path="/post" element={<CreatePostPage />} />
                                </Routes>
                                </div>
                            </div>

                            {/*Right*/}
                            <div className="vh-100 col"></div>
                        </div>
                    </div>
              </BrowserRouter>
)
}

export default App;
