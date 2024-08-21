import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Senior Frontend Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&#39;m <br />{" "}
              <span className="text-accent">Nihad Kerić</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Experienced frontend developer with over 8 years of experiences.
              Passionate about designing intuitive user interfaces and
              optimizing user experiences. Quick learner, always up to date with
              the latest technology. Let&#39;s connect and exchange knowledge.
            </p>
            <div className="mb-8 xl:b-0 ">
              <SocialLinks
                containerStyle="flex gap-6 items-center justify-center xl:items-start xl:justify-start"
                iconStyle="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
