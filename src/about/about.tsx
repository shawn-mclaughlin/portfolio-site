export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto h-fit w-11/12 max-w-7xl py-4 2xl:w-4/5">
        <h1 className="mb-4 text-4xl">About me</h1>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="md:w-1/2">
            <img
              src="src/about/me-and-owl.jpg"
              alt="me holding an owl in nara, japan"
              className="rounded-full object-cover object-center"
            />
          </div>
          <div className="space-y-4 md:w-1/2">
            <p className="leading-relaxed">My name is Shawn McLaughlin</p>
            <p className="leading-relaxed">
              I'm a senior software engineer living and working in the greater Philadelphia area. I
              love learning new technologies, solving interesting problems, and building awesome
              stuff with code.
            </p>
            <p className="leading-relaxed">
              I studied at Temple University where I graduated with a Bachelors of Science in
              Computer Science. Since then I've worked as a professional software engineer for a
              variety of companies solving challenging problems, meeting cool people, and building
              awesome software.
            </p>
            <p className="leading-relaxed">
              Outside of coding, I am a husband and father, I have passed the N3 level of the
              Japanese Language Proficiency Test, and I enjoy playing video games (particularly
              fighting games).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
