import { FaDownload } from 'react-icons/fa'

const ResumeButton = () => {
  return (
    <a
      href="/assets/Varun's Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors duration-300 shadow-md"
      download
    >
      <FaDownload className="text-lg" />
      Download Resume
    </a>
  )
}

export default ResumeButton