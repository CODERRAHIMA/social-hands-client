import BannerPage from "@/components/home/Banner";
import Features from "@/components/home/Features";
import Newsletter from "@/components/home/NewsLetter";
import RecentUpcoming from "@/components/home/RecentUpcoming";
// import Statistics from "@/components/home/Statistics";
import StoriesGallery from "@/components/home/StoriesGallery";

export default function Home() {
  return (
    <div>
      <BannerPage />
      {/* <Statistics /> */}
      <Features />
      <RecentUpcoming />
      <StoriesGallery />
      <Newsletter />
    </div>
  );
}
