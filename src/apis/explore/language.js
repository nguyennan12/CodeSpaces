export const LANGUAGES = [
  {
    id: 'javascript',
    label: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    version: 'Node.js 18',
    monacoLang: 'javascript',
    runtime: { language: 'javascript', version: '18.15.0' },
    defaultCode: `// JavaScript
function solve() {
  console.log("Hello World");
}
solve();`
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    version: 'TS 5',
    runtime: { language: 'typescript', version: '5.0.3' },
    monacoLang: 'typescript',
    defaultCode: `// TypeScript
function solve(): void {
  console.log("Hello World");
}
solve();`
  },
  {
    id: 'python',
    label: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    version: 'Python 3.10',
    runtime: { language: 'python', version: '3.10.0' },
    monacoLang: 'python',
    defaultCode: `# Python
def solve():
    print("Hello World")

solve()`
  },
  {
    id: 'cpp',
    label: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    version: 'GCC 14',
    runtime: { language: 'cpp', version: '10.2.0' },
    monacoLang: 'cpp',
    defaultCode: `// C++
#include <bits/stdc++.h>
using namespace std;

int main() {
  cout << "Hello World";
  return 0;
}`
  },
  {
    id: 'c',
    label: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    version: 'GCC 14',
    runtime: { language: 'c', version: '10.2.0' },
    monacoLang: 'c',
    defaultCode: `// C
#include <stdio.h>

int main() {
  printf("Hello World");
  return 0;
}`
  },
  {
    id: 'java',
    label: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    version: 'Java 17',
    runtime: { language: 'java', version: '15.0.2' },
    monacoLang: 'java',
    defaultCode: `// Java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`
  },
  {
    id: 'csharp',
    label: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    version: '.NET 7',
    runtime: { language: 'csharp', version: '6.12.0' },
    monacoLang: 'csharp',
    defaultCode: `// C#
using System;

class Program {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}`
  },
  {
    id: 'go',
    label: 'Go',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
    version: 'Go 1.21',
    runtime: { language: 'go', version: '1.16.2' },
    monacoLang: 'go',
    defaultCode: `// Go
package main
import "fmt"

func main() {
  fmt.Println("Hello World")
}`
  },
  {
    id: 'rust',
    label: 'Rust',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
    version: 'Rust 1.75',
    runtime: { language: 'rust', version: '1.68.2' },
    monacoLang: 'rust',
    defaultCode: `// Rust
fn main() {
  println!("Hello World");
}`
  },
  {
    id: 'php',
    label: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    version: 'PHP 8.2',
    runtime: { language: 'php', version: '8.2.3' },
    monacoLang: 'php',
    defaultCode: `<?php
echo "Hello World";
?>`
  },
  {
    id: 'ruby',
    label: 'Ruby',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
    version: 'Ruby 3',
    runtime: { language: 'ruby', version: '3.0.1' },
    monacoLang: 'ruby',
    defaultCode: `# Ruby
puts "Hello World"`
  },
  // ===== MARKUP / WEB =====
  {
    id: 'html',
    label: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    version: 'HTML5',
    monacoLang: 'html',
    defaultCode: `<!DOCTYPE html>
<html>
<head>
  <title>Hello</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>`
  },

  {
    id: 'css',
    label: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    version: 'CSS3',
    monacoLang: 'css',
    defaultCode: `body {
  background: #111;
  color: white;
}`
  },

  {
    id: 'scss',
    label: 'SCSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    version: 'SCSS',
    monacoLang: 'scss',
    defaultCode: `$color: red;

body {
  color: $color;
}`
  },

  // ===== DATA / CONFIG =====
  {
    id: 'json',
    label: 'JSON',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg',
    version: 'JSON',
    monacoLang: 'json',
    defaultCode: `{
  "message": "Hello World"
}`
  },

  {
    id: 'yaml',
    label: 'YAML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg',
    version: 'YAML',
    monacoLang: 'yaml',
    defaultCode: 'message: Hello World'
  },

  {
    id: 'xml',
    label: 'XML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg',
    version: 'XML',
    monacoLang: 'xml',
    defaultCode: `<note>
  <body>Hello World</body>
</note>`
  },

  // ===== DATABASE =====
  {
    id: 'sql',
    label: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    version: 'SQL',
    monacoLang: 'sql',
    defaultCode: 'SELECT * FROM users;'
  },

  // ===== SCRIPT =====
  {
    id: 'bash',
    label: 'Bash',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
    version: 'Bash',
    monacoLang: 'shell',
    defaultCode: 'echo "Hello World"'
  },
  {
    id: 'nodejs',
    label: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    version: 'Node 18',
    monacoLang: 'javascript',
    defaultCode: `// Node.js
const http = require('http');

http.createServer((req, res) => {
  res.end('Hello World');
}).listen(3000);`
  },

  {
    id: 'react',
    label: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    version: 'React 18',
    monacoLang: 'javascript',
    defaultCode: `// React
import React from "react";

export default function App() {
  return <h1>Hello World</h1>;
}`
  },

  {
    id: 'nextjs',
    label: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    version: 'Next 14',
    monacoLang: 'javascript',
    defaultCode: `// Next.js
export default function Home() {
  return <h1>Hello World</h1>;
}`
  },

  {
    id: 'django',
    label: 'Django',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    version: 'Django 4',
    monacoLang: 'python',
    defaultCode: `# Django view
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello World")`
  },

  {
    id: 'spring',
    label: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    version: 'Spring Boot',
    monacoLang: 'java',
    defaultCode: `// Spring Boot
@RestController
public class HelloController {
  @GetMapping("/")
  public String hello() {
    return "Hello World";
  }
}`
  },
  {
    id: 'powershell',
    label: 'PowerShell',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg',
    version: 'PowerShell',
    monacoLang: 'powershell',
    defaultCode: 'Write-Output "Hello World"'
  },

  // ===== DOC =====
  {
    id: 'markdown',
    label: 'Markdown',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg',
    version: 'Markdown',
    monacoLang: 'markdown',
    defaultCode: '# Hello World'
  },

  {
    id: 'docker',
    label: 'Dockerfile',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    version: 'Docker',
    monacoLang: 'dockerfile',
    defaultCode: `FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]`
  },

  {
    id: 'ini',
    label: 'INI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg',
    version: 'INI',
    monacoLang: 'ini',
    defaultCode: `[section]
key=value`
  }


]
