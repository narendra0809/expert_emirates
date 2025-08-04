import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import BuyPlan from "./dashboard/BuyPlan";
import UserSettings from "./dashboard/UserSettings";
import TransactionHistory from "./dashboard/TransactionHistory";
import ReadBlog from "./blogdetail/ReadBlog";
import Image from "./forex/Image";
import UserDashboard from "./dashboard/components/UserDashboard";
import UserProtectedRoute from "./dashboard/UserProtectedRoute";
import AdminProtectedRoute from "./admin/AdminProtectedRoute";
import AdminDashboard from "./admin/AdminDashboard";
import AddPlan from "./admin/pages/AddPlan";
import Transaction from "./admin/pages/Transaction";
import AdminSettings from "./admin/pages/AdminSettings";
import CreatePost from "./admin/pages/CreatePost";
import PaymentMethod from "./admin/pages/PaymentMethod";
import ViewPosts from "./admin/pages/ViewPosts";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
// import StatusByProcessChart from "./admindashboad/StatusByProcessChart";

// Lazy-loaded components
const HomePage = lazy(() => import("./pages/Home"));
const Career = lazy(() => import("./carrier/Career"));
const FaqSection = lazy(() => import("./faq/FaqSection"));
const EducationData = lazy(() => import("./education/EducationData"));
const AwardsSection = lazy(() => import("./forecastAwards/AwardsSection"));
const Support = lazy(() => import("./support/Support"));
const AboutUs = lazy(() => import("./about/AboutUs"));
const Portfolio = lazy(() => import("./portfolio/Portfolio"));
const CompanyNews = lazy(() => import("./company-news/CompanyNews"));
const Forex = lazy(() => import("./forex/Forex"));
const Gold = lazy(() => import("./gold/Gold"));
const CryptoCurrency = lazy(() => import("./crypto-currency/CryptoCurrency"));
const FundedAccounts = lazy(() => import("./funded-accounts/FundedAccounts"));
const TradingBot = lazy(() => import("./tradingBot/TradingBot"));
const Platform = lazy(() => import("./platformMT4/Platform"));
const PlatformMt5 = lazy(() => import("./PlatformMT5/PlatformMt5"));
const CopyTrading = lazy(() => import("./copytrading/CopyTrading"));
const LoginPage = lazy(() => import("./authPages/Login"));
const SignUp = lazy(() => import("./authPages/SignUp"));
const ForgotPassword = lazy(() => import("./authPages/ForgetPassword"));
const OtpVerificationPage = lazy(() =>
  import("./authPages/OtpVerificationPage")
);
const ResetPasswordPage = lazy(() => import("./authPages/ResetPasswordPage"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

export default function AppRoutes() {
  const location = useLocation();

  const authRoutes = [
    "/login",
    "/sign-up",
    "/forgot-password",
    "/otp-verification",
    "/reset-password",
  ];

  const hideNavbarFooter =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/blog/read-blog") ||
    authRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      <ScrollToTop />

      <Toaster />
      <Suspense
        fallback={
          <div className="text-center text-white py-10">Loading...</div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/careers" element={<Career />} /> */}
          <Route path="/FAQ" element={<FaqSection />} />
          {/* <Route path="/Education" element={<EducationData />} /> */}
          <Route path="/Forecasts" element={<AwardsSection />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio-management" element={<Portfolio />} />
          <Route path="/company-news" element={<CompanyNews />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/gold" element={<Gold />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndConditions />} />

          <Route path="/cryptocurrency" element={<CryptoCurrency />} />
          <Route path="/funded-accounts" element={<FundedAccounts />} />
          <Route path="/trading-bot" element={<TradingBot />} />
          <Route path="/mt4-platform" element={<Platform />} />
          <Route path="/mt5-platform" element={<PlatformMt5 />} />
          <Route path="/copy-trading" element={<CopyTrading />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OtpVerificationPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/blog/read-blog/:blogId" element={<ReadBlog />} />
          <Route path="/image" element={<Image />} />
          <Route path="/dashboard" element={<UserProtectedRoute />}>
            <Route index element={<UserDashboard />} />
            <Route path="/dashboard/buy-plan" element={<BuyPlan />} />
            <Route path="/dashboard/setting" element={<UserSettings />} />
            <Route
              path="/dashboard/transaction-history"
              element={<TransactionHistory />}
            />
          </Route>
          <Route path="/admin" element={<AdminProtectedRoute />}>
            <Route index element={<AdminDashboard />} />
            <Route path="/admin/add-plan" element={<AddPlan />} />
            <Route path="/admin/payment-gateway" element={<PaymentMethod />} />
            <Route path="/admin/transactions" element={<Transaction />} />
            <Route path="/admin/blog" element={<CreatePost />} />
            <Route path="/admin/blog/view" element={<ViewPosts />} />
            <Route path="/admin/setting" element={<AdminSettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
