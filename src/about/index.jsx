import React from 'react';

const About = () => {
  const images = [
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/1-6.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/2-5.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/3-5.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/4-5.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/5-3.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/6-4.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/7-1.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/8-1.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/9-1.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/10-2.png',
    'https://sripadastudiosdigital.com/wp-content/uploads/2025/04/11-2.png',
  ];

  const loopImages = images.concat(images);

  return (
    <>
      <section className="w-full bg-[#f0f0f0] overflow-hidden">
        <div className="h-[50vh]">
          <div className="flex w-max aaaa-animate">
            {loopImages.map((src, idx) => (
              <div
                className="flex-shrink-0 h-[50vh] w-[280px] md:w-[360px] lg:w-[460px]"
                key={`${src}-${idx}`}
              >
                <img className="h-full w-full object-cover" src={src} alt={`Carousel ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#eaffc6] to-[#fafafa] py-16 px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              className="w-full max-w-md rounded-2xl object-cover shadow-lg"
              src="/about page/SSD_Performance-Marketing-Webpage-17.png"
              alt="The Boys Story"
            />
          </div>

          <div className="font-google-sans text-[#1f1f1f]">
            <h2 className="font-geom text-3xl font-extrabold text-[#5b21b6] md:text-4xl">
              THE BOYS STORY!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#2b2b2b]">
              P V Phani Srivatsa &amp; Satish MS quit their 10-to-7 jobs, believing Sripada Studios
              as their dream and goal, trusting their talent completely. Both are passionate about
              cinema and digital marketing, which eventually led to the development of this
              conglomerate company. If you wish to engage with Sripada Studios, you should speak
              with these individuals who will astound you with their immense potential and
              delightful sense of humour.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5b21b6] px-6 py-3 text-sm font-semibold text-white">
              Know More <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
