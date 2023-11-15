import { SiGithub, SiLinkedin } from "react-icons/si";
import { RiMailFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer id="footer">
      <hr />
      <div className="flex flex-col items-center justify-center gap-4 py-10">
        <ul className="flex items-center gap-4">
          <li>
            <a href="https://github.com/shawn-mclaughlin" target="_blank">
              <SiGithub size={32} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shawn-mclaughlin-dev" target="_blank">
              <SiLinkedin size={32} />
            </a>
          </li>
          <li>
            <a href="mailto:shawn@shawnmclaughlin.dev" target="_blank">
              <RiMailFill size={32} />
            </a>
          </li>
        </ul>
        <small className="justify-start">© {new Date().getFullYear()} Copyright</small>
      </div>
    </footer>
  );
}
