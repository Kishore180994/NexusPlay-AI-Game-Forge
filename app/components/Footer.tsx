import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">
              NexusPlay: AI Game Forge
            </h3>
            <p className="text-gray-400">
              Empowering game creators with AI technology
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/features">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.957-2.173-1.555-3.594-1.555-2.721 0-4.924 2.205-4.924 4.917 0 .39.045.765.127 1.124-4.092-.205-7.719-2.164-10.148-5.144-.422.724-.664 1.561-.664 2.457 0 1.696.866 3.191 2.188 4.073-.804-.026-1.562-.248-2.23-.616v.062c0 2.367 1.684 4.342 3.918 4.784-.41.111-.841.171-1.285.171-.314 0-.618-.03-.917-.086.619 1.934 2.417 3.34 4.543 3.379-1.666 1.306-3.765 2.086-6.045 2.086-.393 0-.779-.023-1.17-.068 2.159 1.384 4.729 2.192 7.504 2.192 9.004 0 13.926-7.457 13.926-13.926 0-.211-.005-.42-.015-.63.961-.693 1.8-1.56 2.462-2.548l-.047-.02z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.729 0-1.325.596-1.325 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.495v-9.294h-3.123v-3.622h3.123v-2.671c0-3.1 1.891-4.787 4.649-4.787 1.321 0 2.462.098 2.794.143v3.243l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.308h3.587l-.467 3.622h-3.12v9.294h6.116c.729 0 1.324-.595 1.324-1.324v-21.35c0-.729-.595-1.325-1.324-1.325z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.923.245 2.366.415.572.22.98.484 1.41.914.43.43.694.837.914 1.41.169.443.359 1.16.415 2.366.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.245 1.923-.415 2.366-.22.572-.484.98-.914 1.41-.43.43-.837.694-1.41.914-.443.169-1.16.359-2.366.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.923-.245-2.366-.415-.572-.22-.98-.484-1.41-.914-.43-.43-.694-.837-.914-1.41-.169-.443-.359-1.16-.415-2.366-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.206.245-1.923.415-2.366.22-.572.484-.98.914-1.41.43-.43.837-.694 1.41-.914.443-.169 1.16-.359 2.366-.415 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.271.058-2.146.246-2.9.513-.757.268-1.4.631-2.034 1.265-.635.635-.997 1.277-1.265 2.034-.267.754-.455 1.629-.513 2.9-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.271.246 2.146.513 2.9.268.757.631 1.4 1.265 2.034.635.635 1.277.997 2.034 1.265.754.267 1.629.455 2.9.513 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.271-.058 2.146-.246 2.9-.513.757-.268 1.4-.631 2.034-1.265.635-.635.997-1.277 1.265-2.034.267-.754.455-1.629.513-2.9.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.271-.246-2.146-.513-2.9-.268-.757-.631-1.4-1.265-2.034-.635-.635-1.277-.997-2.034-1.265-.754-.267-1.629-.455-2.9-.513-1.28-.058-1.688-.072-4.947-.072z" />
                  <path d="M12 5.838c-3.406 0-6.162 2.756-6.162 6.162s2.756 6.162 6.162 6.162 6.162-2.756 6.162-6.162-2.756-6.162-6.162-6.162zm0 10.1c-2.17 0-3.938-1.768-3.938-3.938s1.768-3.938 3.938-3.938 3.938 1.768 3.938 3.938-1.768 3.938-3.938 3.938zm6.406-11.1c-.796 0-1.44.644-1.44 1.44s.644 1.44 1.44 1.44 1.44-.644 1.44-1.44-.644-1.44-1.44-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} NexusPlay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
