import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="relative mt-24 w-full bg-gradient-to-r from-[#f6dae2] via-[#e9d9d9] to-[#d9dcf1] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-6">
        {/* Brand + Description */}
        <div className="flex flex-col items-center text-center">
          <h4 className="text-3xl font-semibold text-black">SkillTics</h4>
          <p className="text-black text-md mt-2 max-w-sm">
            AI-powered resume analyzer that helps you improve, score, and stand
            out in every application.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-5 mt-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/riteshbafna25/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-125 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-black hover:text-blue-600"
              >
                <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zm-11 19H5V9h3v10zm-1.5-11.268c-.966 0-1.75-.804-1.75-1.732S5.534 4.268 6.5 4.268 8.25 5.072 8.25 6s-.784 1.732-1.75 1.732zM20 19h-3v-5.604c0-1.336-.024-3.056-1.861-3.056-1.864 0-2.15 1.454-2.15 2.958V19h-3V9h2.879v1.367h.041c.4-.758 1.379-1.559 2.839-1.559 3.039 0 3.252 2.004 3.252 4.61V19z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ritesh025"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:scale-125 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-black hover:text-gray-500"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.086 1.838 1.239 1.838 1.239 1.07 1.835 2.809 1.304 3.495.998.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.004-.404c1.02.005 2.047.138 3.004.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.803 5.624-5.475 5.921.43.37.814 1.102.814 2.222v3.293c0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/mrraja018"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:scale-125 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-black hover:text-gray-800 "
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.5 11.24h-6.656l-5.216-6.817-5.97 6.817H1.676l7.73-8.833L1.25 2.25H8.08l4.713 6.231 5.451-6.231zM17.09 19.86h1.834L7.046 4.76H5.078l12.012 15.1z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mr_raja_018/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-130 transition-transform duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-black scale-110 hover:text-rose-600"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-5 text-center text-sm text-black">
        <p>© 2025 SkillTics | Ritesh Bafna</p>
      </div>

      {/* Gradient Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 opacity-70" />
    </footer>
  );
}
