export default function AboutMe() {
  //TODO Look into tailwind typography package

  //TODO Ideally, I want the typography to use the same margin logic as the navbar but starting from
  // the 1/2 and then have the image run to the left edge without a leading margin
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 lg:flex">
      <img
        src="src/about/me-and-owl.jpg"
        alt="me with an owl in nara, japan"
        className="w-full object-cover object-center lg:h-auto lg:w-1/2"
      />
      <div className="px-8 py-24 lg:w-1/2 lg:pl-8">
        //TODO Rewrite this section
        <h1 className="text-4xl">About Me</h1>
        <p className="leading-relaxed">My name is Shawn McLaughlin.</p>
        <p className="leading-relaxed">
          I am a self-driven, results oriented senior software engineer focused on building
          efficient, resilient systems using a variety of technologies. I am motivated by learning
          new technologies, writing clean test-driven code, and delivering high-quality software.
        </p>
        <p className="leading-relaxed">
          Ever since I was a kid, I've always been fascinated with computers. I started coding at 16
          when my high school offered an introduction to programming course. Writing those early
          java programs, I loved the feeling of creating something from just the thoughts and ideas
          in my head. I was hooked and I knew I wanted to write code for a living. I went to college
          for computer science and never looked back.
        </p>
        <p>
          I studied at Temple University where I received a degree in Computer Science. I've also
          pass the N3 level of the Japanese Language Proficiency Test
        </p>
        <p className="leading-relaxed">
          Currently, I live and work in the greater Philadelphia area.
        </p>
      </div>
    </section>
  );
}
