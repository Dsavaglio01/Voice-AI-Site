import { DM_Sans, Geist} from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Header } from "./sections/Header";
import { useRouter } from "next/router";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
const geist = Geist();
export default function Home() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/main/home');
  }
  return (
    <div className={`${geist.className}`}>
      <Hero />
      <Features />
    </div>
  );
}
