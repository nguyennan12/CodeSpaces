import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaPython, FaJava,
  FaFileAlt, FaImage, FaFileArchive,
  FaFolder, FaFolderOpen
} from 'react-icons/fa'

import {
  SiTypescript, SiCplusplus,
  SiJson, SiMysql, SiMongodb, SiMarkdown
} from 'react-icons/si'

// 🔥 map extension → icon
const fileIconMap = {
  html: <FaHtml5 color="#e34c26" />,
  css: <FaCss3Alt color="#264de4" />,
  js: <FaJs color="#f0db4f" />,
  jsx: <FaReact color="#61dbfb" />,
  ts: <SiTypescript color="#3178c6" />,
  tsx: <FaReact color="#61dbfb" />,

  py: <FaPython color="#3776ab" />,
  java: <FaJava color="#f89820" />,
  cpp: <SiCplusplus color="#00599c" />,

  json: <SiJson color="#f0db4f" />,
  sql: <SiMysql color="#00758f" />,
  db: <SiMongodb color="#47a248" />,

  md: <SiMarkdown color="#fff" />,
  txt: <FaFileAlt color="#ccc" />,

  png: <FaImage color="#e67e22" />,
  jpg: <FaImage color="#e67e22" />,
  jpeg: <FaImage color="#e67e22" />,
  gif: <FaImage color="#e67e22" />,
  svg: <FaImage color="#e67e22" />,

  zip: <FaFileArchive color="#8e44ad" />,
  rar: <FaFileArchive color="#8e44ad" />,
  '7z': <FaFileArchive color="#8e44ad" />
}

// 🔥 function chính
export const getIcon = (fileName, isFolder, isOpen) => {
  if (isFolder) {
    return isOpen
      ? <FaFolderOpen color="#f1c40f" />
      : <FaFolder color="#f1c40f" />
  }

  const extension = fileName.split('.').pop().toLowerCase()

  return fileIconMap[extension] || <FaFileAlt color="#aaa" />
}
