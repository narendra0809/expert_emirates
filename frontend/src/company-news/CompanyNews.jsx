import { useEffect, useState } from "react";
import CompanyNewsBanner from "./CompanyNewsBanner";
import LatestNews from "./LatestNews";
import CommunitySection from "../forecastAwards/CommunitySection";
// import FeatureSection from "../homepage/FeatureSection";
import BlogFilters from "./BlogFilters";
// import BlogSection from "./BlogSection";
import BlogCryptoForecastCards from "./BlogCryptoForecastCards";
// import BlogPostDetail from "../blogdetail/BlogPostDetail";
// import BlogBitcoinDetailTow from "../blogdetail/BlogBitcoinDetailTwo";
// import BlogDetailThree from "../blogdetail/BlogDetailThree";
// import BlogSuiDetail from "../blogdetail/BlogSuiDetail";
// import BlogBitcoinDetailFinal from "../blogdetail/BlogBitcoinDetailFinal";
// import BlogBitcoinCorrection from "../blogdetail/BlogBitcoinCorrection";
// import BlogLinkDetail from "../blogdetail/BlogLinkDetail";
// import BlogBitcoinConsolidation from "../blogdetail/BlogBitcoinConsolidation";
// import AptusdtArticle from "../blogdetail/AptusdtArticle";
// import BitcoinArticle from "../blogdetail/BitcoinArticle";
import api from "../axios/api";

export default function CompanyNews() {
  const [blogType, setBlogType] = useState("Forex Forecast");
  const [blogsData, setBlogsData] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await api.get("/blogs");
      if (response.status !== 200) {
        throw new Error("Unable to fetch blogs");
      }
      setBlogsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <CompanyNewsBanner />
      <LatestNews />
      <CommunitySection />
      <BlogFilters blogType={blogType} setBlogType={setBlogType} />
      {/* <BlogSection/> */}
      <BlogCryptoForecastCards blogType={blogType} blogsData={blogsData} />
      {/* <BlogPostDetail blogId={blogId}/> */}
      {/* <BlogBitcoinDetailTow/> */}
      {/* <BlogDetailThree/> */}
      {/* <BlogSuiDetail/> */}
      {/* <BlogBitcoinDetailFinal/> */}
      {/* <BlogBitcoinCorrection/> */}
      {/* <BlogLinkDetail/> */}
      {/* <BlogBitcoinConsolidation/> */}
      {/* <AptusdtArticle/> */}
      {/* <BitcoinArticle/> */}
      {/* <FeatureSection/> */}
      {/* <GoldBlogGrid/> */}
    </div>
  );
}
