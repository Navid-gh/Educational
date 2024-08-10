import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Public/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopButton from "./utils/ScrollToTopBtn";
import { ErrorBoundary } from "react-error-boundary";
import RequireAuth from "./utils/RequireAuth";
import useInitialAuth from "./hooks/useInitialAuth";
import useInitialBasketProducts from "./hooks/useInitialBasketProducts";
import Loader from "./Components/UI/Loader";
import NotFound from "./Pages/Public/NotFound";
import ErrorComp from "./Components/UI/ErrorComp";
import { Toaster } from "react-hot-toast";
import FixedContactUs from "./Components/FixedContactUs";

const Course = lazy(() => import("./Pages/Public/Course"));
const Book = lazy(() => import("./Pages/Public/Book"));
const Article = lazy(() => import("./Pages/Public/Article"));
const Login = lazy(() => import("./Pages/Public/Login"));
const Courses = lazy(() => import("./Pages/Public/Courses"));
const Books = lazy(() => import("./Pages/Public/Books"));
const Articles = lazy(() => import("./Pages/Public/Articles"));
const AboutUs = lazy(() => import("./Pages/Public/AboutUs"));
const ContactUs = lazy(() => import("./Pages/Public/ContactUs"));
const Basket = lazy(() => import("./Pages/Public/Basket"));
const BasketProducts = lazy(() => import("./Pages/Public/BasketProducts"));
const BasketUserInfo = lazy(() => import("./Pages/Public/BasketUserInfo"));
const BasketOrderDetails = lazy(
  () => import("./Pages/Public/BasketOrderDetails")
);
const FailedBuy = lazy(() => import("./Pages/Public/FailedBuy"));

const Admin = lazy(() => import("./Pages/Admin/Admin"));
const AdminSummary = lazy(() => import("./Pages/Admin/AdminSummary"));
const AdminCourses = lazy(() => import("./Pages/Admin/Courses"));
const AdminBooks = lazy(() => import("./Pages/Admin/Books"));
const AdminArticles = lazy(() => import("./Pages/Admin/Articles"));
const Add = lazy(() => import("./Pages/Admin/Add"));
const Edit = lazy(() => import("./Pages/Admin/Edit"));
const ManageComments = lazy(() => import("./Pages/Admin/ManageComments"));
const ManageFaqs = lazy(() => import("./Pages/Admin/ManageFaqs"));
const ManageChapters = lazy(() => import("./Pages/Admin/ManageChapters"));
const ManageViews = lazy(() => import("./Pages/Admin/ManageViews"));
const ManageDiscountCode = lazy(
  () => import("./Pages/Admin/ManageDiscountCode")
);
const ManageContactUs = lazy(() => import("./Pages/Admin/ManageContactUs"));
const ManageUsers = lazy(() => import("./Pages/Admin/ManageUsers"));
const ManageEvents = lazy(() => import("./Pages/Admin/ManageEvents"));
const ManageSlides = lazy(() => import("./Pages/Admin/ManageSlides"));
const Sales = lazy(() => import("./Pages/Admin/Sales"));

const User = lazy(() => import("./Pages/User/User"));
const Summary = lazy(() => import("./Pages/User/Summary"));
const Info = lazy(() => import("./Pages/User/Info"));
const Orders = lazy(() => import("./Pages/User/Orders"));
const Free = lazy(() => import("./Pages/User/Free"));

function App() {
  const isReady = useInitialAuth();
  useInitialBasketProducts();
  return (
    <>
      <Router>
        {isReady ? (
          <>
            <ScrollToTop />
            <Navbar />
            <Toaster />
            <Routes>
              <Route
                path="/"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <Home />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/Course/:id/:name"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <Suspense fallback={<Loader />}>
                      <Course />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/Courses"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <Suspense fallback={<Loader />}>
                      <Courses />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/Courses/:category"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <Suspense fallback={<Loader />}>
                      <Courses />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/Book/:id/:name"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <Suspense fallback={<Loader />}>
                      <Book />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/Books"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <Suspense fallback={<Loader />}>
                      <Books />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/Article/:id/:name"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <Suspense fallback={<Loader />}>
                      <Article />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/Articles"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <Suspense fallback={<Loader />}>
                      <Articles />
                    </Suspense>
                  </ErrorBoundary>
                }
              />
              <Route
                path="/Login"
                element={
                  <Suspense fallback={<Loader />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="/About-us"
                element={
                  <Suspense fallback={<Loader />}>
                    <AboutUs />
                  </Suspense>
                }
              />
              <Route
                path="/Contact-us"
                element={
                  <Suspense fallback={<Loader />}>
                    <ContactUs />
                  </Suspense>
                }
              />
              <Route
                path="/Basket"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <RequireAuth allowedRoles={["USER", "ADMIN"]}>
                      <Suspense fallback={<Loader />}>
                        <Basket />
                      </Suspense>
                    </RequireAuth>
                  </ErrorBoundary>
                }
              >
                <Route
                  index
                  element={
                    <Suspense fallback={<Loader />}>
                      <BasketProducts />
                    </Suspense>
                  }
                />
                <Route
                  path="Information"
                  element={
                    <Suspense fallback={<Loader />}>
                      <BasketUserInfo />
                    </Suspense>
                  }
                />
                <Route
                  path="Order"
                  element={
                    <Suspense fallback={<Loader />}>
                      <BasketOrderDetails />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                path="/Admin"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <RequireAuth allowedRoles={["USER", "ADMIN"]}>
                      <Suspense fallback={<Loader />}>
                        <Admin />
                      </Suspense>
                    </RequireAuth>
                  </ErrorBoundary>
                }
              >
                <Route
                  index
                  element={
                    <Suspense fallback={<Loader />}>
                      <AdminSummary />
                    </Suspense>
                  }
                />
                <Route
                  path="Courses"
                  element={
                    <Suspense fallback={<Loader />}>
                      <AdminCourses />
                    </Suspense>
                  }
                />
                <Route
                  path="Books"
                  element={
                    <Suspense fallback={<Loader />}>
                      <AdminBooks />
                    </Suspense>
                  }
                />
                <Route
                  path="Articles"
                  element={
                    <Suspense fallback={<Loader />}>
                      <AdminArticles />
                    </Suspense>
                  }
                />
                <Route
                  path=":parent/Add"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Add />
                    </Suspense>
                  }
                />
                <Route
                  path=":parent/Edit"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Edit />
                    </Suspense>
                  }
                />
                <Route
                  path=":parent/Manage-Comments"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ManageComments />
                    </Suspense>
                  }
                />
                <Route
                  path=":parent/Manage-FAQs"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ManageFaqs />
                    </Suspense>
                  }
                />
                <Route
                  path=":parent/Manage-Chpaters"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ManageChapters />
                    </Suspense>
                  }
                />
                <Route
                  path="Manage-Views"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ManageViews />
                    </Suspense>
                  }
                />
                <Route
                  path="Manage-Discount"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ManageDiscountCode />
                    </Suspense>
                  }
                />
                <Route
                  path="Manage-Contacts"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ManageContactUs />
                    </Suspense>
                  }
                />
                <Route
                  path="Manage-Users"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ManageUsers />
                    </Suspense>
                  }
                />
                <Route
                  path="Manage-Events"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ManageEvents />
                    </Suspense>
                  }
                />
                <Route
                  path="Manage-Slides"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ManageSlides />
                    </Suspense>
                  }
                />
                <Route
                  path="Sales"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Sales />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                path="/User"
                element={
                  <ErrorBoundary fallback={<ErrorComp />}>
                    <RequireAuth allowedRoles={["USER", "ADMIN"]}>
                      <Suspense fallback={<Loader />}>
                        <User />
                      </Suspense>
                    </RequireAuth>
                  </ErrorBoundary>
                }
              >
                <Route
                  index
                  element={
                    <Suspense fallback={<Loader />}>
                      <Summary />
                    </Suspense>
                  }
                />
                <Route
                  path="Information"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Info />
                    </Suspense>
                  }
                />
                <Route
                  path="Orders/:cat"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Orders />
                    </Suspense>
                  }
                />
                <Route path="Free" element={<Free />} />
              </Route>
              <Route
                path="Failed"
                element={
                  <Suspense fallback={<Loader />}>
                    <FailedBuy />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loader />}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
            <Footer />
            <FixedContactUs />
            <ScrollToTopButton />
          </>
        ) : (
          <Loader />
        )}
      </Router>
    </>
  );
}

export default App;
