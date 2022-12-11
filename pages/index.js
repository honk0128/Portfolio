import Head from 'next/head';
import Image from 'next/image';
import ExperienceCard from '../modules/experience-card';
import PortfolioCard from '../modules/portfolio-card';

export default function Home() {
  return (
    <div className="max-w-full">
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Är du på jakt efter en ny hemsida och/eller mobilapp för ditt bolag? Då har du träffat rätt. Titta in på sidan för att skapa kontakt."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-full">
        <header className="max-w-full pt-20 pb-40 text-center">
          <div className="flex justify-center"></div>
          <h1 className="text-5xl mt-2 mb-2 font-bold transition-all ease-in-out delay-150 duration-300">
            Portfolio
          </h1>
          <h3 className="text-md sm:text-xl">BackEnd Developer</h3>
        </header>
        <div className="max-w-full bg-purple-200 py-24 skew-y-6 shadow-inner flex  justify-center">
          <div className="sm:flex sm: max-w-5xl -skew-y-6">
            <div className="w-full sm:w-1/2 flex justify-center">
              <img
                className="p-5 max-w-sm profile-pic"
                alt="Jim Odelid"
                src="/logos/profile.png"
              />
            </div>
            <div className="w-full sm:w-1/2 text-center flex justify-center items-center sm:ml-5">
              <div>
                <h2 className="w-full text-3xl uppercase font-semibold pt-10">
                  91813298 홍승현
                </h2>
                <p className="text-lg py-4 px-5">
                  중부대학교 재학중인 91813298 홍승현입니다. 웹 어플리케이션
                  수업을 통해 웹 공부중이며,백엔드 개발자가 되는 것이 꿈입니다.
                  현재 FACTOR 팀원들과 웹 사이트 개발 중 입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 sm:p-10 md:p-20 pb-16">
          <div className="text-center py-5 pt-16 sm:py-10">
            <h2 className="uppercase font-semibold text-3xl">
              활용가능한 프로그램
            </h2>
          </div>
          <div className="p-5 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-2 sm:gap-5 overflow-x-hidden max-w-5xl m-auto">
            <ExperienceCard
              background="bg-blue-300"
              image="/logos/SQL.png"
              title="SQL"
              text="För utveckling mot alla plattformar så som PC, Mobil och Web. Baseras på språket dart."
            />
            <ExperienceCard
              background="bg-black"
              image="/logos/nextjs.webp"
              title="Next.JS"
              text="För utveckling mot webb och API, enligt mig en förbättrad och förenklad variant av React.JS."
            />
            <ExperienceCard
              background="bg-orange-400"
              image="/logos/MongDB.png"
              title="MongoDB"
              text="Molnlösning med Databas, lagring, authentisering och notifikationer med mera."
            />
            <ExperienceCard
              background="bg-red-400"
              image="/logos/hjc.png"
              title="HTML/CSS/JS"
              text="Standard ramverk för att strukturera, styla och manipulera information och innehåll på webben."
            />
            <ExperienceCard
              background="bg-orange-400"
              image="/logos/Python.png"
              title="Python"
              text="Molnlösning med Databas, lagring, authentisering och notifikationer med mera."
            />
          </div>
          <hr className="w-1/5 border m-auto my-12 border-gray-300 transition ease-in-out duration-1000 hover:scale-150" />
        </div>
        <div className="max-w-full -skew-y-6 bg-purple-200 p-5 sm:p-10 md:p-20 my-10 shadow-inner">
          <div className="skew-y-6 text-center py-10">
            <h2 className="font-semibold text-4xl">Project</h2>
            <p className="text-lg mb-10">지금까지 진행해온 프로젝트들입니다.</p>
            <div className="px-5 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 overflow-x-hidden max-w-5xl m-auto">
              <PortfolioCard
                image="/logos/project1.png"
                title="Time-Course"
                text="중부대학교 수강신청 사이트의 불편한 점을 느껴서 제작하게
                되었습니다. 학생들이 불편하게 느꼈던 점을 설문 후 페이지에
                반영하였습니다."
                gitlink="https://github.com/honk0128/Time-Course"
              />
              <PortfolioCard
                image="/logos/project2.png"
                title="To do list"
                text=" 현대 사회에서 많은 사람들이 사용하는 SNS와 일정 관리 사이트를
                조합하여 만들면 어떨까 하는 취지에서 팀원들과 제작해보게
                되었습니다."
                gitlink="https://github.com/honk0128/To-do-list"
              />

              <PortfolioCard
                image="/logos/project4.png"
                title="Nextshop"
                text="웹 어플리케이션 수업 시간에 진행한 프로젝트로 Next.js와
                MongoDB에 관하여 공부하였고 Vercel이라는 사이트도
                알게되었습니다."
                demolink="https://nextshop1.vercel.app/"
                gitlink="https://github.com/honk0128/nextshop"
              />
              <PortfolioCard
                image="/logos/project5.png"
                title="CycleSC"
                text="자전거를 처음 이용하는 입문자들을 위해 상황에 맞는 자전거를
                추천해주는 사이트를 제작하였습니다."
                demolink="https://bicycle-smoky.vercel.app/"
                gitlink="https://github.com/honk0128/Bicycle"
              />

              <PortfolioCard
                image="/logos/project3.png"
                title="개발자들을 위한 워크스페이스"
                text="1학기 암호프로그래밍 시간에 배운 암호기술을 활용하여
                개발자들이 안전하게 팀 프로젝트를 진행할 수 있는 사이트를
                만들어보았습니다."
              />
            </div>
          </div>
        </div>
        <div className="my-24 text-center">
          <h2 className="text-4xl font-semibold">About</h2>
          <hr className="w-1/5 border m-auto my-10 border-gray-300 transition ease-in-out duration-1000 hover:scale-150" />
          <div className="grid grid-cols-3 gap-5 contact-links max-w-5xl m-auto">
            <a target="blank" href="https://www.instagram.com/seunghyeon8370/">
              <img
                className="transition max-w-full ease-in-out duration-1000 hover:scale-110"
                src="/logos/Instagram.png"
                alt="Instagram"
              />
            </a>
            <a target="blank" href="https://github.com/honk0128">
              <img
                className="transition max-w-full ease-in-out duration-1000 hover:scale-110"
                src="/logos/github.png"
                alt="github"
              />
            </a>
            <a target="blank" href="https://vercel.com/dashboard">
              <img
                className="transition max-w-full ease-in-out duration-1000 hover:scale-110"
                src="/logos/vercel.png"
                alt="mail"
              />
            </a>
          </div>
        </div>
      </main>
      <footer className="max-w-full bg-black opacity-80 p-20 shadow-inner text-center text-white">
        <span>
          Copyright 2022 &copy; Hong Seunghyun <br /> All rights reserved.
        </span>
      </footer>
    </div>
  );
}
