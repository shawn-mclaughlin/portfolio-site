export default function AboutMe() {
  return (
    <section id="about" className="relative mx-auto scroll-mt-24 md:flex">
      <img
        src="src/introduction/me-and-owl.jpg"
        alt="me with an owl in nara, japan"
        className="w-full object-cover object-center md:absolute md:inset-0 md:h-full md:w-1/2"
      />
      <div className="m-auto w-full max-w-7xl">
        <div className="w-full md:flex">
          <div className="py-24 md:ml-auto md:basis-1/2 md:pl-10">
            <h1 className="text-4xl">About Me</h1>
            <p className="leading-relaxed">My name is Shawn McLaughlin.</p>
            <p className="leading-relaxed">
              I am a self-driven, results oriented senior software engineer focused on building
              efficient, resilient systems using a variety of technologies. I am motivated by
              learning new technologies, writing clean test-driven code, and delivering high-quality
              software.
            </p>
            <p className="leading-relaxed">
              Ever since I was a kid, I've always been fascinated with computers. I started coding
              at 16 when my high school offered an introduction to programming course. Writing those
              early java programs, I loved the feeling of creating something from just the thoughts
              and ideas in my head. I was hooked and I knew I wanted to write code for a living. I
              went to college for computer science and never looked back.
            </p>
            <p className="leading-relaxed">
              Currently, I live and work in the greater Philadelphia area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
