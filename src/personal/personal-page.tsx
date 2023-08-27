export default function PersonalPage() {
  return (
    <>
      <section className="mb-2">
        <h1 className="text-2xl">Fun Facts</h1>
        <ul className="list-inside list-disc">
          <li>
            My wife and I met when we were set up as blind dates for Prom. We have been together
            since April 2007 and we married in 2015. We welcomed our first child into the world in
            2021 and I've since forgotten what a full night's sleep is.
          </li>
          <li>
            I love Japan. I studied Japanese for my language requirement in college and resumed
            studying after I graduated. In 2019, I passed the Japanese Language Proficiency Test
            level N3. I've been to Japan twice, made some friends there, and can't wait to return.
          </li>
          <li>
            My hobbies include playing video games (particularly fighting games), rock climbing
            (when there's not a global pandemic preventing me from going), and spending time with my
            family.
          </li>
        </ul>
      </section>

      <section className="mb-2">
        <h1 className="text-2xl">Favorite Video Games</h1>
        <ul className="list-inside list-disc">
          <li>Outer Wilds</li>
          <li>Chrono Cross</li>
          <li>Dragon Ball FighterZ</li>
        </ul>
      </section>

      <section className="mb-2">
        <h1 className="text-2xl">Favorite Movies</h1>
        <ul className="list-inside list-disc">
          <li>Interstellar</li>
          <li>Spaceballs</li>
          <li>Your Name</li>
        </ul>
      </section>

      <section className="mb-2">
        <h1 className="text-2xl">Favorite TV Shows</h1>
        <ul className="list-inside list-disc">
          <li>The Simpsons</li>
          <li>Community</li>
          <li>Gravity Falls</li>
        </ul>
      </section>
    </>
  );
}
