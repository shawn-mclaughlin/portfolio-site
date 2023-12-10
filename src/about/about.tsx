export default function AboutMe() {
  //TODO Look into tailwind typography package

  //TODO Rewrite this section

  //TODO Ideally, I want the typography to use the same margin logic as the navbar but starting from
  // the 1/2 and then have the image run to the left edge without a leading margin
  return (
    <section id="about" className="relative scroll-mt-24 lg:flex">
      <img
        src="src/about/me-and-owl.jpg"
        alt="me holding an owl in nara, japan"
        className="max-h-screen w-full object-cover object-center lg:absolute lg:left-0 lg:h-full lg:w-1/2"
      />
      <div className="mx-auto h-fit w-11/12 max-w-7xl py-24 2xl:w-4/5">
        <div className="w-full space-y-4 lg:ml-auto lg:w-1/2 lg:basis-1/2 lg:pl-10">
          <h1 className="text-4xl">About</h1>
          <p className="leading-relaxed">My name is Shawn McLaughlin.</p>
          <p className="leading-relaxed">
            I'm a senior software engineer living and working in the greater Philadelphia area. I
            love learning new technologies, solving interesting problems, and building awesome stuff
            with code.
          </p>
          <p className="leading-relaxed">
            I studied at Temple University where I graduated with a Bachelors of Science in Computer
            Science. Since then I've worked as a professional software engineer for a variety of
            companies solving challenging problems, meeting cool people, and building awesome
            software.
          </p>
          <p className="leading-relaxed">
            Outside of coding, I am a husband and father, I have passed the N3 level of the Japanese
            Language Proficiency Test, and I enjoy playing video games (particularly fighting
            games).
          </p>
        </div>
      </div>
    </section>
  );
}
