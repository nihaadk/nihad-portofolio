'use client';

import CountUp from 'react-countup';

interface Stat {
  number: number;
  text: string;
}

const stats: Stat[] = [
  {
    number: 8,
    text: 'Years of experience',
  },
  {
    number: 20,
    text: 'Projects completed',
  },
  {
    number: 8,
    text: 'Technologies mastered',
  },
  {
    number: 600,
    text: 'Code commits',
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={stat.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 25 ? 'max-w-[100px]' : 'max-w[150px]'
                  } leading-6 text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
